import React from 'react';
import Card from '../../hook/UI/Card.jsx';
import FormField from '../../hook/UI/FormField.jsx';
import { INVOICE_CONFIG } from '../../src/config/constants.js';

const InvoiceHeader = ({ 
  invoiceDetails, 
  onUpdateDetails, 
  errors, 
  validateField, 
  clearError 
}) => {
  const handleFieldChange = (field, value) => {
    onUpdateDetails({ [field]: value });
    clearError(field);
  };

  const handleFieldBlur = (field, value, rules) => {
    validateField(field, value, rules);
  };

  return (
    <Card title="Invoice Information">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        <FormField 
          label="Invoice Number" 
          error={errors.invoiceNumber} 
          required
        >
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={invoiceDetails.invoiceNumber}
            onChange={(e) => handleFieldChange('invoiceNumber', e.target.value)}
            onBlur={(e) => handleFieldBlur('invoiceNumber', e.target.value, { required: true })}
            placeholder="INV-001"
          />
        </FormField>

        <FormField label="Invoice Date" error={errors.date} required>
          <input
            type="date"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={invoiceDetails.date}
            onChange={(e) => handleFieldChange('date', e.target.value)}
            onBlur={(e) => handleFieldBlur('date', e.target.value, { required: true })}
          />
        </FormField>

        <FormField label="Due Date" error={errors.dueDate}>
          <input
            type="date"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={invoiceDetails.dueDate}
            onChange={(e) => handleFieldChange('dueDate', e.target.value)}
          />
        </FormField>
      </div>

      <div className="mt-4 sm:mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        <FormField label="Notes" hint="Additional notes or special instructions">
          <textarea
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            rows="3"
            value={invoiceDetails.notes}
            onChange={(e) => handleFieldChange('notes', e.target.value)}
            placeholder="Any special notes or instructions..."
          />
        </FormField>

        <FormField label="Payment Terms">
          <textarea
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            rows="3"
            value={invoiceDetails.terms}
            onChange={(e) => handleFieldChange('terms', e.target.value)}
            placeholder="Payment terms and conditions..."
          />
        </FormField>
      </div>
    </Card>
  );
};

export default InvoiceHeader;
