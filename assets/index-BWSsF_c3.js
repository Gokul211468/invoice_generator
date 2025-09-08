import{r as d,a as ne,R as L}from"./react-nf7bT_Uh.js";import{P as oe,X as le,F as W,C as ie,T as ce,a as de,U as ue,b as K,S as me,D as Z,R as xe}from"./vendor-4uiAbzA-.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(a){if(a.ep)return;a.ep=!0;const o=s(a);fetch(a.href,o)}})();var se={exports:{}},H={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pe=d,ge=Symbol.for("react.element"),he=Symbol.for("react.fragment"),fe=Object.prototype.hasOwnProperty,be=pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ye={key:!0,ref:!0,__self:!0,__source:!0};function ae(t,r,s){var n,a={},o=null,i=null;s!==void 0&&(o=""+s),r.key!==void 0&&(o=""+r.key),r.ref!==void 0&&(i=r.ref);for(n in r)fe.call(r,n)&&!ye.hasOwnProperty(n)&&(a[n]=r[n]);if(t&&t.defaultProps)for(n in r=t.defaultProps,r)a[n]===void 0&&(a[n]=r[n]);return{$$typeof:ge,type:t,key:o,ref:i,props:a,_owner:be.current}}H.Fragment=he;H.jsx=ae;H.jsxs=ae;se.exports=H;var e=se.exports,X={},ee=ne;X.createRoot=ee.createRoot,X.hydrateRoot=ee.hydrateRoot;const k=({title:t,subtitle:r,children:s,className:n="",action:a,noPadding:o=!1,variant:i="default",...l})=>{const c="bg-white rounded-lg",b={default:"border border-gray-200",outlined:"border-2 border-gray-300",elevated:"shadow-lg border border-gray-100"},v=[c,b[i]||b.default,n].filter(Boolean).join(" "),N=o?"":"p-6";return e.jsxs("div",{className:v,...l,children:[(t||r||a)&&e.jsx("div",{className:`${o?"p-6 pb-0":"pb-4"} ${t&&r?"space-y-1":""}`,children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"flex-1",children:[t&&e.jsx("h3",{className:"text-lg font-semibold text-gray-900 leading-tight",children:t}),r&&e.jsx("p",{className:"text-sm text-gray-600 mt-1",children:r})]}),a&&e.jsx("div",{className:"flex-shrink-0 ml-4",children:a})]})}),e.jsx("div",{className:N,children:s})]})},E=({label:t,error:r,hint:s,children:n,required:a=!1,className:o="",labelClassName:i="",...l})=>{const c=L.useId(),b=L.Children.map(n,v=>L.isValidElement(v)?L.cloneElement(v,{id:v.props.id||c,"aria-describedby":r?`${c}-error`:s?`${c}-hint`:void 0,"aria-invalid":r?"true":void 0,className:`${v.props.className||""} ${r?"border-red-500 focus:ring-red-500 focus:border-red-500":""}`.trim()}):v);return e.jsxs("div",{className:`space-y-1 ${o}`,...l,children:[t&&e.jsxs("label",{htmlFor:c,className:`block text-sm font-medium text-gray-700 ${i}`,children:[t,a&&e.jsx("span",{className:"text-red-500 ml-1",children:"*"})]}),e.jsx("div",{children:b}),r&&e.jsxs("p",{id:`${c}-error`,className:"text-sm text-red-600 flex items-center",children:[e.jsx("svg",{className:"w-4 h-4 mr-1 flex-shrink-0",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z",clipRule:"evenodd"})}),r]}),s&&!r&&e.jsxs("p",{id:`${c}-hint`,className:"text-sm text-gray-500 flex items-center",children:[e.jsx("svg",{className:"w-4 h-4 mr-1 flex-shrink-0",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z",clipRule:"evenodd"})}),s]})]})},ve=L.forwardRef(({className:t="",error:r=!1,...s},n)=>{const i=`w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-0 transition-colors ${r?"border-red-500 focus:ring-red-500 focus:border-red-500":"border-gray-300 focus:ring-blue-500 focus:border-transparent"} ${t}`.trim();return e.jsx("input",{ref:n,className:i,...s})});ve.displayName="Input";const Ne=L.forwardRef(({className:t="",error:r=!1,rows:s=3,...n},a)=>{const l=`w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-0 transition-colors resize-vertical ${r?"border-red-500 focus:ring-red-500 focus:border-red-500":"border-gray-300 focus:ring-blue-500 focus:border-transparent"} ${t}`.trim();return e.jsx("textarea",{ref:a,rows:s,className:l,...n})});Ne.displayName="Textarea";const je=L.forwardRef(({className:t="",error:r=!1,children:s,...n},a)=>{const l=`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-0 transition-colors bg-white ${r?"border-red-500 focus:ring-red-500 focus:border-red-500":"border-gray-300 focus:ring-blue-500 focus:border-transparent"} ${t}`.trim();return e.jsx("select",{ref:a,className:l,...n,children:s})});je.displayName="Select";const p={COMPANY_NAME:"Your Company Name",COMPANY_ADDRESS:"123 Business Street, City, State 12345",COMPANY_EMAIL:"info@yourcompany.com",COMPANY_PHONE:"+1 (555) 123-4567",DEFAULT_TAX_RATE:18,DEFAULT_CURRENCY:"USD",CURRENCY_SYMBOL:"$",DATE_FORMAT:"MM/DD/YYYY",MIN_QUANTITY:.01,MIN_PRICE:.01,MAX_TAX_RATE:100,INVOICE_NUMBER_PREFIX:"INV",DEFAULT_ITEM_QUANTITY:1,VALIDATION_MESSAGES:{REQUIRED_FIELD:"This field is required",INVALID_EMAIL:"Please enter a valid email address",INVALID_NUMBER:"Please enter a valid number",MIN_VALUE:"Value must be at least {min}",MAX_VALUE:"Value must not exceed {max}",INVALID_DATE:"Please enter a valid date"}},Ie=({invoiceDetails:t,onUpdateDetails:r,errors:s,validateField:n,clearError:a})=>{const o=(l,c)=>{r({[l]:c}),a(l)},i=(l,c,b)=>{n(l,c,b)};return e.jsxs(k,{title:"Invoice Information",children:[e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6",children:[e.jsx(E,{label:"Invoice Number",error:s.invoiceNumber,required:!0,children:e.jsx("input",{type:"text",className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",value:t.invoiceNumber,onChange:l=>o("invoiceNumber",l.target.value),onBlur:l=>i("invoiceNumber",l.target.value,{required:!0}),placeholder:"INV-001"})}),e.jsx(E,{label:"Invoice Date",error:s.date,required:!0,children:e.jsx("input",{type:"date",className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",value:t.date,onChange:l=>o("date",l.target.value),onBlur:l=>i("date",l.target.value,{required:!0})})}),e.jsx(E,{label:"Due Date",error:s.dueDate,children:e.jsx("input",{type:"date",className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",value:t.dueDate,onChange:l=>o("dueDate",l.target.value)})})]}),e.jsxs("div",{className:"mt-4 sm:mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6",children:[e.jsx(E,{label:"Notes",hint:"Additional notes or special instructions",children:e.jsx("textarea",{className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",rows:"3",value:t.notes,onChange:l=>o("notes",l.target.value),placeholder:"Any special notes or instructions..."})}),e.jsx(E,{label:"Payment Terms",children:e.jsx("textarea",{className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",rows:"3",value:t.terms,onChange:l=>o("terms",l.target.value),placeholder:"Payment terms and conditions..."})})]})]})},we=({invoiceDetails:t,onUpdateDetails:r,errors:s,validateField:n,clearError:a})=>{const o=(l,c)=>{r({[l]:c}),a(l)},i=(l,c,b)=>{n(l,c,b)};return e.jsx(k,{title:"Customer Details",children:e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6",children:[e.jsxs("div",{className:"space-y-3 sm:space-y-4",children:[e.jsx(E,{label:"Customer Name",error:s.customerName,required:!0,children:e.jsx("input",{type:"text",className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",value:t.customerName,onChange:l=>o("customerName",l.target.value),onBlur:l=>i("customerName",l.target.value,{required:!0}),placeholder:"John Doe"})}),e.jsx(E,{label:"Address",error:s.customerAddress,children:e.jsx("textarea",{className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",rows:"3",value:t.customerAddress,onChange:l=>o("customerAddress",l.target.value),placeholder:"123 Main St, City, State 12345"})})]}),e.jsxs("div",{className:"space-y-3 sm:space-y-4",children:[e.jsx(E,{label:"Email Address",error:s.customerEmail,children:e.jsx("input",{type:"email",className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",value:t.customerEmail,onChange:l=>o("customerEmail",l.target.value),onBlur:l=>i("customerEmail",l.target.value,{email:!0}),placeholder:"john@example.com"})}),e.jsx(E,{label:"Phone Number",error:s.customerPhone,children:e.jsx("input",{type:"tel",className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",value:t.customerPhone,onChange:l=>o("customerPhone",l.target.value),placeholder:"+1 (555) 123-4567"})})]})]})})},_=({variant:t="primary",size:r="md",disabled:s=!1,loading:n=!1,className:a="",children:o,onClick:i,type:l="button",...c})=>{const b="inline-flex items-center justify-center font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed",v={primary:"bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500",secondary:"bg-gray-600 hover:bg-gray-700 text-white focus:ring-gray-500",outline:"border-2 border-blue-600 text-blue-600 hover:bg-blue-50 focus:ring-blue-500",ghost:"text-blue-600 hover:bg-blue-50 focus:ring-blue-500",danger:"bg-red-600 hover:bg-red-700 text-white focus:ring-red-500",success:"bg-green-600 hover:bg-green-700 text-white focus:ring-green-500",warning:"bg-yellow-500 hover:bg-yellow-600 text-white focus:ring-yellow-500"},N={sm:"px-3 py-1.5 text-sm",md:"px-4 py-2 text-sm",lg:"px-6 py-3 text-base"},D=[b,v[t]||v.primary,N[r]||N.md,a].filter(Boolean).join(" "),M=m=>{if(s||n){m.preventDefault();return}i&&i(m)};return e.jsxs("button",{type:l,className:D,disabled:s||n,onClick:M,...c,children:[n&&e.jsxs("svg",{className:"animate-spin -ml-1 mr-2 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[e.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),e.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),o]})},Ce=({onAddItem:t,errors:r,validateField:s,clearError:n})=>{const[a,o]=d.useState({name:"",description:"",quantity:"",price:"",taxRate:p.DEFAULT_TAX_RATE.toString()}),[i,l]=d.useState(!1),c=(m,A)=>{o(T=>({...T,[m]:A})),n(`currentItem.${m}`),v({...a,[m]:A})},b=(m,A,T)=>{s(`currentItem.${m}`,A,T)},v=(m=a)=>{const A=m.name.trim()&&m.quantity&&Number(m.quantity)>=p.MIN_QUANTITY&&m.price&&Number(m.price)>=p.MIN_PRICE;return l(A),A},N=()=>{v()&&(t(a),o({name:"",description:"",quantity:"",price:"",taxRate:p.DEFAULT_TAX_RATE.toString()}),l(!1))},D=()=>{o({name:"",description:"",quantity:"",price:"",taxRate:p.DEFAULT_TAX_RATE.toString()}),l(!1)},M=a.name||a.quantity||a.price;return e.jsxs(k,{title:"Add New Item",children:[e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4 mb-4",children:[e.jsx(E,{label:"Item Name",error:r["currentItem.name"],required:!0,children:e.jsx("input",{type:"text",className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",value:a.name,onChange:m=>c("name",m.target.value),onBlur:m=>b("name",m.target.value,{required:!0}),placeholder:"Product name"})}),e.jsx(E,{label:"Description",children:e.jsx("input",{type:"text",className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",value:a.description,onChange:m=>c("description",m.target.value),placeholder:"Item description"})}),e.jsx(E,{label:"Quantity",error:r["currentItem.quantity"],required:!0,children:e.jsx("input",{type:"number",min:p.MIN_QUANTITY,step:"0.01",className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",value:a.quantity,onChange:m=>c("quantity",m.target.value),onBlur:m=>b("quantity",m.target.value,{required:!0,number:!0,min:p.MIN_QUANTITY}),placeholder:"1"})}),e.jsx(E,{label:"Unit Price",error:r["currentItem.price"],required:!0,children:e.jsx("input",{type:"number",min:p.MIN_PRICE,step:"0.01",className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",value:a.price,onChange:m=>c("price",m.target.value),onBlur:m=>b("price",m.target.value,{required:!0,number:!0,min:p.MIN_PRICE}),placeholder:"10.00"})}),e.jsx(E,{label:"Tax Rate (%)",error:r["currentItem.taxRate"],children:e.jsx("input",{type:"number",min:"0",max:p.MAX_TAX_RATE,step:"0.01",className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",value:a.taxRate,onChange:m=>c("taxRate",m.target.value),onBlur:m=>b("taxRate",m.target.value,{number:!0,min:0,max:p.MAX_TAX_RATE}),placeholder:p.DEFAULT_TAX_RATE.toString()})})]}),e.jsxs("div",{className:"flex flex-col sm:flex-row gap-2 sm:gap-3",children:[e.jsxs(_,{onClick:N,variant:"primary",disabled:!i,children:[e.jsx(oe,{className:"w-4 h-4 mr-2"}),"Add Item"]}),M&&e.jsxs(_,{variant:"outline",onClick:D,children:[e.jsx(le,{className:"w-4 h-4 mr-2"}),"Clear"]})]})]})},C=(t,r=p.DEFAULT_CURRENCY,s=2)=>{if(t==null||isNaN(t))return`${p.CURRENCY_SYMBOL}0.00`;const n=parseFloat(t);try{return new Intl.NumberFormat("en-US",{style:"currency",currency:r,minimumFractionDigits:s,maximumFractionDigits:s}).format(n)}catch{return`${p.CURRENCY_SYMBOL}${n.toFixed(s)}`}},G=(t,r=p.DATE_FORMAT)=>{if(!t)return"";try{const s=typeof t=="string"?new Date(t):t;if(isNaN(s.getTime()))return"";const n=String(s.getMonth()+1).padStart(2,"0"),a=String(s.getDate()).padStart(2,"0"),o=s.getFullYear();switch(r){case"DD/MM/YYYY":return`${a}/${n}/${o}`;case"YYYY-MM-DD":return`${o}-${n}-${a}`;case"MMM DD, YYYY":return s.toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"});case"MMMM DD, YYYY":return s.toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"});default:return`${n}/${a}/${o}`}}catch(s){return console.error("Date formatting error:",s),""}},Ee=({items:t,onDeleteItem:r,onUpdateItem:s,onDuplicateItem:n})=>{if(t.length===0)return e.jsx(k,{title:"Invoice Items",children:e.jsxs("div",{className:"text-center py-12 text-gray-500",children:[e.jsx(W,{className:"w-16 h-16 mx-auto mb-4 opacity-30"}),e.jsx("h3",{className:"text-lg font-medium mb-2",children:"No items added yet"}),e.jsx("p",{children:"Add your first item using the form above."})]})});const a=(o,i)=>{window.confirm(`Are you sure you want to delete "${i}"?`)&&r(o)};return e.jsx(k,{title:"Invoice Items",subtitle:`${t.length} item${t.length!==1?"s":""} added`,children:e.jsx("div",{className:"overflow-x-auto -mx-4 sm:mx-0",children:e.jsxs("table",{className:"w-full min-w-[600px]",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-gray-200",children:[e.jsx("th",{className:"text-left py-3 px-2 font-medium text-gray-700 text-sm",children:"S.No"}),e.jsx("th",{className:"text-left py-3 px-2 font-medium text-gray-700 text-sm",children:"Item"}),e.jsx("th",{className:"text-left py-3 px-2 font-medium text-gray-700 text-sm",children:"Description"}),e.jsx("th",{className:"text-right py-3 px-2 font-medium text-gray-700 text-sm",children:"Qty"}),e.jsx("th",{className:"text-right py-3 px-2 font-medium text-gray-700 text-sm",children:"Price"}),e.jsx("th",{className:"text-right py-3 px-2 font-medium text-gray-700 text-sm",children:"Subtotal"}),e.jsx("th",{className:"text-right py-3 px-2 font-medium text-gray-700 text-sm",children:"Tax"}),e.jsx("th",{className:"text-right py-3 px-2 font-medium text-gray-700 text-sm",children:"Total"}),e.jsx("th",{className:"text-center py-3 px-2 font-medium text-gray-700 text-sm",children:"Actions"})]})}),e.jsx("tbody",{children:t.map((o,i)=>e.jsxs("tr",{className:"border-b border-gray-100 hover:bg-gray-50 transition-colors",children:[e.jsx("td",{className:"py-3 px-2 text-sm text-gray-600",children:i+1}),e.jsx("td",{className:"py-3 px-2 text-sm font-medium text-gray-900",children:o.name}),e.jsx("td",{className:"py-3 px-2 text-sm text-gray-600 max-w-xs truncate",children:o.description||"—"}),e.jsx("td",{className:"py-3 px-2 text-sm text-right text-gray-900",children:o.quantity}),e.jsx("td",{className:"py-3 px-2 text-sm text-right text-gray-900",children:C(o.price)}),e.jsx("td",{className:"py-3 px-2 text-sm text-right text-gray-900",children:C(o.subtotal)}),e.jsxs("td",{className:"py-3 px-2 text-sm text-right text-gray-600",children:[e.jsxs("div",{children:[o.taxRate,"%"]}),e.jsx("div",{className:"text-xs",children:C(o.taxAmount)})]}),e.jsx("td",{className:"py-3 px-2 text-sm text-right font-semibold text-gray-900",children:C(o.total)}),e.jsx("td",{className:"py-3 px-2",children:e.jsxs("div",{className:"flex justify-center space-x-1",children:[e.jsx("button",{onClick:()=>n(o.id),className:"text-blue-600 hover:text-blue-800 p-1 rounded hover:bg-blue-50 transition-colors",title:"Duplicate item",children:e.jsx(ie,{className:"w-4 h-4"})}),e.jsx("button",{onClick:()=>a(o.id,o.name),className:"text-red-600 hover:text-red-800 p-1 rounded hover:bg-red-50 transition-colors",title:"Delete item",children:e.jsx(ce,{className:"w-4 h-4"})})]})})]},o.id))})]})})})},Ae=({totals:t,invoiceDetails:r})=>e.jsxs("div",{className:"space-y-4 sm:space-y-6",children:[e.jsx(k,{title:"Invoice Summary",children:e.jsxs("div",{className:"space-y-3 sm:space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between text-sm",children:[e.jsxs("div",{className:"flex items-center text-gray-600",children:[e.jsx(W,{className:"w-4 h-4 mr-2"}),e.jsx("span",{children:"Invoice #"})]}),e.jsx("span",{className:"font-medium",children:r.invoiceNumber})]}),e.jsxs("div",{className:"flex items-center justify-between text-sm",children:[e.jsxs("div",{className:"flex items-center text-gray-600",children:[e.jsx(de,{className:"w-4 h-4 mr-2"}),e.jsx("span",{children:"Date"})]}),e.jsx("span",{className:"font-medium",children:G(r.date)})]}),r.customerName&&e.jsxs("div",{className:"flex items-center justify-between text-sm",children:[e.jsxs("div",{className:"flex items-center text-gray-600",children:[e.jsx(ue,{className:"w-4 h-4 mr-2"}),e.jsx("span",{children:"Customer"})]}),e.jsx("span",{className:"font-medium truncate ml-2",title:r.customerName,children:r.customerName})]})]})}),e.jsx(k,{title:"Financial Summary",children:e.jsxs("div",{className:"space-y-3 sm:space-y-4",children:[e.jsxs("div",{className:"flex justify-between items-center text-sm",children:[e.jsx("span",{className:"text-gray-600",children:"Items Count:"}),e.jsx("span",{className:"font-medium",children:t.itemCount})]}),e.jsxs("div",{className:"flex justify-between items-center text-sm",children:[e.jsx("span",{className:"text-gray-600",children:"Total Quantity:"}),e.jsx("span",{className:"font-medium",children:t.totalQuantity})]}),e.jsxs("div",{className:"border-t pt-4 space-y-3",children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("span",{className:"text-gray-600",children:"Subtotal:"}),e.jsx("span",{className:"font-medium",children:C(t.subtotal)})]}),e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("span",{className:"text-gray-600",children:"Total Tax:"}),e.jsx("span",{className:"font-medium",children:C(t.totalTax)})]}),e.jsx("div",{className:"border-t pt-3",children:e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("span",{className:"text-lg font-semibold text-gray-900",children:"Grand Total:"}),e.jsx("span",{className:"text-xl font-bold text-blue-600",children:C(t.grandTotal)})]})})]})]})}),e.jsx(k,{title:"Status",children:e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx("div",{className:`w-3 h-3 rounded-full mr-3 ${t.itemCount>0?"bg-green-500":"bg-gray-300"}`}),e.jsx("span",{className:"text-sm text-gray-600",children:t.itemCount>0?"Ready to generate":"Add items to continue"})]}),e.jsxs("div",{className:"flex items-center",children:[e.jsx("div",{className:`w-3 h-3 rounded-full mr-3 ${r.customerName?"bg-green-500":"bg-gray-300"}`}),e.jsx("span",{className:"text-sm text-gray-600",children:r.customerName?"Customer details added":"Add customer details"})]})]})})]}),Te=({size:t="md",className:r="",color:s="blue",text:n="",overlay:a=!1,center:o=!1,...i})=>{const l={sm:"w-4 h-4",md:"w-6 h-6",lg:"w-8 h-8",xl:"w-12 h-12"},c={blue:"text-blue-600",gray:"text-gray-600",white:"text-white",green:"text-green-600",red:"text-red-600",indigo:"text-indigo-600",purple:"text-purple-600",pink:"text-pink-600"},b=["animate-spin",l[t]||l.md,c[s]||c.blue,r].filter(Boolean).join(" "),v=()=>e.jsxs("svg",{className:b,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",...i,children:[e.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),e.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),N=()=>e.jsxs("div",{className:`flex items-center ${n?"space-x-2":""}`,children:[e.jsx(v,{}),n&&e.jsx("span",{className:`text-sm font-medium ${c[s]||c.blue}`,children:n})]});return a?e.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",children:e.jsx("div",{className:"bg-white rounded-lg p-6 shadow-lg",children:e.jsx(N,{})})}):o?e.jsx("div",{className:"flex items-center justify-center p-4",children:e.jsx(N,{})}):e.jsx(N,{})},R={generateInvoicePDF:async t=>{const{invoiceDetails:r,items:s,totals:n}=t;return new Promise((a,o)=>{try{const i=window.open("","_blank","width=800,height=600");if(!i)throw new Error("Popup blocked. Please allow popups for this site.");const l=R.generateInvoiceHTML(r,s,n);i.document.write(l),i.document.close(),i.addEventListener("load",()=>{setTimeout(()=>{i.print(),a()},250)}),i.addEventListener("error",c=>{o(c)})}catch(i){o(i)}})},generateInvoiceHTML:(t,r,s)=>`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Invoice ${t.invoiceNumber}</title>
        <style>${R.getInvoiceStyles()}</style>
      </head>
      <body>
        <div class="invoice-container">
          ${R.generateHeaderHTML(t)}
          ${R.generateDetailsHTML(t)}
          ${R.generateItemsTableHTML(r)}
          ${R.generateTotalsHTML(s)}
          ${R.generateFooterHTML(t)}
        </div>
      </body>
      </html>
    `,getInvoiceStyles:()=>`
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
  `,generateHeaderHTML:t=>`
    <div class="invoice-header">
      <h1>INVOICE</h1>
      <div class="invoice-number">#${t.invoiceNumber}</div>
    </div>
    
    <div class="company-info">
      <div><strong>${p.COMPANY_NAME}</strong></div>
      <div>${p.COMPANY_ADDRESS}</div>
      <div>${p.COMPANY_EMAIL} • ${p.COMPANY_PHONE}</div>
    </div>
  `,generateDetailsHTML:t=>`
    <div class="invoice-details">
      <div class="customer-section">
        <div class="section-title">Bill To:</div>
        <div class="customer-name">${t.customerName||"Customer Name"}</div>
        ${t.customerAddress?`<div>${t.customerAddress}</div>`:""}
        ${t.customerEmail?`<div>${t.customerEmail}</div>`:""}
        ${t.customerPhone?`<div>${t.customerPhone}</div>`:""}
      </div>
      
      <div class="invoice-info-section">
        <div class="section-title">Invoice Details:</div>
        <div><strong>Invoice #:</strong> ${t.invoiceNumber}</div>
        <div><strong>Date:</strong> ${G(t.date)}</div>
        ${t.dueDate?`<div><strong>Due Date:</strong> ${G(t.dueDate)}</div>`:""}
      </div>
    </div>
  `,generateItemsTableHTML:t=>`
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
        ${t.map((r,s)=>`
          <tr>
            <td class="text-center">${s+1}</td>
            <td>${r.name}</td>
            <td>${r.description||"—"}</td>
            <td class="text-right">${r.quantity}</td>
            <td class="text-right">${C(r.price)}</td>
            <td class="text-right">${C(r.subtotal)}</td>
            <td class="text-right">${r.taxRate}%</td>
            <td class="text-right">${C(r.taxAmount)}</td>
            <td class="text-right"><strong>${C(r.total)}</strong></td>
          </tr>
        `).join("")}
      </tbody>
    </table>
  `,generateTotalsHTML:t=>`
    <div class="totals-section">
      <table class="totals-table">
        <tbody>
          <tr>
            <th>Items:</th>
            <td class="text-right">${t.itemCount}</td>
          </tr>
          <tr>
            <th>Subtotal:</th>
            <td class="text-right">${C(t.subtotal)}</td>
          </tr>
          <tr>
            <th>Total Tax:</th>
            <td class="text-right">${C(t.totalTax)}</td>
          </tr>
          <tr class="grand-total">
            <th>Grand Total:</th>
            <td class="text-right">${C(t.grandTotal)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  `,generateFooterHTML:t=>`
    ${t.notes?`
      <div class="notes-section">
        <h3>Notes:</h3>
        <p>${t.notes}</p>
      </div>
    `:""}
    
    ${t.terms?`
      <div class="notes-section">
        <h3>Terms & Conditions:</h3>
        <p>${t.terms}</p>
      </div>
    `:""}
    
    <div class="footer">
      <p>Thank you for your business!</p>
      <p>Generated on ${G(new Date().toISOString())}</p>
    </div>
  `},Se=(t=p.INVOICE_NUMBER_PREFIX,r=null)=>{if(r!==null)return`${t}-${String(r).padStart(4,"0")}`;const s=Date.now(),n=Math.floor(Math.random()*1e3);return`${t}-${s}-${n}`},J=()=>`item_${Date.now()}_${Math.floor(Math.random()*1e4)}`,De=()=>new Date().toISOString().split("T")[0],Me=(t,r=30)=>{const s=new Date(t);return s.setDate(s.getDate()+r),s.toISOString().split("T")[0]},te=(t={})=>{const r=De();return{invoiceNumber:Se(),date:r,dueDate:Me(r),customerName:"",customerEmail:"",customerPhone:"",customerAddress:"",notes:"",terms:"Payment is due within 30 days of invoice date.",...t}},Fe=(t={})=>({id:J(),name:"",description:"",quantity:p.DEFAULT_ITEM_QUANTITY,price:"",taxRate:p.DEFAULT_TAX_RATE,subtotal:0,taxAmount:0,total:0,...t}),_e=(t,r)=>{const s=parseFloat(t)||0,n=parseFloat(r)||0;return s*n},Re=(t,r)=>{const s=parseFloat(t)||0,n=parseFloat(r)||0;return s*n/100},$e=(t,r)=>{const s=parseFloat(t)||0,n=parseFloat(r)||0;return s+n},z=t=>{const r=parseFloat(t.quantity)||0,s=parseFloat(t.price)||0,n=parseFloat(t.taxRate)||0,a=_e(r,s),o=Re(a,n),i=$e(a,o);return{...t,subtotal:$(a,2),taxAmount:$(o,2),total:$(i,2)}},Le=t=>{if(!Array.isArray(t)||t.length===0)return{itemCount:0,totalQuantity:0,subtotal:0,totalTax:0,grandTotal:0,averageTaxRate:0};const r=t.reduce((n,a)=>{const o=parseFloat(a.quantity)||0,i=parseFloat(a.subtotal)||0,l=parseFloat(a.taxAmount)||0,c=parseFloat(a.total)||0;return{totalQuantity:n.totalQuantity+o,subtotal:n.subtotal+i,totalTax:n.totalTax+l,grandTotal:n.grandTotal+c}},{totalQuantity:0,subtotal:0,totalTax:0,grandTotal:0}),s=r.subtotal>0?r.totalTax/r.subtotal*100:0;return{itemCount:t.length,totalQuantity:$(r.totalQuantity,2),subtotal:$(r.subtotal,2),totalTax:$(r.totalTax,2),grandTotal:$(r.grandTotal,2),averageTaxRate:$(s,2)}},$=(t,r=2)=>{const s=Math.pow(10,r);return Math.round((parseFloat(t)||0)*s)/s},ke=(t={})=>{const[r,s]=d.useState(()=>({...te(),...t.invoiceDetails})),[n,a]=d.useState(t.items||[]),[o,i]=d.useState(!1),[l,c]=d.useState(null),b=d.useMemo(()=>Le(n),[n]),v=d.useCallback(x=>{s(u=>({...u,...x})),c(null)},[]),N=d.useCallback(x=>{const u={...Fe(),...x,id:x.id||J()},h=z(u);a(f=>[...f,h]),c(null)},[]),D=d.useCallback((x,u)=>{a(h=>h.map(f=>{if(f.id===x){const U={...f,...u};return z(U)}return f})),c(null)},[]),M=d.useCallback(x=>{a(u=>u.filter(h=>h.id!==x)),c(null)},[]),m=d.useCallback(x=>{const u=n.find(h=>h.id===x);if(u){const h={...u,id:J(),name:`${u.name} (Copy)`},f=z(h);a(U=>[...U,f])}c(null)},[n]),A=d.useCallback(x=>{a(u=>{const h=u.findIndex(f=>f.id===x);if(h>0){const f=[...u];return[f[h-1],f[h]]=[f[h],f[h-1]],f}return u})},[]),T=d.useCallback(x=>{a(u=>{const h=u.findIndex(f=>f.id===x);if(h<u.length-1){const f=[...u];return[f[h],f[h+1]]=[f[h+1],f[h]],f}return u})},[]),P=d.useCallback(()=>{a([]),c(null)},[]),g=d.useCallback(()=>{s(te()),a([]),c(null)},[]),j=d.useCallback(()=>({invoiceDetails:r,items:n,totals:b}),[r,n,b]),y=d.useCallback(x=>{if(x.invoiceDetails&&s(x.invoiceDetails),x.items){const u=x.items.map(z);a(u)}c(null)},[]),w=d.useCallback(()=>JSON.stringify(j(),null,2),[j]),I=d.useCallback(x=>{try{i(!0);const u=JSON.parse(x);y(u),c(null)}catch(u){c("Invalid JSON data format"),console.error("Import error:",u)}finally{i(!1)}},[y]),Y=d.useCallback(()=>{var h,f;const x={};(h=r.invoiceNumber)!=null&&h.trim()||(x.invoiceNumber="Invoice number is required"),r.date||(x.date="Invoice date is required"),(f=r.customerName)!=null&&f.trim()||(x.customerName="Customer name is required"),n.length===0&&(x.items="At least one item is required");const u=Object.keys(x).length>0;return c(u?x:null),!u},[r,n]),F=d.useCallback((x="invoice_draft")=>{try{const u=j();return localStorage.setItem(x,JSON.stringify(u)),!0}catch(u){return console.error("Save to storage error:",u),c("Failed to save invoice data"),!1}},[j]),V=d.useCallback((x="invoice_draft")=>{try{const u=localStorage.getItem(x);if(u){const h=JSON.parse(u);return y(h),!0}return!1}catch(u){return console.error("Load from storage error:",u),c("Failed to load invoice data"),!1}},[y]),Q=d.useCallback((x="invoice_draft")=>{try{return localStorage.removeItem(x),!0}catch(u){return console.error("Clear storage error:",u),!1}},[]);return d.useEffect(()=>{const x=setTimeout(()=>{(n.length>0||r.customerName)&&F("invoice_autosave")},2e3);return()=>clearTimeout(x)},[r,n,F]),{invoiceDetails:r,items:n,totals:b,isLoading:o,error:l,updateInvoiceDetails:v,addItem:N,updateItem:D,deleteItem:M,duplicateItem:m,moveItemUp:A,moveItemDown:T,clearAllItems:P,getInvoiceData:j,setInvoiceData:y,resetInvoice:g,exportData:w,importData:I,validateInvoice:Y,saveToStorage:F,loadFromStorage:V,clearStorage:Q,setError:c,setIsLoading:i}},Pe=t=>{const r=t!=null&&String(t).trim()!=="";return{isValid:r,errorMessage:r?"":p.VALIDATION_MESSAGES.REQUIRED_FIELD}},Ve=t=>{if(!t)return{isValid:!0,errorMessage:""};const s=/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t);return{isValid:s,errorMessage:s?"":p.VALIDATION_MESSAGES.INVALID_EMAIL}},Oe=t=>{if(!t)return{isValid:!0,errorMessage:""};const s=/^[\+]?[\d\s\(\)\-\.]{10,}$/.test(t);return{isValid:s,errorMessage:s?"":"Please enter a valid phone number"}},Ue=(t,r={})=>{const{min:s,max:n,required:a=!1}=r;if(a&&(t===""||t===null||t===void 0))return{isValid:!1,errorMessage:p.VALIDATION_MESSAGES.REQUIRED_FIELD};if(!a&&(t===""||t===null||t===void 0))return{isValid:!0,errorMessage:""};const o=parseFloat(t);return isNaN(o)?{isValid:!1,errorMessage:p.VALIDATION_MESSAGES.INVALID_NUMBER}:s!==void 0&&o<s?{isValid:!1,errorMessage:p.VALIDATION_MESSAGES.MIN_VALUE.replace("{min}",s)}:n!==void 0&&o>n?{isValid:!1,errorMessage:p.VALIDATION_MESSAGES.MAX_VALUE.replace("{max}",n)}:{isValid:!0,errorMessage:""}},Ye=(t,r={})=>{const{required:s=!1,future:n=!1,past:a=!1}=r;if(s&&!t)return{isValid:!1,errorMessage:p.VALIDATION_MESSAGES.REQUIRED_FIELD};if(!s&&!t)return{isValid:!0,errorMessage:""};const o=new Date(t);if(isNaN(o.getTime()))return{isValid:!1,errorMessage:p.VALIDATION_MESSAGES.INVALID_DATE};const i=new Date;return i.setHours(0,0,0,0),o.setHours(0,0,0,0),n&&o<=i?{isValid:!1,errorMessage:"Date must be in the future"}:a&&o>=i?{isValid:!1,errorMessage:"Date must be in the past"}:{isValid:!0,errorMessage:""}},re=(t,r={})=>{const{required:s,email:n,phone:a,number:o,date:i,min:l,max:c,future:b,past:v}=r;if(s){const N=Pe(t);if(!N.isValid)return N}return!t&&!s?{isValid:!0,errorMessage:""}:n?Ve(t):a?Oe(t):o?Ue(t,{min:l,max:c,required:s}):i?Ye(t,{required:s,future:b,past:v}):{isValid:!0,errorMessage:""}},qe=(t={})=>{const[r,s]=d.useState(t),[n,a]=d.useState({}),o=d.useCallback((g,j,y={})=>{const w=re(j,y);return s(I=>({...I,[g]:w.isValid?"":w.errorMessage})),a(I=>({...I,[g]:!0})),w.isValid},[]),i=d.useCallback(g=>{const j={},y={};let w=!0;return Object.entries(g).forEach(([I,{value:Y,rules:F={}}])=>{const V=re(Y,F);j[I]=V.isValid?"":V.errorMessage,y[I]=!0,V.isValid||(w=!1)}),s(I=>({...I,...j})),a(I=>({...I,...y})),w},[]),l=d.useCallback(g=>{s(j=>({...j,[g]:""}))},[]),c=d.useCallback(()=>{s({}),a({})},[]),b=d.useCallback((g,j)=>{s(y=>({...y,[g]:j})),a(y=>({...y,[g]:!0}))},[]),v=d.useCallback(g=>{s(y=>({...y,...g}));const j=Object.keys(g).reduce((y,w)=>(y[w]=!0,y),{});a(y=>({...y,...j}))},[]),N=d.useCallback(()=>Object.values(r).some(g=>g!==""),[r]),D=d.useCallback(g=>n[g]||!1,[n]),M=d.useCallback(g=>!!r[g],[r]),m=d.useCallback(g=>r[g]||"",[r]),A=d.useCallback(()=>{s({}),a({})},[]),T=d.useCallback(g=>{a(j=>({...j,[g]:!0}))},[]),P=d.useCallback(()=>Object.values(n).some(Boolean)&&!N(),[n,N]);return{errors:r,touched:n,validateField:o,validateMultipleFields:i,clearError:l,clearAllErrors:c,setFieldError:b,setMultipleErrors:v,hasErrors:N,isFieldTouched:D,hasFieldError:M,getFieldError:m,touchField:T,isFormReady:P,reset:A}},Be=()=>{const{invoiceDetails:t,items:r,totals:s,isLoading:n,error:a,updateInvoiceDetails:o,addItem:i,deleteItem:l,duplicateItem:c,resetInvoice:b,getInvoiceData:v,saveToStorage:N,loadFromStorage:D,exportData:M,importData:m,validateInvoice:A}=ke(),{errors:T,validateField:P,clearError:g,clearAllErrors:j,hasErrors:y}=qe(),[w,I]=d.useState(!1),[Y,F]=d.useState(!1),V=async()=>{if(A()){if(y()){alert("Please fix all form errors before generating PDF");return}if(r.length===0){alert("Please add at least one item before generating PDF");return}I(!0);try{await R.generateInvoicePDF(v()),N()}catch(S){console.error("PDF generation failed:",S),alert(`Failed to generate PDF: ${S.message}`)}finally{I(!1)}}},Q=()=>{N()&&alert("Invoice saved successfully!")},x=()=>{D()?(j(),alert("Invoice loaded successfully!")):alert("No saved invoice found")},u=()=>{try{const S=M(),B=new Blob([S],{type:"application/json"}),q=URL.createObjectURL(B),O=document.createElement("a");O.href=q,O.download=`invoice_${t.invoiceNumber||"draft"}.json`,document.body.appendChild(O),O.click(),document.body.removeChild(O),URL.revokeObjectURL(q),alert("Invoice data exported successfully!")}catch(S){console.error("Export failed:",S),alert("Failed to export invoice data")}},h=S=>{const B=S.target.files[0];if(!B)return;const q=new FileReader;q.onload=O=>{try{m(O.target.result),j(),F(!1),alert("Invoice data imported successfully!")}catch{alert("Failed to import invoice data. Please check the file format.")}},q.readAsText(B)},f=()=>{window.confirm("Are you sure you want to reset all data? This action cannot be undone.")&&(b(),j())},U=()=>t.invoiceNumber&&t.date&&t.customerName&&r.length>0&&!y();return e.jsx("div",{className:"min-h-screen bg-gray-50 py-4 sm:py-8",children:e.jsxs("div",{className:"max-w-7xl mx-auto px-3 sm:px-4 lg:px-8",children:[e.jsx("div",{className:"mb-6 sm:mb-8",children:e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center sm:justify-between",children:[e.jsxs("div",{className:"mb-4 sm:mb-0",children:[e.jsxs("h1",{className:"text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 flex items-center",children:[e.jsx(W,{className:"w-6 h-6 sm:w-8 sm:h-8 mr-2 sm:mr-3 text-blue-600"}),e.jsx("span",{className:"text-lg sm:text-2xl lg:text-3xl",children:"Invoice Generator"})]}),e.jsx("p",{className:"mt-2 text-sm sm:text-base text-gray-600",children:"Create professional invoices with ease"})]}),e.jsxs("div",{className:"flex flex-wrap gap-2 sm:gap-2",children:[e.jsxs(_,{variant:"outline",size:"sm",onClick:x,disabled:n,children:[e.jsx(K,{className:"w-4 h-4 mr-1"}),"Load"]}),e.jsxs(_,{variant:"outline",size:"sm",onClick:Q,disabled:n,children:[e.jsx(me,{className:"w-4 h-4 mr-1"}),"Save"]}),e.jsxs(_,{variant:"outline",size:"sm",onClick:u,disabled:n||r.length===0,children:[e.jsx(Z,{className:"w-4 h-4 mr-1"}),"Export"]}),e.jsxs(_,{variant:"ghost",size:"sm",onClick:f,disabled:n,children:[e.jsx(xe,{className:"w-4 h-4 mr-1"}),"Reset"]})]})]})}),Y&&e.jsxs("div",{className:"mb-6 p-4 bg-blue-50 rounded-lg border border-blue-200",children:[e.jsx("h3",{className:"text-sm font-medium text-blue-900 mb-2",children:"Import Invoice Data"}),e.jsx("input",{type:"file",accept:".json",onChange:h,className:"text-sm text-blue-600"}),e.jsx(_,{variant:"ghost",size:"sm",onClick:()=>F(!1),className:"ml-2",children:"Cancel"})]}),a&&typeof a=="string"&&e.jsx("div",{className:"mb-6 p-4 bg-red-50 border border-red-200 rounded-lg",children:e.jsx("p",{className:"text-red-800",children:a})}),n&&e.jsx("div",{className:"mb-6",children:e.jsx(Te,{center:!0,text:"Loading invoice data..."})}),e.jsxs("div",{className:"grid grid-cols-1 xl:grid-cols-3 gap-4 sm:gap-6",children:[e.jsxs("div",{className:"xl:col-span-2 space-y-4 sm:space-y-6",children:[e.jsx(Ie,{invoiceDetails:t,onUpdateDetails:o,errors:T,validateField:P,clearError:g}),e.jsx(we,{invoiceDetails:t,onUpdateDetails:o,errors:T,validateField:P,clearError:g}),e.jsx(Ce,{onAddItem:i,errors:T,validateField:P,clearError:g}),e.jsx(Ee,{items:r,onDeleteItem:l,onDuplicateItem:c})]}),e.jsxs("div",{className:"space-y-4 sm:space-y-6 order-first xl:order-last",children:[e.jsx(Ae,{totals:s,invoiceDetails:t}),e.jsxs("div",{className:"sticky top-6",children:[e.jsx(_,{onClick:V,disabled:!U()||w,loading:w,className:"w-full",size:"lg",children:w?"Generating PDF...":e.jsxs(e.Fragment,{children:[e.jsx(Z,{className:"w-5 h-5 mr-2"}),"Generate PDF"]})}),!U()&&e.jsx("p",{className:"text-xs text-gray-500 mt-2 text-center",children:"Complete required fields and add items to generate PDF"}),e.jsx("div",{className:"mt-4 space-y-2",children:e.jsxs(_,{variant:"outline",size:"sm",onClick:()=>F(!0),className:"w-full",disabled:n,children:[e.jsx(K,{className:"w-4 h-4 mr-2"}),"Import Data"]})})]})]})]}),e.jsx("div",{className:"mt-12 pt-6 border-t border-gray-200",children:e.jsxs("div",{className:"text-center text-gray-500 text-sm",children:[e.jsx("p",{children:"Invoice Generator - Create professional invoices quickly and easily"}),e.jsx("p",{className:"mt-1",children:"Data is saved locally in your browser"})]})})]})})},ze=()=>e.jsx("div",{className:"App",children:e.jsx(Be,{})}),Ge=X.createRoot(document.getElementById("root"));Ge.render(e.jsx(L.StrictMode,{children:e.jsx(ze,{})}));
//# sourceMappingURL=index-BWSsF_c3.js.map
