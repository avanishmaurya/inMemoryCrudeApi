// src/controllers/storeController.js

const stores = require('../data/storeData');

const getAllStores = (req, res) => {
    res.json(stores);
};

const getStoreById = (req, res) => {
    const store = stores.find(s => s.id === parseInt(req.params.id));
    if (!store) return res.status(404).json({ message: 'Store not found' });
    res.json(store);
};

const createStore = (req, res) => {
    const newStore = {
        id: stores.length + 1,
        name: req.body.name,
        location: req.body.location
    };
    stores.push(newStore);
    res.status(201).json(newStore);
};

const updateStore = (req, res) => {
    const store = stores.find(s => s.id === parseInt(req.params.id));
    if (!store) return res.status(404).json({ message: 'Store not found' });

    store.name = req.body.name;
    store.location = req.body.location;

    res.json(store);
};

const deleteStore = (req, res) => {
    const storeIndex = stores.findIndex(s => s.id === parseInt(req.params.id));
    if (storeIndex === -1) return res.status(404).json({ message: 'Store not found' });

    stores.splice(storeIndex, 1);
    res.status(204).send();
};

module.exports = {
    getAllStores,
    getStoreById,
    createStore,
    updateStore,
    deleteStore
};