const API_URL = "http://localhost:3000/usuarios";



export async function obtenerUsuarios() {
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error('Error al obtener usuarios');
  return res.json();
}

export async function obtenerUsuarioPorId(id) {
  const res = await fetch(`${API_URL}/${id}`);
  if (!res.ok) throw new Error('Usuario no encontrado');
  return res.json();
}

export async function crearUsuario(datos) {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(datos),
  });
  if (!res.ok) throw new Error('Error al crear usuario');
  return res.json();
}

export async function actualizarUsuario(id, datos) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(datos),
  });
  if (!res.ok) throw new Error('Error al actualizar usuario');
  return res.json();
}

export async function cambiarContrasena(id, datos) {
  const res = await fetch(`${API_URL}/${id}/cambiar-contrasena`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(datos),
  });
  if (!res.ok) throw new Error('Error al cambiar la contraseña');
  return res.json();
}

export async function eliminarUsuario(id) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });
  if (!res.ok) throw new Error('Error al eliminar usuario');
}