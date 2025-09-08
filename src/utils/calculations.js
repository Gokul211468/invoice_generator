/**
 * Calculate item subtotal (quantity × price)
 * @param {number} quantity - Item quantity
 * @param {number} price - Item unit price
 * @returns {number} Subtotal amount
 */
export const calculateSubtotal = (quantity, price) => {
  const qty = parseFloat(quantity) || 0;
  const unitPrice = parseFloat(price) || 0;
  return qty * unitPrice;
};

/**
 * Calculate tax amount based on subtotal and tax rate
 * @param {number} subtotal - Subtotal amount
 * @param {number} taxRate - Tax rate as percentage (e.g., 18 for 18%)
 * @returns {number} Tax amount
 */
export const calculateTaxAmount = (subtotal, taxRate) => {
  const sub = parseFloat(subtotal) || 0;
  const rate = parseFloat(taxRate) || 0;
  return (sub * rate) / 100;
};

/**
 * Calculate item total (subtotal + tax)
 * @param {number} subtotal - Subtotal amount
 * @param {number} taxAmount - Tax amount
 * @returns {number} Total amount
 */
export const calculateItemTotal = (subtotal, taxAmount) => {
  const sub = parseFloat(subtotal) || 0;
  const tax = parseFloat(taxAmount) || 0;
  return sub + tax;
};

/**
 * Calculate all values for an invoice item
 * @param {Object} item - Item object with quantity, price, and taxRate
 * @returns {Object} Item with calculated subtotal, taxAmount, and total
 */
export const calculateItemValues = (item) => {
  const quantity = parseFloat(item.quantity) || 0;
  const price = parseFloat(item.price) || 0;
  const taxRate = parseFloat(item.taxRate) || 0;

  const subtotal = calculateSubtotal(quantity, price);
  const taxAmount = calculateTaxAmount(subtotal, taxRate);
  const total = calculateItemTotal(subtotal, taxAmount);

  return {
    ...item,
    subtotal: roundToDecimals(subtotal, 2),
    taxAmount: roundToDecimals(taxAmount, 2),
    total: roundToDecimals(total, 2)
  };
};

/**
 * Calculate invoice totals from items array
 * @param {Array} items - Array of invoice items
 * @returns {Object} Invoice totals object
 */
export const calculateInvoiceTotals = (items) => {
  if (!Array.isArray(items) || items.length === 0) {
    return {
      itemCount: 0,
      totalQuantity: 0,
      subtotal: 0,
      totalTax: 0,
      grandTotal: 0,
      averageTaxRate: 0
    };
  }

  const totals = items.reduce((acc, item) => {
    const quantity = parseFloat(item.quantity) || 0;
    const subtotal = parseFloat(item.subtotal) || 0;
    const taxAmount = parseFloat(item.taxAmount) || 0;
    const total = parseFloat(item.total) || 0;

    return {
      totalQuantity: acc.totalQuantity + quantity,
      subtotal: acc.subtotal + subtotal,
      totalTax: acc.totalTax + taxAmount,
      grandTotal: acc.grandTotal + total
    };
  }, {
    totalQuantity: 0,
    subtotal: 0,
    totalTax: 0,
    grandTotal: 0
  });

  // Calculate average tax rate
  const averageTaxRate = totals.subtotal > 0 
    ? (totals.totalTax / totals.subtotal) * 100 
    : 0;

  return {
    itemCount: items.length,
    totalQuantity: roundToDecimals(totals.totalQuantity, 2),
    subtotal: roundToDecimals(totals.subtotal, 2),
    totalTax: roundToDecimals(totals.totalTax, 2),
    grandTotal: roundToDecimals(totals.grandTotal, 2),
    averageTaxRate: roundToDecimals(averageTaxRate, 2)
  };
};

/**
 * Apply discount to invoice totals
 * @param {Object} totals - Current invoice totals
 * @param {number} discountAmount - Discount amount
 * @param {string} discountType - 'amount' or 'percentage'
 * @returns {Object} Updated totals with discount applied
 */
export const applyDiscount = (totals, discountAmount, discountType = 'amount') => {
  const discount = parseFloat(discountAmount) || 0;
  
  if (discount === 0) return totals;

  let discountValue = 0;
  
  if (discountType === 'percentage') {
    // Apply percentage discount to subtotal
    discountValue = (totals.subtotal * discount) / 100;
  } else {
    // Apply flat discount amount
    discountValue = discount;
  }

  // Ensure discount doesn't exceed subtotal
  discountValue = Math.min(discountValue, totals.subtotal);

  const newSubtotal = totals.subtotal - discountValue;
  const discountRatio = newSubtotal / totals.subtotal;
  const newTotalTax = totals.totalTax * discountRatio;
  const newGrandTotal = newSubtotal + newTotalTax;

  return {
    ...totals,
    subtotal: roundToDecimals(newSubtotal, 2),
    totalTax: roundToDecimals(newTotalTax, 2),
    grandTotal: roundToDecimals(newGrandTotal, 2),
    discount: roundToDecimals(discountValue, 2),
    discountType
  };
};

/**
 * Round number to specified decimal places
 * @param {number} number - Number to round
 * @param {number} decimals - Number of decimal places
 * @returns {number} Rounded number
 */
export const roundToDecimals = (number, decimals = 2) => {
  const factor = Math.pow(10, decimals);
  return Math.round((parseFloat(number) || 0) * factor) / factor;
};

/**
 * Calculate payment due amount
 * @param {number} grandTotal - Invoice grand total
 * @param {number} paidAmount - Amount already paid
 * @returns {number} Remaining amount due
 */
export const calculateAmountDue = (grandTotal, paidAmount = 0) => {
  const total = parseFloat(grandTotal) || 0;
  const paid = parseFloat(paidAmount) || 0;
  return Math.max(0, total - paid);
};

/**
 * Calculate payment status
 * @param {number} grandTotal - Invoice grand total
 * @param {number} paidAmount - Amount already paid
 * @returns {string} Payment status: 'paid', 'partial', 'pending', or 'overdue'
 */
export const calculatePaymentStatus = (grandTotal, paidAmount = 0, dueDate = null) => {
  const total = parseFloat(grandTotal) || 0;
  const paid = parseFloat(paidAmount) || 0;
  
  if (paid >= total) return 'paid';
  if (paid > 0) return 'partial';
  
  if (dueDate) {
    const today = new Date();
    const due = new Date(dueDate);
    
    if (today > due) return 'overdue';
  }
  
  return 'pending';
};

/**
 * Validate numeric input for calculations
 * @param {any} value - Value to validate
 * @param {number} min - Minimum allowed value
 * @param {number} max - Maximum allowed value
 * @returns {Object} Validation result with isValid and errorMessage
 */
export const validateNumericInput = (value, min = 0, max = Infinity) => {
  const numValue = parseFloat(value);
  
  if (isNaN(numValue)) {
    return { isValid: false, errorMessage: 'Please enter a valid number' };
  }
  
  if (numValue < min) {
    return { isValid: false, errorMessage: `Value must be at least ${min}` };
  }
  
  if (numValue > max) {
    return { isValid: false, errorMessage: `Value must not exceed ${max}` };
  }
  
  return { isValid: true, errorMessage: '' };
};
