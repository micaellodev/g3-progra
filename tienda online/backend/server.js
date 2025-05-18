const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
app.use(cors());
app.use(express.json());

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'mi_base_de_datos',
  password: '',
  port: 5432,
});

// Ruta test
app.get('/', (req, res) => {
  res.send('Servidor funcionando');
});

// Registro
app.post('/register', async (req, res) => {
  const { username, password, email, firstname, lastname, country } = req.body;

  try {
    await pool.query(
      'INSERT INTO usuarios (username, password, email, firstname, lastname, country) VALUES ($1, $2, $3, $4, $5, $6)',
      [username, password, email, firstname, lastname, country]
    );
    res.json({ message: 'Usuario registrado correctamente' });
  } catch (error) {
    console.error('ERROR DETALLADO:', error);  // 👈 esto imprime el error completo en consola
    res.status(500).json({ error: 'Error registrando usuario' });
  }
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const result = await pool.query(
      'SELECT * FROM usuarios WHERE email = $1',
      [email]
    );

    if (result.rows.length > 0) {
      const usuario = result.rows[0];
      if (password === usuario.password) {
        res.status(200).json({ message: 'Login correcto' });
      } else {
        res.status(401).json({ message: 'contraseña incorrecta' });
      }
    } else {
      res.status(401).json({ message: 'no se encontró ningún correo registrado' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});




app.listen(3000, () => {
  console.log('Servidor en http://localhost:3000');
});

