
import User from '../models/Usuario.js';
import Order from '../models/Orden.js';
//obtener datos del usuario
app.get('/usuarios/:id', async (req, res) => {
  try {
    const usr = await Usuario.findByPk(req.params.id);
    if (!usr) return res.status(404).json({ error: 'Usuario no encontrado' });
    res.json(usr);
  } catch (error) {
    res.status(500).json({ error: 'Error al buscar usuario' });
  }
});

//crear usuario
app.post('/usuarios', async (req, res) => {
  try {
    const { nombre, email, password } = req.body;
    const nuevoUsuario = await Usuario.create({ nombre, email, password });
    res.status(201).json(nuevoUsuario);
  } catch (error) {
    res.status(400).json({ error: 'Error al crear usuario', detalles: error.message });
  }
});

//editar usuario
app.put('/usuarios/:id', async (req, res) => {
  try {
    const usr = await Usuario.findByPk(req.params.id);
    if (!usr) return res.status(404).json({ error: 'Usuario no encontrado' });
    const { nombre, email, password } = req.body;
    await usr.update({ nombre, email, password });
    res.json({ mensaje: 'Usuario actualizado', usr });
  } catch (error) {
    res.status(400).json({ error: 'Error al actualizar usuario', detalles: error.message });
  }
});

//borrar usuario
app.delete('/usuarios/:id', async (req, res) => {
  try {
    const usr = await Usuario.findByPk(req.params.id);
    if (!usr) return res.status(404).json({ error: 'Usuario no encontrado' });
    await usr.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar usuario' });
  }
});

app.put('/usuarios/:id/cambiar-password', async (req, res) => {
  try {
    const { passwordActual, nuevaPassword } = req.body;

    // Buscar al usuario
    const usuario = await Usuario.findByPk(req.params.id);
    if (!usuario) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

   
    if (usuario.password !== passwordActual) {
      return res.status(400).json({ error: 'La contraseña actual no es correcta' });
    }

   
    usuario.password = nuevaPassword;
    await usuario.save();

    res.json({ mensaje: 'Contraseña actualizada correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al cambiar la contraseña', detalles: error.message });
  }
});


export const getUsers = async (req, res) => {
  try {
    const users = await User.find().select('-password'); // evita enviar contraseñas
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener usuarios', error });
  }
};

export const getUserDetail = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select('-password');
    if (!user) return res.status(404).json({ message: 'Usuario no encontrado' });

    const orders = await Order.find({ user: user._id });
    res.status(200).json({ user, orders });
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener detalle del usuario', error });
  }
};

export const toggleUserStatus = async (req, res) => {
  try {
    const { status } = req.body; // se espera 'activo' o 'inactivo'
    const user = await User.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    ).select('-password');

    if (!user) return res.status(404).json({ message: 'Usuario no encontrado' });
    res.status(200).json({ message: 'Estado actualizado', user });
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar el estado del usuario', error });
  }
};