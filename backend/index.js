import express from 'express';
import cors from 'cors';
import { sequelize } from './config/database.js';
import { Categoria } from './models/Categoria.js';
import { Producto } from './models/Producto.js';
import { Usuario } from './models/Usuario.js';
import { Orden } from './models/Orden.js';
import { DetalleOrden } from './models/DetalleOrden.js';
import { MetodoPago } from './models/MetodoPago.js';
import { Pago } from './models/Pago.js';
import { Carrito } from './models/Carrito.js';
import { DetalleCategoria } from './models/DetalleCategoria.js';
import { DataTypes } from 'sequelize';
import categoriaRoutes from './routes/categoriaRoutes.js';
import carritoRoutes from './routes/carritoRoutes.js';
import productRoutes from './routes/productRoutes.js';
import usuarioRoutes from './routes/userRoutes.js';
import orderRoutes from './routes/orderRoutes.js';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors({
  origin: ['https://lemon-bush-0e12a871e.2.azurestaticapps.net', 'http://localhost:5173', 'http://localhost:3000'],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use('/categorias', categoriaRoutes);
app.use('/carrito', carritoRoutes);
app.use('/usuarios', usuarioRoutes);
app.use('/ordenes', orderRoutes);
app.get('/health', (req, res) => res.send('OK'));
app.get('/',        (req, res) => res.send('Hola desde el backend'));

sequelize.authenticate()
  .then(async () => {
    console.log('✅ Conexión exitosa a Supabase');
    
    // Sincronizar modelos con la base de datos (crear tablas si no existen)
    try {
      await sequelize.sync({ alter: true });
      console.log('✅ Tablas sincronizadas correctamente');
    } catch (error) {
      console.log('⚠️ Error al sincronizar tablas:', error.message);
    }
    
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







// ---------------------- DETALLE ORDEN ----------------------
app.get('/detalle-ordenes', async (req, res) => {
  try {
    const detalles = await DetalleOrden.findAll();
    res.json(detalles);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener detalles' });
  }
});

app.get('/detalle-ordenes/:id', async (req, res) => {
  try {
    const det = await DetalleOrden.findByPk(req.params.id);
    if (!det) return res.status(404).json({ error: 'Detalle no encontrado' });
    res.json(det);
  } catch (error) {
    res.status(500).json({ error: 'Error al buscar detalle' });
  }
});

app.post('/detalle-ordenes', async (req, res) => {
  try {
    const { ordenId, productoId, cantidad, precio } = req.body;
    const nuevoDetalle = await DetalleOrden.create({ ordenId, productoId, cantidad, precio });

    // Disminuir el stock del producto
    const producto = await Producto.findByPk(productoId);
    if (producto) {
      producto.stock = Math.max(0, producto.stock - cantidad);
      await producto.save();
    }

    res.status(201).json(nuevoDetalle);
  } catch (error) {
    res.status(400).json({ error: 'Error al crear detalle', detalles: error.message });
  }
});

app.put('/detalle-ordenes/:id', async (req, res) => {
  try {
    const det = await DetalleOrden.findByPk(req.params.id);
    if (!det) return res.status(404).json({ error: 'Detalle no encontrado' });
    const { ordenId, productoId, cantidad, precio } = req.body;
    await det.update({ ordenId, productoId, cantidad, precio });
    res.json({ mensaje: 'Detalle actualizado', det });
  } catch (error) {
    res.status(400).json({ error: 'Error al actualizar detalle', detalles: error.message });
  }
});

app.delete('/detalle-ordenes/:id', async (req, res) => {
  try {
    const det = await DetalleOrden.findByPk(req.params.id);
    if (!det) return res.status(404).json({ error: 'Detalle no encontrado' });
    await det.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar detallet'})
  }
});

// ---------------------- METODOS DE PAGO ----------------------
app.get('/metodos-pago', async (req, res) => {
  try {
    const mps = await MetodoPago.findAll();
    res.json(mps);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener métodos de pago' });
  }
});

app.get('/metodos-pago/:id', async (req, res) => {
  try {
    const mp = await MetodoPago.findByPk(req.params.id);
    if (!mp) return res.status(404).json({ error: 'Método no encontrado' });
    res.json(mp);
  } catch (error) {
    res.status(500).json({ error: 'Error al buscar método' });
  }
});

app.post('/metodos-pago', async (req, res) => {
  try {
    const { nombre_metodo } = req.body;
    const nuevoMp = await MetodoPago.create({ nombre_metodo });
    res.status(201).json(nuevoMp);
  } catch (error) {
    res.status(400).json({ error: 'Error al crear método', detalles: error.message });
  }
});

app.put('/metodos-pago/:id', async (req, res) => {
  try {
    const mp = await MetodoPago.findByPk(req.params.id);
    if (!mp) return res.status(404).json({ error: 'Método no encontrado' });
    const { nombre_metodo } = req.body;
    await mp.update({ nombre_metodo });
    res.json({ mensaje: 'Método actualizado', mp });
  } catch (error) {
    res.status(400).json({ error: 'Error al actualizar método', detalles: error.message });
  }
});

app.delete('/metodos-pago/:id', async (req, res) => {
    try {
      const mp = await MetodoPago.findByPk(req.params.id);
      if (!mp) return res.status(404).json({ error: 'Método no encontrado' });
      await mp.destroy();
      res.sendStatus(204); // ó res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: 'Error al eliminar método' });
    }
  });
  
// Endpoint para inicializar métodos de pago básicos
app.post('/inicializar-metodos-pago', async (req, res) => {
  try {
    // Verificar si ya existen métodos de pago
    const metodosExistentes = await MetodoPago.findAll();
    
    if (metodosExistentes.length === 0) {
      // Crear métodos de pago básicos
      const metodosBasicos = [
        { nombre_metodo: 'Tarjeta de Crédito/Débito' },
        { nombre_metodo: 'Yape (QR)' },
        { nombre_metodo: 'Transferencia Bancaria' }
      ];
      
      const metodosCreados = await MetodoPago.bulkCreate(metodosBasicos);
      res.status(201).json({ 
        mensaje: 'Métodos de pago inicializados', 
        metodos: metodosCreados 
      });
    } else {
      res.json({ 
        mensaje: 'Los métodos de pago ya existen', 
        metodos: metodosExistentes 
      });
    }
  } catch (error) {
    console.error('Error al inicializar métodos de pago:', error);
    res.status(500).json({ error: 'Error al inicializar métodos de pago' });
  }
});

app.post('/AgregarProducto', async (req, res) => {
  const { nombre, descripcion, precio, imagen_url } = req.body;

  try {
    const { data, error } = await supabase
      .from('productos')
      .insert([{ nombre, descripcion, precio, imagen_url }]);

    if (error) throw error;

    res.status(201).json(data);
  } catch (error) {
    console.error('Error al agregar producto:', error);
    res.status(500).json({ error: 'Error al agregar producto' });
  }
});