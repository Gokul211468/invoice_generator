import React, { useState } from 'react';
import { Plus, X } from 'lucide-react';
import Card from '../../hook/UI/Card.jsx';
import FormField from '../../hook/UI/FormField.jsx';
import Button from '../../hook/UI/Button.jsx';
import { INVOICE_CONFIG } from '../../src/config/constants.js';

const ItemForm = ({ onAddItem, errors, validateField, clearError }) => {
  const [currentItem, setCurrentItem] = useState({
    name: '',
    description: '',
    quantity: '',
    price: '',
    taxRate: INVOICE_CONFIG.DEFAULT_TAX_RATE.toString()
  });

  const [isValid, setIsValid] = useState(false);

  const handleFieldChange = (field, value) => {
    setCurrentItem(prev => ({ ...prev, [field]: value }));
    clearError(`currentItem.${field}`);
    validateCurrentItem({ ...currentItem, [field]: value });
  };

  const handleFieldBlur = (field, value, rules) => {
    validateField(`currentItem.${field}`, value, rules);
  };

  const validateCurrentItem = (item = currentItem) => {
    const valid = item.name.trim() && 
                 item.quantity && 
                 Number(item.quantity) >= INVOICE_CONFIG.MIN_QUANTITY &&
                 item.price && 
                 Number(item.price) >= INVOICE_CONFIG.MIN_PRICE;
    setIsValid(valid);
    return valid;
  };

  const handleAddItem = () => {
    if (validateCurrentItem()) {
      onAddItem(currentItem);
      setCurrentItem({
        name: '',
        description: '',
        quantity: '',
        price: '',
        taxRate: INVOICE_CONFIG.DEFAULT_TAX_RATE.toString()
      });
      setIsValid(false);
    }
  };

  const clearForm = () => {
    setCurrentItem({
      name: '',
      description: '',
      quantity: '',
      price: '',
      taxRate: INVOICE_CONFIG.DEFAULT_TAX_RATE.toString()
    });
    setIsValid(false);
  };

  const hasFormData = currentItem.name || currentItem.quantity || currentItem.price;

  return (
    <Card title="Add New Item">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4 mb-4">
        <FormField 
          label="Item Name" 
          error={errors['currentItem.name']} 
          required
        >
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={currentItem.name}
            onChange={(e) => handleFieldChange('name', e.target.value)}
            onBlur={(e) => handleFieldBlur('name', e.target.value, { required: true })}
            placeholder="Product name"
          />
        </FormField>

        <FormField label="Description">
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={currentItem.description}
            onChange={(e) => handleFieldChange('description', e.target.value)}
            placeholder="Item description"
          />
        </FormField>

        <FormField 
          label="Quantity" 
          error={errors['currentItem.quantity']} 
          required
        >
          <input
            type="number"
            min={INVOICE_CONFIG.MIN_QUANTITY}
            step="0.01"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={currentItem.quantity}
            onChange={(e) => handleFieldChange('quantity', e.target.value)}
            onBlur={(e) => handleFieldBlur('quantity', e.target.value, { 
              required: true, 
              number: true, 
              min: INVOICE_CONFIG.MIN_QUANTITY 
            })}
            placeholder="1"
          />
        </FormField>

        <FormField 
          label="Unit Price" 
          error={errors['currentItem.price']} 
          required
        >
          <input
            type="number"
            min={INVOICE_CONFIG.MIN_PRICE}
            step="0.01"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={currentItem.price}
            onChange={(e) => handleFieldChange('price', e.target.value)}
            onBlur={(e) => handleFieldBlur('price', e.target.value, { 
              required: true, 
              number: true, 
              min: INVOICE_CONFIG.MIN_PRICE 
            })}
            placeholder="10.00"
          />
        </FormField>

        <FormField label="Tax Rate (%)" error={errors['currentItem.taxRate']}>
          <input
            type="number"
            min="0"
            max={INVOICE_CONFIG.MAX_TAX_RATE}
            step="0.01"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={currentItem.taxRate}
            onChange={(e) => handleFieldChange('taxRate', e.target.value)}
            onBlur={(e) => handleFieldBlur('taxRate', e.target.value, { 
              number: true, 
              min: 0, 
              max: INVOICE_CONFIG.MAX_TAX_RATE 
            })}
            placeholder={INVOICE_CONFIG.DEFAULT_TAX_RATE.toString()}
          />
        </FormField>
      </div>

      <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
        <Button 
          onClick={handleAddItem} 
          variant="primary" 
          disabled={!isValid}
        >
          <Plus className="w-4 h-4 mr-2" />
          Add Item
        </Button>
        
        {hasFormData && (
          <Button variant="outline" onClick={clearForm}>
            <X className="w-4 h-4 mr-2" />
            Clear
          </Button>
        )}
      </div>
    </Card>
  );
};

export default ItemForm;
