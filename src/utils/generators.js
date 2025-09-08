import { INVOICE_CONFIG } from '../config/constants.js';

/**
 * Generate a unique invoice number
 * @param {string} prefix - Invoice number prefix
 * @param {number} counter - Sequential counter
 * @returns {string} Generated invoice number
 */
export const generateInvoiceNumber = (prefix = INVOICE_CONFIG.INVOICE_NUMBER_PREFIX, counter = null) => {
  if (counter !== null) {
    return `${prefix}-${String(counter).padStart(4, '0')}`;
  }
  
  // Generate based on timestamp for uniqueness
  const timestamp = Date.now();
  const random = Math.floor(Math.random() * 1000);
  return `${prefix}-${timestamp}-${random}`;
};

/**
 * Generate a unique item ID
 * @returns {string} Unique item ID
 */
export const generateItemId = () => {
  return `item_${Date.now()}_${Math.floor(Math.random() * 10000)}`;
};

/**
 * Generate invoice date (today's date)
 * @returns {string} Today's date in YYYY-MM-DD format
 */
export const generateInvoiceDate = () => {
  return new Date().toISOString().split('T')[0];
};

/**
 * Generate due date based on payment terms
 * @param {string} invoiceDate - Invoice date in YYYY-MM-DD format
 * @param {number} paymentTermsDays - Payment terms in days (default: 30)
 * @returns {string} Due date in YYYY-MM-DD format
 */
export const generateDueDate = (invoiceDate, paymentTermsDays = 30) => {
  const date = new Date(invoiceDate);
  date.setDate(date.getDate() + paymentTermsDays);
  return date.toISOString().split('T')[0];
};

/**
 * Generate default invoice details
 * @param {Object} overrides - Override default values
 * @returns {Object} Default invoice details
 */
export const generateDefaultInvoiceDetails = (overrides = {}) => {
  const invoiceDate = generateInvoiceDate();
  
  return {
    invoiceNumber: generateInvoiceNumber(),
    date: invoiceDate,
    dueDate: generateDueDate(invoiceDate),
    customerName: '',
    customerEmail: '',
    customerPhone: '',
    customerAddress: '',
    notes: '',
    terms: 'Payment is due within 30 days of invoice date.',
    ...overrides
  };
};

/**
 * Generate default item
 * @param {Object} overrides - Override default values
 * @returns {Object} Default item
 */
export const generateDefaultItem = (overrides = {}) => {
  return {
    id: generateItemId(),
    name: '',
    description: '',
    quantity: INVOICE_CONFIG.DEFAULT_ITEM_QUANTITY,
    price: '',
    taxRate: INVOICE_CONFIG.DEFAULT_TAX_RATE,
    subtotal: 0,
    taxAmount: 0,
    total: 0,
    ...overrides
  };
};

/**
 * Generate sample invoice data for demo purposes
 * @returns {Object} Sample invoice data
 */
export const generateSampleInvoice = () => {
  const invoiceDate = generateInvoiceDate();
  
  return {
    invoiceDetails: {
      invoiceNumber: generateInvoiceNumber(),
      date: invoiceDate,
      dueDate: generateDueDate(invoiceDate),
      customerName: 'Acme Corporation',
      customerEmail: 'accounts@acme.com',
      customerPhone: '+1 (555) 123-4567',
      customerAddress: '123 Business Ave\nNew York, NY 10001',
      notes: 'Thank you for your business!',
      terms: 'Payment is due within 30 days of invoice date. Late payments may incur a 1.5% monthly service charge.'
    },
    items: [
      {
        id: generateItemId(),
        name: 'Professional Consultation',
        description: 'Business strategy consultation services',
        quantity: 10,
        price: 150.00,
        taxRate: 18,
        subtotal: 1500.00,
        taxAmount: 270.00,
        total: 1770.00
      },
      {
        id: generateItemId(),
        name: 'Project Management',
        description: 'Monthly project management services',
        quantity: 1,
        price: 2500.00,
        taxRate: 18,
        subtotal: 2500.00,
        taxAmount: 450.00,
        total: 2950.00
      },
      {
        id: generateItemId(),
        name: 'Technical Support',
        description: '24/7 technical support package',
        quantity: 3,
        price: 200.00,
        taxRate: 12,
        subtotal: 600.00,
        taxAmount: 72.00,
        total: 672.00
      }
    ]
  };
};

