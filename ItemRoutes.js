import express from 'express';
import Item from '../models/Item.js';

const router = express.Router();

// Create new item
router.post('/api/create', async (req, res) => {
    const { name, description, price, inStock } = req.body;
    try {
        const newItem = new Item({ name, description, price, inStock });
        await newItem.save();
        res.status(201).json({ message: 'Item created successfully', newItem });
    } catch (error) {
        res.status(500).json({ message: 'Error creating item', error });
    }
});

export default router;
