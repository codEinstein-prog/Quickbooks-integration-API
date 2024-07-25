// customerController.js
const axios = require('axios');

const getCustomers = async (req, res) => {
    try {
        const response = await axios.get('https://quickbooks.api.intuit.com/v3/company/YOUR_COMPANY_ID/customer', {
            headers: {
                Authorization: `Bearer ${req.headers['quickbooks-token']}`,
            },
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const createCustomer = async (req, res) => {
    try {
        const response = await axios.post('https://quickbooks.api.intuit.com/v3/company/YOUR_COMPANY_ID/customer', req.body, {
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
    getCustomers,
    createCustomer,
};
