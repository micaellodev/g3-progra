const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

// Obtener todas las categorías
export async function getCategorias() {
  const res = await fetch(`${API_URL}/api/categorias`);
  if (!res.ok) {
    throw new Error(`Error ${res.status}: ${res.statusText}`);
  }
  return res.json();
}

// Crear una nueva categoría
export async function postCategoria(categoria) {
  const res = await fetch(`${API_URL}/api/categorias`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(categoria),
  });
  if (!res.ok) {
    const error = await res.json().catch(() => ({}));
    throw new Error(error.message || `Error ${res.status}: ${res.statusText}`);
  }
  return res.json();
}

// Eliminar una categoría
export async function deleteCategoria(id) {
  const res = await fetch(`${API_URL}/api/categorias/${id}`, {
    method: 'DELETE',
    credentials: 'include'
  });
  if (!res.ok) {
    const error = await res.json().catch(() => ({}));
    throw new Error(error.message || `Error ${res.status}: ${res.statusText}`);
  }
  return true;
}

// Actualizar una categoría
export async function putCategoria(id, categoria) {
  const res = await fetch(`${API_URL}/api/categorias/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(categoria),
    credentials: 'include'
  });
  if (!res.ok) {
    const error = await res.json().catch(() => ({}));
    throw new Error(error.message || `Error ${res.status}: ${res.statusText}`);
  }
  return res.json();
}

// Obtener una categoría por ID
export async function getCategoriaById(id) {
  const res = await fetch(`${API_URL}/api/categorias/${id}`);
  if (!res.ok) {
    throw new Error(`Error ${res.status}: ${res.statusText}`);
  }
  return res.json();
}
