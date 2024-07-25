// routes.js
const express = require('express');
const router = express.Router();
const authController = require('./authController');
const customerController = require('./customerController');
const invoiceController = require('./invoiceController');
const syncController = require('./syncController');

// Authentication
router.post('/auth/quickbooks', authController.getQuickBooksToken);
router.post('/auth/squarespace', authController.getSquarespaceToken);

// Customer Management
router.get('/customers', customerController.getCustomers);
router.post('/customers', customerController.createCustomer);

// Invoice Management
router.get('/invoices', invoiceController.getInvoices);
router.post('/invoices', invoiceController.createInvoice);
router.patch('/invoices/:id', invoiceController.updateInvoice);

// Sync Operations
router.post('/sync/orders', syncController.syncOrders);
router.post('/sync/customers', syncController.syncCustomers);

module.exports = router;
