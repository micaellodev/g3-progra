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

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.get('/health', (req, res) => res.send('OK'));

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
      await sequelize.sync(); // Crea tablas si no existen
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

// ---------------------- CATEGORIAS ----------------------
app.get('/categorias', async (req, res) => {
  try {
    const categorias = await Categoria.findAll();
    res.json(categorias);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener categorías' });
  }
});

app.get('/categorias/:id', async (req, res) => {
  try {
    const cat = await Categoria.findByPk(req.params.id);
    if (!cat) return res.status(404).json({ error: 'Categoría no encontrada' });
    res.json(cat);
  } catch (error) {
    res.status(500).json({ error: 'Error al buscar categoría' });
  }
});

app.post('/categorias', async (req, res) => {
  try {
    const { nombre, descripcion } = req.body;
    const nuevaCategoria = await Categoria.create({ nombre, descripcion });
    res.status(201).json(nuevaCategoria);
  } catch (error) {
    res.status(400).json({ error: 'Error al crear categoría', detalles: error.message });
  }
});

app.put('/categorias/:id', async (req, res) => {
  try {
    const cat = await Categoria.findByPk(req.params.id);
    if (!cat) return res.status(404).json({ error: 'Categoría no encontrada' });
    const { nombre, descripcion } = req.body;
    await cat.update({ nombre, descripcion });
    res.json({ mensaje: 'Categoría actualizada', cat });
  } catch (error) {
    res.status(400).json({ error: 'Error al actualizar categoría', detalles: error.message });
  }
});

app.delete('/categorias/:id', async (req, res) => {
  try {
    const cat = await Categoria.findByPk(req.params.id);
    if (!cat) return res.status(404).json({ error: 'Categoría no encontrada' });
    await cat.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar categoría' });
  }
});

// ---------------------- USUARIOS ----------------------
app.get('/usuarios', async (req, res) => {
  try {
    const usuarios = await Usuario.findAll();
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener usuarios' });
  }
});

// Obtener un usuario por ID
app.get('/usuarios/:id', async (req, res) => {
  try {
    const usuario = await Usuario.findByPk(req.params.id);
    if (!usuario) return res.status(404).json({ error: 'Usuario no encontrado' });
    res.json(usuario);
  } catch (error) {
    res.status(500).json({ error: 'Error al buscar usuario' });
  }
});

// Crear un nuevo usuario
app.post('/usuarios', async (req, res) => {
  try {
    const { nombre, apellido, correo, pais, clinica, contrasena } = req.body;

    // Validar campos requeridos
    if (!nombre || !apellido || !correo || !pais || !clinica || !contrasena) {
      return res.status(400).json({ error: 'Faltan campos obligatorios' });
    }

    // Verificar si el correo ya está registrado
    const existe = await Usuario.findOne({ where: { correo } });
    if (existe) {
      return res.status(400).json({ error: 'El correo ya está registrado' });
    }

    const nuevoUsuario = await Usuario.create({
      nombre,
      apellido,
      correo,
      pais,
      clinica,
      contrasena
    });

    res.status(201).json(nuevoUsuario);
  } catch (error) {
    res.status(400).json({ error: 'Error al crear usuario', detalles: error.message });
  }
});

// Actualizar nombre, apellido y correo
app.put('/usuarios/:id', async (req, res) => {
  try {
    const usuario = await Usuario.findByPk(req.params.id);
    if (!usuario) return res.status(404).json({ error: 'Usuario no encontrado' });

    const { nombre, apellido, correo, pais } = req.body;
    await usuario.update({ nombre, apellido, correo, pais });

    res.json({ mensaje: 'Perfil actualizado', usuario });
  } catch (error) {
    res.status(400).json({ error: 'Error al actualizar usuario', detalles: error.message });
  }
});

// Cambiar contraseña
app.put('/usuarios/:id/cambiar-contrasena', async (req, res) => {
  try {
    const { contrasenaActual, nuevaContrasena } = req.body;

    const usuario = await Usuario.findByPk(req.params.id);
    if (!usuario) return res.status(404).json({ error: 'Usuario no encontrado' });

    if (usuario.contrasena !== contrasenaActual) {
      return res.status(400).json({ error: 'La contraseña actual es incorrecta' });
    }

    await usuario.update({ contrasena: nuevaContrasena });

    res.json({ mensaje: 'Contraseña actualizada correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al cambiar la contraseña', detalles: error.message });
  }
});

// Eliminar usuario
app.delete('/usuarios/:id', async (req, res) => {
  try {
    const usuario = await Usuario.findByPk(req.params.id);
    if (!usuario) return res.status(404).json({ error: 'Usuario no encontrado' });

    await usuario.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar usuario' });
  }
});

// ---------------------- ORDENES ----------------------
app.get('/ordenes', async (req, res) => {
  try {
    const ordenes = await Orden.findAll();
    res.json(ordenes);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener órdenes' });
  }
});

app.get('/ordenes/:id', async (req, res) => {
  try {
    const ord = await Orden.findByPk(req.params.id);
    if (!ord) return res.status(404).json({ error: 'Orden no encontrada' });
    res.json(ord);
  } catch (error) {
    res.status(500).json({ error: 'Error al buscar orden' });
  }
});

app.post('/ordenes', async (req, res) => {
  try {
    const { usuarioId, total } = req.body;
    const nuevaOrden = await Orden.create({ usuarioId, total });
    res.status(201).json(nuevaOrden);
  } catch (error) {
    res.status(400).json({ error: 'Error al crear orden', detalles: error.message });
  }
});

app.put('/ordenes/:id', async (req, res) => {
  try {
    const ord = await Orden.findByPk(req.params.id);
    if (!ord) return res.status(404).json({ error: 'Orden no encontrada' });
    const { usuarioId, total } = req.body;
    await ord.update({ usuarioId, total });
    res.json({ mensaje: 'Orden actualizada', ord });
  } catch (error) {
    res.status(400).json({ error: 'Error al actualizar orden', detalles: error.message });
  }
});

app.delete('/ordenes/:id', async (req, res) => {
  try {
    const ord = await Orden.findByPk(req.params.id);
    if (!ord) return res.status(404).json({ error: 'Orden no encontrada' });
    await ord.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar orden' });
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
    const { nombre } = req.body;
    const nuevoMp = await MetodoPago.create({ nombre });
    res.status(201).json(nuevoMp);
  } catch (error) {
    res.status(400).json({ error: 'Error al crear método', detalles: error.message });
  }
});

app.put('/metodos-pago/:id', async (req, res) => {
  try {
    const mp = await MetodoPago.findByPk(req.params.id);
    if (!mp) return res.status(404).json({ error: 'Método no encontrado' });
    const { nombre } = req.body;
    await mp.update({ nombre });
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
  
  