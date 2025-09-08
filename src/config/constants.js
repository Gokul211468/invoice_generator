export const INVOICE_CONFIG = {
  // Company Information
  COMPANY_NAME: "Your Company Name",
  COMPANY_ADDRESS: "123 Business Street, City, State 12345",
  COMPANY_EMAIL: "info@yourcompany.com",
  COMPANY_PHONE: "+1 (555) 123-4567",

  // Default Values
  DEFAULT_TAX_RATE: 18, // 18% default tax rate
  DEFAULT_CURRENCY: "USD",
  CURRENCY_SYMBOL: "$",
  DATE_FORMAT: "MM/DD/YYYY",

  // Validation Rules
  MIN_QUANTITY: 0.01,
  MAX_QUANTITY: 99999,
  MIN_PRICE: 0.01,
  MAX_PRICE: 999999.99,
  MAX_TAX_RATE: 100,
  MIN_TAX_RATE: 0,

  // Invoice Settings
  INVOICE_NUMBER_PREFIX: "INV",
  AUTO_GENERATE_INVOICE_NUMBER: true,
  
  // Item Configuration
  MAX_ITEMS_PER_INVOICE: 100,
  DEFAULT_ITEM_QUANTITY: 1,

  // Validation Messages
  VALIDATION_MESSAGES: {
    REQUIRED_FIELD: "This field is required",
    INVALID_EMAIL: "Please enter a valid email address",
    INVALID_NUMBER: "Please enter a valid number",
    MIN_VALUE: "Value must be at least {min}",
    MAX_VALUE: "Value must not exceed {max}",
    INVALID_DATE: "Please enter a valid date"
  },

  // PDF Configuration
  PDF_CONFIG: {
    PAGE_TITLE: "Invoice",
    PRINT_DELAY: 250, // milliseconds
    POPUP_WIDTH: 800,
    POPUP_HEIGHT: 600
  }
};

export const CURRENCY_OPTIONS = [
  { code: 'USD', symbol: '$', name: 'US Dollar' },
  { code: 'EUR', symbol: '€', name: 'Euro' },
  { code: 'GBP', symbol: '£', name: 'British Pound' },
  { code: 'JPY', symbol: '¥', name: 'Japanese Yen' },
  { code: 'INR', symbol: '₹', name: 'Indian Rupee' },
  { code: 'CAD', symbol: 'C$', name: 'Canadian Dollar' },
  { code: 'AUD', symbol: 'A$', name: 'Australian Dollar' }
];

export const TAX_PRESETS = [
  { rate: 0, label: 'No Tax' },
  { rate: 5, label: 'GST 5%' },
  { rate: 12, label: 'GST 12%' },
  { rate: 18, label: 'GST 18%' },
  { rate: 28, label: 'GST 28%' }
];
