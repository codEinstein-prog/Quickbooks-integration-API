// syncController.js
const axios = require('axios');

const syncOrders = async (req, res) => {
    try {
        const squarespaceOrders = await axios.get('https://api.squarespace.com/1.0/commerce/orders', {
            headers: {
                Authorization: `Bearer ${req.headers['squarespace-token']}`,
            },
        });

        const quickbooksOrders = squarespaceOrders.data.orders.map(order => ({
            // Map Squarespace order to QuickBooks invoice format
        }));

        const response = await axios.post('https://quickbooks.api.intuit.com/v3/company/YOUR_COMPANY_ID/invoice/batch', quickbooksOrders, {
            headers: {
                Authorization: `Bearer ${req.headers['quickbooks-token']}`,
            },
        });

        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const syncCustomers = async (req, res) => {
    try {
        const squarespaceCustomers = await axios.get('https://api.squarespace.com/1.0/commerce/customers', {
            headers: {
                Authorization: `Bearer ${req.headers['squarespace-token']}`,
            },
        });

        const quickbooksCustomers = squarespaceCustomers.data.customers.map(customer => ({
            // Map Squarespace customer to QuickBooks customer format
        }));

        const response = await axios.post('https://quickbooks.api.intuit.com/v3/company/YOUR_COMPANY_ID/customer/batch', quickbooksCustomers, {
            headers: {
                Authorization: `Bearer ${req.headers['quickbooks-token']}`,
            },
        });

        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    syncOrders,
    syncCustomers,
};