/**
 * Generate sample customer data
 * @returns {Array} Array of sample customers
 */
export const generateSampleCustomers = () => {
  return [
    {
      name: 'Acme Corporation',
      email: 'accounts@acme.com',
      phone: '+1 (555) 123-4567',
      address: '123 Business Ave\nNew York, NY 10001'
    },
    {
      name: 'Tech Solutions Inc.',
      email: 'billing@techsolutions.com',
      phone: '+1 (555) 987-6543',
      address: '456 Innovation Drive\nSan Francisco, CA 94105'
    },
    {
      name: 'Global Enterprises',
      email: 'finance@globalent.com',
      phone: '+1 (555) 555-0123',
      address: '789 Commerce Street\nChicago, IL 60601'
    }
  ];
};

/**
 * Generate sample items/products
 * @returns {Array} Array of sample items
 */
export const generateSampleItems = () => {
  return [
    {
      name: 'Website Development',
      description: 'Custom website development services',
      price: 2500.00,
      taxRate: 18
    },
    {
      name: 'Logo Design',
      description: 'Professional logo design and branding',
      price: 500.00,
      taxRate: 18
    },
    {
      name: 'SEO Optimization',
      description: 'Search engine optimization package',
      price: 800.00,
      taxRate: 18
    },
    {
      name: 'Consultation Hour',
      description: 'One-on-one business consultation',
      price: 150.00,
      taxRate: 18
    },
    {
      name: 'Maintenance Package',
      description: 'Monthly website maintenance',
      price: 200.00,
      taxRate: 12
    },
    {
      name: 'Training Session',
      description: 'Staff training on new systems',
      price: 300.00,
      taxRate: 12
    }
  ];
};

/**
 * Generate random ID
 * @param {number} length - Length of the ID
 * @returns {string} Random alphanumeric ID
 */
export const generateRandomId = (length = 8) => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
};

/**
 * Generate session ID for temporary data storage
 * @returns {string} Session ID
 */
export const generateSessionId = () => {
  return `session_${Date.now()}_${generateRandomId(12)}`;
};

/**
 * Generate filename for invoice download
 * @param {string} invoiceNumber - Invoice number
 * @param {string} customerName - Customer name
 * @returns {string} Filename for download
 */
export const generateInvoiceFilename = (invoiceNumber, customerName = '') => {
  const sanitizedInvoiceNumber = invoiceNumber.replace(/[^a-zA-Z0-9\-_]/g, '');
  const sanitizedCustomerName = customerName.replace(/[^a-zA-Z0-9\-_\s]/g, '').trim();
  
  if (sanitizedCustomerName) {
    return `Invoice_${sanitizedInvoiceNumber}_${sanitizedCustomerName.replace(/\s+/g, '_')}.pdf`;
  }
  
  return `Invoice_${sanitizedInvoiceNumber}.pdf`;
};

/**
 * Clone an object/array deeply
 * @param {any} obj - Object to clone
 * @returns {any} Deep cloned object
 */
export const deepClone = (obj) => {
  if (obj === null || typeof obj !== 'object') return obj;
  if (obj instanceof Date) return new Date(obj.getTime());
  if (obj instanceof Array) return obj.map(deepClone);
  if (typeof obj === 'object') {
    const cloned = {};
    Object.keys(obj).forEach(key => {
      cloned[key] = deepClone(obj[key]);
    });
    return cloned;
  }
};
