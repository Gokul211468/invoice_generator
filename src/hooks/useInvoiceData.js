import { useState, useCallback, useEffect, useMemo } from 'react';
import { 
  generateDefaultInvoiceDetails, 
  generateDefaultItem, 
  generateItemId 
} from '../utils/generators.js';
import { 
  calculateItemValues, 
  calculateInvoiceTotals 
} from '../utils/calculations.js';

/**
 * Custom hook for managing invoice data
 * @param {Object} initialData - Initial invoice data
 * @returns {Object} Invoice data and management functions
 */
const useInvoiceData = (initialData = {}) => {
  // Initialize invoice details
  const [invoiceDetails, setInvoiceDetails] = useState(() => ({
    ...generateDefaultInvoiceDetails(),
    ...initialData.invoiceDetails
  }));

  // Initialize items
  const [items, setItems] = useState(initialData.items || []);

  // Loading and error states
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Calculate totals whenever items change
  const totals = useMemo(() => {
    return calculateInvoiceTotals(items);
  }, [items]);

  /**
   * Update invoice details
   * @param {Object} updates - Partial updates to invoice details
   */
  const updateInvoiceDetails = useCallback((updates) => {
    setInvoiceDetails(prevDetails => ({
      ...prevDetails,
      ...updates
    }));
    setError(null);
  }, []);

  /**
   * Add a new item to the invoice
   * @param {Object} itemData - Item data to add
   */
  const addItem = useCallback((itemData) => {
    const newItem = {
      ...generateDefaultItem(),
      ...itemData,
      id: itemData.id || generateItemId()
    };

    const calculatedItem = calculateItemValues(newItem);
    
    setItems(prevItems => [...prevItems, calculatedItem]);
    setError(null);
  }, []);

  /**
   * Update an existing item
   * @param {string} itemId - ID of the item to update
   * @param {Object} updates - Updates to apply to the item
   */
  const updateItem = useCallback((itemId, updates) => {
    setItems(prevItems =>
      prevItems.map(item => {
        if (item.id === itemId) {
          const updatedItem = { ...item, ...updates };
          return calculateItemValues(updatedItem);
        }
        return item;
      })
    );
    setError(null);
  }, []);

  /**
   * Delete an item from the invoice
   * @param {string} itemId - ID of the item to delete
   */
  const deleteItem = useCallback((itemId) => {
    setItems(prevItems => prevItems.filter(item => item.id !== itemId));
    setError(null);
  }, []);

  /**
   * Duplicate an item
   * @param {string} itemId - ID of the item to duplicate
   */
  const duplicateItem = useCallback((itemId) => {
    const itemToDuplicate = items.find(item => item.id === itemId);
    if (itemToDuplicate) {
      const duplicatedItem = {
        ...itemToDuplicate,
        id: generateItemId(),
        name: `${itemToDuplicate.name} (Copy)`
      };
      const calculatedItem = calculateItemValues(duplicatedItem);
      setItems(prevItems => [...prevItems, calculatedItem]);
    }
    setError(null);
  }, [items]);

  /**
   * Move item up in the list
   * @param {string} itemId - ID of the item to move up
   */
  const moveItemUp = useCallback((itemId) => {
    setItems(prevItems => {
      const index = prevItems.findIndex(item => item.id === itemId);
      if (index > 0) {
        const newItems = [...prevItems];
        [newItems[index - 1], newItems[index]] = [newItems[index], newItems[index - 1]];
        return newItems;
      }
      return prevItems;
    });
  }, []);

  /**
   * Move item down in the list
   * @param {string} itemId - ID of the item to move down
   */
  const moveItemDown = useCallback((itemId) => {
    setItems(prevItems => {
      const index = prevItems.findIndex(item => item.id === itemId);
      if (index < prevItems.length - 1) {
        const newItems = [...prevItems];
        [newItems[index], newItems[index + 1]] = [newItems[index + 1], newItems[index]];
        return newItems;
      }
      return prevItems;
    });
  }, []);

  /**
   * Clear all items from the invoice
   */
  const clearAllItems = useCallback(() => {
    setItems([]);
    setError(null);
  }, []);

  /**
   * Reset the entire invoice to defaults
   */
  const resetInvoice = useCallback(() => {
    setInvoiceDetails(generateDefaultInvoiceDetails());
    setItems([]);
    setError(null);
  }, []);

  /**
   * Get complete invoice data
   */
  const getInvoiceData = useCallback(() => {
    return {
      invoiceDetails,
      items,
      totals
    };
  }, [invoiceDetails, items, totals]);

  /**
   * Set complete invoice data
   * @param {Object} data - Complete invoice data
   */
  const setInvoiceData = useCallback((data) => {
    if (data.invoiceDetails) {
      setInvoiceDetails(data.invoiceDetails);
    }
    if (data.items) {
      // Recalculate all items to ensure consistency
      const calculatedItems = data.items.map(calculateItemValues);
      setItems(calculatedItems);
    }
    setError(null);
  }, []);

  /**
   * Export invoice data as JSON
   */
  const exportData = useCallback(() => {
    return JSON.stringify(getInvoiceData(), null, 2);
  }, [getInvoiceData]);

  /**
   * Import invoice data from JSON
   * @param {string} jsonData - JSON string containing invoice data
   */
  const importData = useCallback((jsonData) => {
    try {
      setIsLoading(true);
      const data = JSON.parse(jsonData);
      setInvoiceData(data);
      setError(null);
    } catch (err) {
      setError('Invalid JSON data format');
      console.error('Import error:', err);
    } finally {
      setIsLoading(false);
    }
  }, [setInvoiceData]);

  /**
   * Validate invoice data
   */
  const validateInvoice = useCallback(() => {
    const errors = {};
    
    // Check required invoice details
    if (!invoiceDetails.invoiceNumber?.trim()) {
      errors.invoiceNumber = 'Invoice number is required';
    }
    
    if (!invoiceDetails.date) {
      errors.date = 'Invoice date is required';
    }
    
    if (!invoiceDetails.customerName?.trim()) {
      errors.customerName = 'Customer name is required';
    }
    
    // Check items
    if (items.length === 0) {
      errors.items = 'At least one item is required';
    }
    
    const hasErrors = Object.keys(errors).length > 0;
    
    if (hasErrors) {
      setError(errors);
    } else {
      setError(null);
    }
    
    return !hasErrors;
  }, [invoiceDetails, items]);

  /**
   * Save invoice data to localStorage
   * @param {string} key - Storage key (optional)
   */
  const saveToStorage = useCallback((key = 'invoice_draft') => {
    try {
      const data = getInvoiceData();
      localStorage.setItem(key, JSON.stringify(data));
      return true;
    } catch (err) {
      console.error('Save to storage error:', err);
      setError('Failed to save invoice data');
      return false;
    }
  }, [getInvoiceData]);

  /**
   * Load invoice data from localStorage
   * @param {string} key - Storage key (optional)
   */
  const loadFromStorage = useCallback((key = 'invoice_draft') => {
    try {
      const stored = localStorage.getItem(key);
      if (stored) {
        const data = JSON.parse(stored);
        setInvoiceData(data);
        return true;
      }
      return false;
    } catch (err) {
      console.error('Load from storage error:', err);
      setError('Failed to load invoice data');
      return false;
    }
  }, [setInvoiceData]);

  /**
   * Clear invoice data from localStorage
   * @param {string} key - Storage key (optional)
   */
  const clearStorage = useCallback((key = 'invoice_draft') => {
    try {
      localStorage.removeItem(key);
      return true;
    } catch (err) {
      console.error('Clear storage error:', err);
      return false;
    }
  }, []);

  // Auto-save functionality
  useEffect(() => {
    const autoSaveTimer = setTimeout(() => {
      if (items.length > 0 || invoiceDetails.customerName) {
        saveToStorage('invoice_autosave');
      }
    }, 2000); // Auto-save after 2 seconds of inactivity

    return () => clearTimeout(autoSaveTimer);
  }, [invoiceDetails, items, saveToStorage]);

  return {
    // State
    invoiceDetails,
    items,
    totals,
    isLoading,
    error,
    
    // Invoice details management
    updateInvoiceDetails,
    
    // Items management
    addItem,
    updateItem,
    deleteItem,
    duplicateItem,
    moveItemUp,
    moveItemDown,
    clearAllItems,
    
    // Data management
    getInvoiceData,
    setInvoiceData,
    resetInvoice,
    
    // Import/Export
    exportData,
    importData,
    
    // Validation
    validateInvoice,
    
    // Storage
    saveToStorage,
    loadFromStorage,
    clearStorage,
    
    // Utility
    setError,
    setIsLoading
  };
};

export default useInvoiceData;
