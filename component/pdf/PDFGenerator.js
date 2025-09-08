import { formatCurrency, formatDate } from '../../src/utils/formatters.js';
import { INVOICE_CONFIG } from '../../src/config/constants.js';

const PDFGenerator = {
  generateInvoicePDF: async (invoiceData) => {
    const { invoiceDetails, items, totals } = invoiceData;
    
    return new Promise((resolve, reject) => {
      try {
        const printWindow = window.open('', '_blank', 'width=800,height=600');
        
        if (!printWindow) {
          throw new Error('Popup blocked. Please allow popups for this site.');
        }

        const htmlContent = PDFGenerator.generateInvoiceHTML(invoiceDetails, items, totals);
        
        printWindow.document.write(htmlContent);
        printWindow.document.close();
        
        printWindow.addEventListener('load', () => {
          setTimeout(() => {
            printWindow.print();
            resolve();
          }, 250);
        });

        printWindow.addEventListener('error', (error) => {
          reject(error);
        });

      } catch (error) {
        reject(error);
      }
    });
  },

  generateInvoiceHTML: (invoiceDetails, items, totals) => {
    return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Invoice ${invoiceDetails.invoiceNumber}</title>
        <style>${PDFGenerator.getInvoiceStyles()}</style>
      </head>
      <body>
        <div class="invoice-container">
          ${PDFGenerator.generateHeaderHTML(invoiceDetails)}
          ${PDFGenerator.generateDetailsHTML(invoiceDetails)}
          ${PDFGenerator.generateItemsTableHTML(items)}
          ${PDFGenerator.generateTotalsHTML(totals)}
          ${PDFGenerator.generateFooterHTML(invoiceDetails)}
        </div>
      </body>
      </html>
    `;
  },

  getInvoiceStyles: () => `
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      line-height: 1.6;
      color: #333;
      background-color: white;
    }
    
    .invoice-container {
      max-width: 800px;
      margin: 0 auto;
      padding: 40px 20px;
    }
    
    .invoice-header {
      text-align: center;
      margin-bottom: 40px;
      border-bottom: 3px solid #4F46E5;
      padding-bottom: 20px;
    }
    
    .invoice-header h1 {
      font-size: 2.5em;
      font-weight: bold;
      color: #4F46E5;
      margin-bottom: 10px;
    }
    
    .invoice-number {
      font-size: 1.2em;
      color: #666;
      font-weight: 500;
    }
    
    .company-info {
      text-align: center;
      margin-bottom: 30px;
      color: #666;
    }
    
    .invoice-details {
      display: flex;
      justify-content: space-between;
      margin-bottom: 40px;
      gap: 40px;
    }
    
    .customer-section,
    .invoice-info-section {
      flex: 1;
    }
    
    .section-title {
      font-size: 1.1em;
      font-weight: bold;
      margin-bottom: 15px;
      color: #4F46E5;
      border-bottom: 1px solid #E5E7EB;
      padding-bottom: 5px;
    }
    
    .customer-name {
      font-weight: bold;
      font-size: 1.1em;
      margin-bottom: 5px;
    }
    
    .invoice-info-section {
      text-align: right;
    }
    
    .items-table {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 30px;
      box-shadow: 0 1px 3px rgba(0,0,0,0.1);
    }
    
    .items-table th {
      background-color: #F9FAFB;
      font-weight: bold;
      padding: 15px 10px;
      border: 1px solid #E5E7EB;
      color: #374151;
      font-size: 0.9em;
    }
    
    .items-table td {
      padding: 12px 10px;
      border: 1px solid #E5E7EB;
      font-size: 0.9em;
    }
    
    .text-right {
      text-align: right;
    }
    
    .text-center {
      text-align: center;
    }
    
    .totals-section {
      max-width: 350px;
      margin-left: auto;
      background-color: #F9FAFB;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 1px 3px rgba(0,0,0,0.1);
    }
    
    .totals-table {
      width: 100%;
      border-collapse: collapse;
    }
    
    .totals-table th,
    .totals-table td {
      padding: 12px 15px;
      border-bottom: 1px solid #E5E7EB;
    }
    
    .totals-table tr:last-child th,
    .totals-table tr:last-child td {
      border-bottom: none;
    }
    
    .grand-total {
      background-color: #4F46E5;
      color: white;
      font-weight: bold;
      font-size: 1.1em;
    }
    
    .notes-section {
      margin-top: 40px;
      padding-top: 20px;
      border-top: 1px solid #E5E7EB;
    }
    
    .notes-section h3 {
      color: #4F46E5;
      margin-bottom: 10px;
      font-size: 1em;
    }
    
    .footer {
      margin-top: 50px;
      padding-top: 20px;
      border-top: 1px solid #E5E7EB;
      text-align: center;
      color: #666;
      font-size: 0.9em;
    }
    
    @media print {
      body { margin: 0; }
      .invoice-container { padding: 20px; }
    }
  `,

  generateHeaderHTML: (invoiceDetails) => `
    <div class="invoice-header">
      <h1>INVOICE</h1>
      <div class="invoice-number">#${invoiceDetails.invoiceNumber}</div>
    </div>
    
    <div class="company-info">
      <div><strong>${INVOICE_CONFIG.COMPANY_NAME}</strong></div>
      <div>${INVOICE_CONFIG.COMPANY_ADDRESS}</div>
      <div>${INVOICE_CONFIG.COMPANY_EMAIL} • ${INVOICE_CONFIG.COMPANY_PHONE}</div>
    </div>
  `,

  generateDetailsHTML: (invoiceDetails) => `
    <div class="invoice-details">
      <div class="customer-section">
        <div class="section-title">Bill To:</div>
        <div class="customer-name">${invoiceDetails.customerName || 'Customer Name'}</div>
        ${invoiceDetails.customerAddress ? `<div>${invoiceDetails.customerAddress}</div>` : ''}
        ${invoiceDetails.customerEmail ? `<div>${invoiceDetails.customerEmail}</div>` : ''}
        ${invoiceDetails.customerPhone ? `<div>${invoiceDetails.customerPhone}</div>` : ''}
      </div>
      
      <div class="invoice-info-section">
        <div class="section-title">Invoice Details:</div>
        <div><strong>Invoice #:</strong> ${invoiceDetails.invoiceNumber}</div>
        <div><strong>Date:</strong> ${formatDate(invoiceDetails.date)}</div>
        ${invoiceDetails.dueDate ? `<div><strong>Due Date:</strong> ${formatDate(invoiceDetails.dueDate)}</div>` : ''}
      </div>
    </div>
  `,

  generateItemsTableHTML: (items) => `
    <table class="items-table">
      <thead>
        <tr>
          <th class="text-center">S.No</th>
          <th>Item Name</th>
          <th>Description</th>
          <th class="text-right">Qty</th>
          <th class="text-right">Price</th>
          <th class="text-right">Subtotal</th>
          <th class="text-right">Tax Rate</th>
          <th class="text-right">Tax Amount</th>
          <th class="text-right">Total</th>
        </tr>
      </thead>
      <tbody>
        ${items.map((item, index) => `
          <tr>
            <td class="text-center">${index + 1}</td>
            <td>${item.name}</td>
            <td>${item.description || '—'}</td>
            <td class="text-right">${item.quantity}</td>
            <td class="text-right">${formatCurrency(item.price)}</td>
            <td class="text-right">${formatCurrency(item.subtotal)}</td>
            <td class="text-right">${item.taxRate}%</td>
            <td class="text-right">${formatCurrency(item.taxAmount)}</td>
            <td class="text-right"><strong>${formatCurrency(item.total)}</strong></td>
          </tr>
        `).join('')}
      </tbody>
    </table>
  `,

  generateTotalsHTML: (totals) => `
    <div class="totals-section">
      <table class="totals-table">
        <tbody>
          <tr>
            <th>Items:</th>
            <td class="text-right">${totals.itemCount}</td>
          </tr>
          <tr>
            <th>Subtotal:</th>
            <td class="text-right">${formatCurrency(totals.subtotal)}</td>
          </tr>
          <tr>
            <th>Total Tax:</th>
            <td class="text-right">${formatCurrency(totals.totalTax)}</td>
          </tr>
          <tr class="grand-total">
            <th>Grand Total:</th>
            <td class="text-right">${formatCurrency(totals.grandTotal)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  `,

  generateFooterHTML: (invoiceDetails) => `
    ${invoiceDetails.notes ? `
      <div class="notes-section">
        <h3>Notes:</h3>
        <p>${invoiceDetails.notes}</p>
      </div>
    ` : ''}
    
    ${invoiceDetails.terms ? `
      <div class="notes-section">
        <h3>Terms & Conditions:</h3>
        <p>${invoiceDetails.terms}</p>
      </div>
    ` : ''}
    
    <div class="footer">
      <p>Thank you for your business!</p>
      <p>Generated on ${formatDate(new Date().toISOString())}</p>
    </div>
  `
};

export default PDFGenerator;
