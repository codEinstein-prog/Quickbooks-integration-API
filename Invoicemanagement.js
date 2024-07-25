// invoiceController.js
const axios = require('axios');

const getInvoices = async (req, res) => {
    try {
        const response = await axios.get('https://quickbooks.api.intuit.com/v3/company/YOUR_COMPANY_ID/invoice', {
            headers: {
                Authorization: `Bearer ${req.headers['quickbooks-token']}`,
            },
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const createInvoice = async (req, res) => {
    try {
        const response = await axios.post('https://quickbooks.api.intuit.com/v3/company/YOUR_COMPANY_ID/invoice', req.body, {
            headers: {
                Authorization: `Bearer ${req.headers['quickbooks-token']}`,
            },
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateInvoice = async (req, res) => {
    try {
        const response = await axios.patch(`https://quickbooks.api.intuit.com/v3/company/YOUR_COMPANY_ID/invoice/${req.params.id}`, req.body, {
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
    getInvoices,
    createInvoice,
    updateInvoice,
};
