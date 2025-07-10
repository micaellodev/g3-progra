const api = import.meta.env.VITE_API_URL;

// Obtener todos los usuarios
export async function obtenerUsuarios() {
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error('Error al obtener usuarios');
  return res.json();
}

// Obtener usuario por ID
export async function obtenerUsuarioPorId(id) {
  const res = await fetch(`${API_URL}/${id}`);
  if (!res.ok) throw new Error('Usuario no encontrado');
  return res.json();
}

// Crear un nuevo usuario
export async function crearUsuario(datos) {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(datos),
  });
  
  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.error || 'Error al crear usuario');
  }
  
  return res.json();
}

// Iniciar sesión
export async function loginUsuario({ correo, contrasena }) {
  const res = await fetch(`${API_URL}/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ correo, contrasena }),
  });
  
  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.error || 'Error en el login');
  }
  
  return res.json();
}

// Actualizar datos de perfil
export async function actualizarUsuario(id, datos) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(datos),
  });
  
  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.error || 'Error al actualizar usuario');
  }
  
  return res.json();
}

// Cambiar contraseña
export async function cambiarContrasena(id, datos) {
  const res = await fetch(`${API_URL}/${id}/cambiar-contrasena`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(datos),
  });
  
  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.error || 'Error al cambiar la contraseña');
  }
  
  return res.json();
}

// Eliminar usuario
export async function eliminarUsuario(id) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });
  
  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.error || 'Error al eliminar usuario');
  }
}