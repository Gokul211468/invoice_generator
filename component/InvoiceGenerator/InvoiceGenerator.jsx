import React, { useState } from 'react';
import { FileText, Download, Save, Upload, RefreshCw } from 'lucide-react';

// Import components
import InvoiceHeader from './InvoiceHeader.jsx';
import CustomerDetails from './CustomerDetails.jsx';
import ItemForm from './ItemForm.jsx';
import ItemsList from './ItemsList.jsx';
import InvoiceSummary from './InvoiceSummary.jsx';
import Button from '../../hook/UI/Button.jsx';
import LoadingSpinner from '../../hook/UI/LoadingSpinner.jsx';
import PDFGenerator from '../pdf/PDFGenerator.js';

// Import hooks
import useInvoiceData from '../../src/hooks/useInvoiceData.js';
import useFormValidation from '../../src/hooks/useFormValidation.js';

const InvoiceGenerator = () => {
  // Invoice data management
  const {
    invoiceDetails,
    items,
    totals,
    isLoading,
    error,
    updateInvoiceDetails,
    addItem,
    deleteItem,
    duplicateItem,
    resetInvoice,
    getInvoiceData,
    saveToStorage,
    loadFromStorage,
    exportData,
    importData,
    validateInvoice
  } = useInvoiceData();

  // Form validation
  const {
    errors,
    validateField,
    clearError,
    clearAllErrors,
    hasErrors
  } = useFormValidation();

  // Local state
  const [isGenerating, setIsGenerating] = useState(false);
  const [showImport, setShowImport] = useState(false);

  /**
   * Handle PDF generation
   */
  const handleGeneratePDF = async () => {
    if (!validateInvoice()) {
      return;
    }

    if (hasErrors()) {
      alert('Please fix all form errors before generating PDF');
      return;
    }

    if (items.length === 0) {
      alert('Please add at least one item before generating PDF');
      return;
    }

    setIsGenerating(true);
    
    try {
      await PDFGenerator.generateInvoicePDF(getInvoiceData());
      // Auto-save after successful generation
      saveToStorage();
    } catch (error) {
      console.error('PDF generation failed:', error);
      alert(`Failed to generate PDF: ${error.message}`);
    } finally {
      setIsGenerating(false);
    }
  };

  /**
   * Handle save to localStorage
   */
  const handleSave = () => {
    const saved = saveToStorage();
    if (saved) {
      alert('Invoice saved successfully!');
    }
  };

  /**
   * Handle load from localStorage
   */
  const handleLoad = () => {
    const loaded = loadFromStorage();
    if (loaded) {
      clearAllErrors();
      alert('Invoice loaded successfully!');
    } else {
      alert('No saved invoice found');
    }
  };

  /**
   * Handle data export
   */
  const handleExport = () => {
    try {
      const data = exportData();
      const blob = new Blob([data], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      
      const a = document.createElement('a');
      a.href = url;
      a.download = `invoice_${invoiceDetails.invoiceNumber || 'draft'}.json`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      
      URL.revokeObjectURL(url);
      alert('Invoice data exported successfully!');
    } catch (error) {
      console.error('Export failed:', error);
      alert('Failed to export invoice data');
    }
  };

  /**
   * Handle data import
   */
  const handleImport = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        importData(e.target.result);
        clearAllErrors();
        setShowImport(false);
        alert('Invoice data imported successfully!');
      } catch (error) {
        alert('Failed to import invoice data. Please check the file format.');
      }
    };
    reader.readAsText(file);
  };

  /**
   * Handle form reset
   */
  const handleReset = () => {
    if (window.confirm('Are you sure you want to reset all data? This action cannot be undone.')) {
      resetInvoice();
      clearAllErrors();
    }
  };

  /**
   * Check if invoice is ready for generation
   */
  const isReadyForGeneration = () => {
    return (
      invoiceDetails.invoiceNumber &&
      invoiceDetails.date &&
      invoiceDetails.customerName &&
      items.length > 0 &&
      !hasErrors()
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 py-4 sm:py-8">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div className="mb-4 sm:mb-0">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 flex items-center">
                <FileText className="w-6 h-6 sm:w-8 sm:h-8 mr-2 sm:mr-3 text-blue-600" />
                <span className="text-lg sm:text-2xl lg:text-3xl">Invoice Generator</span>
              </h1>
              <p className="mt-2 text-sm sm:text-base text-gray-600">
                Create professional invoices with ease
              </p>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-wrap gap-2 sm:gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={handleLoad}
                disabled={isLoading}
              >
                <Upload className="w-4 h-4 mr-1" />
                Load
              </Button>
              
              <Button
                variant="outline"
                size="sm"
                onClick={handleSave}
                disabled={isLoading}
              >
                <Save className="w-4 h-4 mr-1" />
                Save
              </Button>
              
              <Button
                variant="outline"
                size="sm"
                onClick={handleExport}
                disabled={isLoading || items.length === 0}
              >
                <Download className="w-4 h-4 mr-1" />
                Export
              </Button>
              
              <Button
                variant="ghost"
                size="sm"
                onClick={handleReset}
                disabled={isLoading}
              >
                <RefreshCw className="w-4 h-4 mr-1" />
                Reset
              </Button>
            </div>
          </div>
        </div>

        {/* Import Section */}
        {showImport && (
          <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <h3 className="text-sm font-medium text-blue-900 mb-2">
              Import Invoice Data
            </h3>
            <input
              type="file"
              accept=".json"
              onChange={handleImport}
              className="text-sm text-blue-600"
            />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowImport(false)}
              className="ml-2"
            >
              Cancel
            </Button>
          </div>
        )}

        {/* Error Display */}
        {error && typeof error === 'string' && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-800">{error}</p>
          </div>
        )}

        {/* Loading State */}
        {isLoading && (
          <div className="mb-6">
            <LoadingSpinner center text="Loading invoice data..." />
          </div>
        )}

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 sm:gap-6">
          {/* Main Content */}
          <div className="xl:col-span-2 space-y-4 sm:space-y-6">
            {/* Invoice Header */}
            <InvoiceHeader
              invoiceDetails={invoiceDetails}
              onUpdateDetails={updateInvoiceDetails}
              errors={errors}
              validateField={validateField}
              clearError={clearError}
            />

            {/* Customer Details */}
            <CustomerDetails
              invoiceDetails={invoiceDetails}
              onUpdateDetails={updateInvoiceDetails}
              errors={errors}
              validateField={validateField}
              clearError={clearError}
            />

            {/* Item Form */}
            <ItemForm
              onAddItem={addItem}
              errors={errors}
              validateField={validateField}
              clearError={clearError}
            />

            {/* Items List */}
            <ItemsList
              items={items}
              onDeleteItem={deleteItem}
              onDuplicateItem={duplicateItem}
            />
          </div>

          {/* Sidebar */}
          <div className="space-y-4 sm:space-y-6 order-first xl:order-last">
            {/* Invoice Summary */}
            <InvoiceSummary
              totals={totals}
              invoiceDetails={invoiceDetails}
            />

            {/* Generate PDF Button */}
            <div className="sticky top-6">
              <Button
                onClick={handleGeneratePDF}
                disabled={!isReadyForGeneration() || isGenerating}
                loading={isGenerating}
                className="w-full"
                size="lg"
              >
                {isGenerating ? (
                  'Generating PDF...'
                ) : (
                  <>
                    <Download className="w-5 h-5 mr-2" />
                    Generate PDF
                  </>
                )}
              </Button>
              
              {!isReadyForGeneration() && (
                <p className="text-xs text-gray-500 mt-2 text-center">
                  Complete required fields and add items to generate PDF
                </p>
              )}

              {/* Quick Actions */}
              <div className="mt-4 space-y-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowImport(true)}
                  className="w-full"
                  disabled={isLoading}
                >
                  <Upload className="w-4 h-4 mr-2" />
                  Import Data
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 pt-6 border-t border-gray-200">
          <div className="text-center text-gray-500 text-sm">
            <p>
              Invoice Generator - Create professional invoices quickly and easily
            </p>
            <p className="mt-1">
              Data is saved locally in your browser
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceGenerator;
