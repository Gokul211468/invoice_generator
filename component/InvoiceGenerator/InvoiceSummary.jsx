import React from 'react';
import { Calculator, FileText, Calendar, User } from 'lucide-react';
import Card from '../../hook/UI/Card.jsx';
import { formatCurrency, formatDate } from '../../src/utils/formatters.js';

const InvoiceSummary = ({ totals, invoiceDetails }) => {
  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Quick Info */}
      <Card title="Invoice Summary">
        <div className="space-y-3 sm:space-y-4">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center text-gray-600">
              <FileText className="w-4 h-4 mr-2" />
              <span>Invoice #</span>
            </div>
            <span className="font-medium">{invoiceDetails.invoiceNumber}</span>
          </div>

          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center text-gray-600">
              <Calendar className="w-4 h-4 mr-2" />
              <span>Date</span>
            </div>
            <span className="font-medium">{formatDate(invoiceDetails.date)}</span>
          </div>

          {invoiceDetails.customerName && (
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center text-gray-600">
                <User className="w-4 h-4 mr-2" />
                <span>Customer</span>
              </div>
              <span className="font-medium truncate ml-2" title={invoiceDetails.customerName}>
                {invoiceDetails.customerName}
              </span>
            </div>
          )}
        </div>
      </Card>

      {/* Totals */}
      <Card title="Financial Summary">
        <div className="space-y-3 sm:space-y-4">
          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-600">Items Count:</span>
            <span className="font-medium">{totals.itemCount}</span>
          </div>

          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-600">Total Quantity:</span>
            <span className="font-medium">{totals.totalQuantity}</span>
          </div>
          
          <div className="border-t pt-4 space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Subtotal:</span>
              <span className="font-medium">{formatCurrency(totals.subtotal)}</span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Total Tax:</span>
              <span className="font-medium">{formatCurrency(totals.totalTax)}</span>
            </div>
            
            <div className="border-t pt-3">
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold text-gray-900">Grand Total:</span>
                <span className="text-xl font-bold text-blue-600">
                  {formatCurrency(totals.grandTotal)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Status */}
      <Card title="Status">
        <div className="space-y-3">
          <div className="flex items-center">
            <div className={`w-3 h-3 rounded-full mr-3 ${
              totals.itemCount > 0 ? 'bg-green-500' : 'bg-gray-300'
            }`} />
            <span className="text-sm text-gray-600">
              {totals.itemCount > 0 ? 'Ready to generate' : 'Add items to continue'}
            </span>
          </div>
          
          <div className="flex items-center">
            <div className={`w-3 h-3 rounded-full mr-3 ${
              invoiceDetails.customerName ? 'bg-green-500' : 'bg-gray-300'
            }`} />
            <span className="text-sm text-gray-600">
              {invoiceDetails.customerName ? 'Customer details added' : 'Add customer details'}
            </span>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default InvoiceSummary;