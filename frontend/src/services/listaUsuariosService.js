// listaUsuariosService.js

const API_URL = import.meta.env.VITE_API_URL;

// Obtener todos los usuarios
export async function obtenerUsuarios() {
  const res = await fetch(`${API_URL}/listausuarios`);
  if (!res.ok) throw new Error('Error al obtener usuarios');
  return await res.json();
}

// Obtener usuario por ID usando su id_usuario
export async function obtenerUsuarioPorId(id_usuario) {
  const res = await fetch(`${API_URL}/listausuarios/${id_usuario}`);
  if (!res.ok) throw new Error('Error al obtener usuario');
  return await res.json();
}
