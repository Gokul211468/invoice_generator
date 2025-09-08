import React from 'react';
import Card from '../../hook/UI/Card.jsx';
import FormField from '../../hook/UI/FormField.jsx';

const CustomerDetails = ({ 
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
    <Card title="Customer Details">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        <div className="space-y-3 sm:space-y-4">
          <FormField 
            label="Customer Name" 
            error={errors.customerName} 
            required
          >
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={invoiceDetails.customerName}
              onChange={(e) => handleFieldChange('customerName', e.target.value)}
              onBlur={(e) => handleFieldBlur('customerName', e.target.value, { required: true })}
              placeholder="John Doe"
            />
          </FormField>

          <FormField label="Address" error={errors.customerAddress}>
            <textarea
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              rows="3"
              value={invoiceDetails.customerAddress}
              onChange={(e) => handleFieldChange('customerAddress', e.target.value)}
              placeholder="123 Main St, City, State 12345"
            />
          </FormField>
        </div>

        <div className="space-y-3 sm:space-y-4">
          <FormField label="Email Address" error={errors.customerEmail}>
            <input
              type="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={invoiceDetails.customerEmail}
              onChange={(e) => handleFieldChange('customerEmail', e.target.value)}
              onBlur={(e) => handleFieldBlur('customerEmail', e.target.value, { email: true })}
              placeholder="john@example.com"
            />
          </FormField>

          <FormField label="Phone Number" error={errors.customerPhone}>
            <input
              type="tel"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={invoiceDetails.customerPhone}
              onChange={(e) => handleFieldChange('customerPhone', e.target.value)}
              placeholder="+1 (555) 123-4567"
            />
          </FormField>
        </div>
      </div>
    </Card>
  );
};

export default CustomerDetails;