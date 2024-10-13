const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const connection = mysql.createConnection({
  host: 'host_de_votre_base_de_données',
  user: 'utilisateur',
  password: 'mot_de_passe',
  database: 'nom_de_votre_base_de_données',
});

connection.connect(err => {
  if (err) {
    console.error('Erreur de connexion à la base de données: ', err);
    return;
  }
  console.log('Connecté à la base de données.');
});

// Exemple d'API pour récupérer des catégories
app.get('/api/categories', (req, res) => {
  connection.query('SELECT * FROM categories', (error, results) => {
    if (error) {
      return res.status(500).json({ error });
    }
    res.json(results);
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});
