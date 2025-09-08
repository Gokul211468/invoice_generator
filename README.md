# 📊 Professional Invoice Generator

A modern, responsive invoice generator built with React and Tailwind CSS. Create beautiful, professional invoices with ease.

## ✨ Features

- **Professional PDF Generation** - Generate print-ready invoices with professional styling
- **Real-time Calculations** - Automatic tax calculations and totals
- **Form Validation** - Comprehensive validation with helpful error messages
- **Auto-save** - Automatic saving of drafts to local storage
- **Import/Export** - Save and load invoice data as JSON files
- **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- **Accessibility** - Built with accessibility best practices
- **Modern UI** - Clean, professional interface with Tailwind CSS

## 🚀 Quick Start

### Prerequisites
- Node.js (version 18 or higher)
- npm or yarn package manager

### Installation

1. **Clone or download the project**
   ```bash
   git clone <repository-url>
   cd billing
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## 📁 Project Structure

```
billing/
├── component/
│   ├── InvoiceGenerator/
│   │   ├── CustomerDetails.jsx     # Customer information form
│   │   ├── InvoiceGenerator.jsx    # Main invoice component
│   │   ├── InvoiceHeader.jsx       # Invoice details form
│   │   ├── InvoiceSummary.jsx      # Invoice totals display
│   │   ├── ItemForm.jsx            # Add items form
│   │   └── ItemsList.jsx           # Items table display
│   └── pdf/
│       └── PDFGenerator.js         # PDF generation logic
├── hook/
│   └── UI/
│       ├── Button.jsx              # Reusable button component
│       ├── Card.jsx                # Card wrapper component
│       ├── FormField.jsx           # Form field with validation
│       └── LoadingSpinner.jsx      # Loading states
├── src/
│   ├── config/
│   │   └── constants.js            # App configuration
│   ├── hooks/
│   │   ├── useFormValidation.js    # Form validation hook
│   │   └── useInvoiceData.js       # Invoice data management
│   ├── styles/
│   │   └── global.css              # Global styles
│   ├── utils/
│   │   ├── calculations.js         # Invoice calculations
│   │   ├── formatters.js           # Data formatting utilities
│   │   ├── generators.js           # Data generation utilities
│   │   └── validators.js           # Form validation rules
│   └── app.jsx                     # Main app entry point
├── index.html                      # HTML template
├── package.json                    # Dependencies and scripts
├── tailwind.config.js             # Tailwind CSS configuration
└── vite.config.js                 # Vite build configuration
```

## 🛠️ Configuration

### Company Information
Update your company details in `src/config/constants.js`:

```javascript
export const INVOICE_CONFIG = {
  COMPANY_NAME: "Your Company Name",
  COMPANY_ADDRESS: "123 Business Street, City, State 12345",
  COMPANY_EMAIL: "info@yourcompany.com",
  COMPANY_PHONE: "+1 (555) 123-4567",
  // ... other settings
};
```

### Tax Rates
Modify default tax rates and presets:

```javascript
export const TAX_PRESETS = [
  { rate: 0, label: 'No Tax' },
  { rate: 5, label: 'GST 5%' },
  { rate: 12, label: 'GST 12%' },
  { rate: 18, label: 'GST 18%' },
  { rate: 28, label: 'GST 28%' }
];
```

## 📋 Usage

1. **Fill Invoice Details**
   - Enter invoice number, date, and due date
   - Add optional notes and payment terms

2. **Add Customer Information**
   - Customer name (required)
   - Address, email, and phone (optional)

3. **Add Invoice Items**
   - Item name and description
   - Quantity and unit price
   - Tax rate (configurable)

4. **Generate PDF**
   - Click "Generate PDF" to create a professional invoice
   - The PDF will open in a new window for printing or saving

5. **Save/Load Data**
   - Auto-save keeps your work safe
   - Manual save/load for managing drafts
   - Export/import JSON data for backup

## 🎨 Customization

### Styling
The app uses Tailwind CSS for styling. Customize the theme in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Your brand colors
      }
    }
  }
}
```

### PDF Template
Modify the PDF template in `component/pdf/PDFGenerator.js` to match your brand:

- Update HTML structure
- Customize CSS styles
- Add your logo
- Change color scheme

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🐛 Bug Reports

If you find a bug, please create an issue with:
- Description of the bug
- Steps to reproduce
- Expected behavior
- Browser and OS information

## ⭐ Acknowledgments

- Built with [React](https://reactjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons from [Lucide React](https://lucide.dev/)
- Powered by [Vite](https://vitejs.dev/)

---

**Happy Invoicing! 🧾**
