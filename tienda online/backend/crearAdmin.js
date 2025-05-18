const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'mi_base_de_datos',
  password: '',
  port: 5432,
});

const admins = [
  ['admin1', 'admin123', 'admin1@tienda.com', 'Admin', 'Uno', 'Perú', 'admin'],
  ['admin2', 'admin123', 'admin2@tienda.com', 'Admin', 'Dos', 'México', 'admin'],
  ['admin3', 'admin123', 'admin3@tienda.com', 'Admin', 'Tres', 'Chile', 'admin']
];

/* Ejecutar comando: node crearAdmin.js */
async function crearAdmins() {
  try {
    for (const a of admins) {
      await pool.query(
        `INSERT INTO usuarios (username, password, email, firstname, lastname, country, rol)
         VALUES ($1, $2, $3, $4, $5, $6, $7)`,
        a
      );
    }
    console.log('✅ Usuarios administradores creados');
  } catch (err) {
    console.error('❌ Error:', err.message);
  } finally {
    await pool.end();
  }
}

crearAdmins();
