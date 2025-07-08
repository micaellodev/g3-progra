import { Usuario } from './models/Usuario.js';
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