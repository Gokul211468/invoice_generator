import React from 'react';
import { Trash2, Copy, FileText } from 'lucide-react';
import Card from '../../hook/UI/Card.jsx';
import Button from '../../hook/UI/Button.jsx';
import { formatCurrency } from '../../src/utils/formatters.js';

const ItemsList = ({ items, onDeleteItem, onUpdateItem, onDuplicateItem }) => {
  if (items.length === 0) {
    return (
      <Card title="Invoice Items">
        <div className="text-center py-12 text-gray-500">
          <FileText className="w-16 h-16 mx-auto mb-4 opacity-30" />
          <h3 className="text-lg font-medium mb-2">No items added yet</h3>
          <p>Add your first item using the form above.</p>
        </div>
      </Card>
    );
  }

  const handleDeleteItem = (itemId, itemName) => {
    if (window.confirm(`Are you sure you want to delete "${itemName}"?`)) {
      onDeleteItem(itemId);
    }
  };

  return (
    <Card 
      title={`Invoice Items`}
      subtitle={`${items.length} item${items.length !== 1 ? 's' : ''} added`}
    >
      <div className="overflow-x-auto -mx-4 sm:mx-0">
        <table className="w-full min-w-[600px]">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-3 px-2 font-medium text-gray-700 text-sm">S.No</th>
              <th className="text-left py-3 px-2 font-medium text-gray-700 text-sm">Item</th>
              <th className="text-left py-3 px-2 font-medium text-gray-700 text-sm">Description</th>
              <th className="text-right py-3 px-2 font-medium text-gray-700 text-sm">Qty</th>
              <th className="text-right py-3 px-2 font-medium text-gray-700 text-sm">Price</th>
              <th className="text-right py-3 px-2 font-medium text-gray-700 text-sm">Subtotal</th>
              <th className="text-right py-3 px-2 font-medium text-gray-700 text-sm">Tax</th>
              <th className="text-right py-3 px-2 font-medium text-gray-700 text-sm">Total</th>
              <th className="text-center py-3 px-2 font-medium text-gray-700 text-sm">Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr 
                key={item.id} 
                className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
              >
                <td className="py-3 px-2 text-sm text-gray-600">{index + 1}</td>
                <td className="py-3 px-2 text-sm font-medium text-gray-900">
                  {item.name}
                </td>
                <td className="py-3 px-2 text-sm text-gray-600 max-w-xs truncate">
                  {item.description || '—'}
                </td>
                <td className="py-3 px-2 text-sm text-right text-gray-900">
                  {item.quantity}
                </td>
                <td className="py-3 px-2 text-sm text-right text-gray-900">
                  {formatCurrency(item.price)}
                </td>
                <td className="py-3 px-2 text-sm text-right text-gray-900">
                  {formatCurrency(item.subtotal)}
                </td>
                <td className="py-3 px-2 text-sm text-right text-gray-600">
                  <div>{item.taxRate}%</div>
                  <div className="text-xs">{formatCurrency(item.taxAmount)}</div>
                </td>
                <td className="py-3 px-2 text-sm text-right font-semibold text-gray-900">
                  {formatCurrency(item.total)}
                </td>
                <td className="py-3 px-2">
                  <div className="flex justify-center space-x-1">
                    <button
                      onClick={() => onDuplicateItem(item.id)}
                      className="text-blue-600 hover:text-blue-800 p-1 rounded hover:bg-blue-50 transition-colors"
                      title="Duplicate item"
                    >
                      <Copy className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDeleteItem(item.id, item.name)}
                      className="text-red-600 hover:text-red-800 p-1 rounded hover:bg-red-50 transition-colors"
                      title="Delete item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
};

export default ItemsList;