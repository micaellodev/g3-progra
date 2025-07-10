import express from 'express';
import cors from 'cors';
import { sequelize } from './config/database.js';

// Importar rutas
import categoriaRoutes from './routes/categoriaRoutes.js';
import carritoRoutes from './routes/carritoRoutes.js';
import productRoutes from './routes/productRoutes.js';
import usuarioRoutes from './routes/usuarioRoutes.js';
import ordenRoutes from './routes/ordenRoutes.js';
import detalleOrdenRoutes from './routes/detalleOrdenRoutes.js';
import metodoPagoRoutes from './routes/metodoPagoRoutes.js';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Configuración de CORS simplificada temporalmente para desarrollo
const corsOptions = {
  // Permitir cualquier origen en desarrollo, reflejando el encabezado Origin
  origin: ['https://lemon-bush-0e12a871e.2.azurestaticapps.net', 'http://localhost:5173', 'http://localhost:3000'],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
  credentials: true
};

app.use(cors(corsOptions));

// Manejar solicitudes OPTIONS (preflight)
// Manejar solicitudes OPTIONS (preflight) para todos los endpoints
app.options(/.*/, cors(corsOptions));

// Rutas API
app.use('/api/categorias', categoriaRoutes);
app.use('/api/carrito', carritoRoutes);
app.use('/api/productos', productRoutes);
app.use('/api/usuarios', usuarioRoutes);
app.use('/api/ordenes', ordenRoutes);
app.use('/api/detalle-ordenes', detalleOrdenRoutes);
app.use('/api/metodos-pago', metodoPagoRoutes);

// Rutas de salud y raíz
app.get('/health', (req, res) => res.send('OK'));
app.get('/', (req, res) => res.send('Hola desde el backend'));

sequelize.authenticate()
  .then(() => {
    console.log('✅ Conexión exitosa a Supabase');
    app.listen(port, () => {
      console.log(`🚀 Servidor corriendo en http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error('❌ Error al conectar con Supabase:', err);
  });

app.get('/', (req, res) => {
  res.send('Hola desde el backend');
});


async function verifyAndSyncDatabase() {
    try {
      await sequelize.authenticate();
      console.log("Conexion exitosa con la BD");
    } catch (error) {
      console.log("Ocurrio un error con la conexion", error);
    }
  }
  
  // Conexión a la DB
  try {
      await sequelize.authenticate();
      console.log('Conexión a la base de datos exitosa');
  } catch (error) {
      console.error('Error al conectar a la base de datos:', error);
  }



// ---------------------- PRODUCTOS ----------------------
// GET - Obtener todos los productos
app.get("/productos", async (req, res) => {
    try {
        const productos = await Producto.findAll();
        res.json(productos);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener productos" });
    }
});

// GET - Obtener un producto por ID
app.get("/productos/:id", async (req, res) => {
    try {
        const producto = await Producto.findByPk(req.params.id);
        if (producto) {
            res.json(producto);
        } else {
            res.status(404).json({ error: "Producto no encontrado" });
        }
    } catch (error) {
        res.status(500).json({ error: "Error al buscar producto" });
    }
});

// POST - Crear un nuevo producto
app.post("/productos", async (req, res) => {
    try {
        const { nombre, presentacion, descripcion, id_categoria, stock, precio, imagen } = req.body;
        const nuevoProducto = await Producto.create({
            nombre,
            presentacion,
            descripcion,
            id_categoria,
            stock,
            precio,
            imagen
        });
        res.status(201).json(nuevoProducto);
    } catch (error) {
        res.status(400).json({ error: "Error al crear producto", detalles: error.message });
    }
});

// PUT - Actualizar un producto existente
app.put("/productos/:id", async (req, res) => {
    try {
        const producto = await Producto.findByPk(req.params.id);
        if (!producto) {
            return res.status(404).json({ mensaje: "Producto no encontrado" });
        }

        const { nombre, presentacion, descripcion, id_categoria, stock, precio, imagen } = req.body;
        await producto.update({ nombre, presentacion, descripcion, id_categoria, stock, precio, imagen });

        res.json({ mensaje: "Producto actualizado", producto });
    } catch (error) {
        res.status(400).json({ error: "Error al actualizar producto", detalles: error.message });
    }
});

// DELETE - Eliminar un producto
app.delete("/productos/:id", async (req, res) => {
    try {
        const producto = await Producto.findByPk(req.params.id);
        if (!producto) {
            return res.status(404).json({ error: "Producto no encontrado" });
        }

        await producto.destroy();
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: "Error al eliminar producto" });
    }
});

// Ruta de salud y raíz
app.get('/health', (req, res) => res.send('OK'));
app.get('/', (req, res) => res.send('Hola desde el backend'));

// Manejador de errores global
app.use((err, req, res, next) => {
  console.error('Error no manejado:', err);
  res.status(500).json({ 
    error: 'Error interno del servidor',
    mensaje: err.message,
    stack: process.env.NODE_ENV === 'development' ? err.stack : undefined
  });
});