const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// Récupérer tous les produits
router.get('/', async (req, res) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Erreur serveur' });
  }
});

module.exports = router;
