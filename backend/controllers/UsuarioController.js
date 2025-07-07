
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