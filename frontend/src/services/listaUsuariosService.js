const API_URL = import.meta.env.VITE_API_URL;

// Obtener todos los usuarios
export async function obtenerUsuarios() {
  const res = await fetch(`${API_URL}/listausuarios`);
  if (!res.ok) throw new Error('Error al obtener usuarios');
  return await res.json();
}

// Obtener usuario por ID (para detalle)
export async function obtenerUsuarioPorId(id) {
  const res = await fetch(`${API_URL}/listausuarios/${id}`);
  if (!res.ok) throw new Error('Error al obtener usuario');
  return await res.json();
}
