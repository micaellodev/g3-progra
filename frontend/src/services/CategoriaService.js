// src/services/CategoriaService.js

const api = import.meta.env.VITE_API_URL;

export async function getCategorias() {
  const res = await fetch(`${api}/api/categorias`);
  if (!res.ok) throw new Error('Error al obtener categorías en servicio');
  const data = await res.json();
  return data.categorias;    // <-- aquí devolvemos directamente el array
}

export async function postCategoria(categoria) {
  const res = await fetch(`${api}/api/categorias`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(categoria),
  });
  if (!res.ok) throw new Error('Error al crear categoría en servicio');
  return res.json();         // tu POST ya devuelve directamente el objeto creado
}

export async function deleteCategoria(id) {
  const res = await fetch(`${api}/api/categorias/${id}`, {
    method: 'DELETE',
  });
  if (!res.ok) throw new Error('Error al eliminar categoría en servicio');
  return res.json();         // devuelve { message, id }
}

export async function putCategoria(id, categoria) {
  const res = await fetch(`${api}/api/categorias/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(categoria),
  });
  if (!res.ok) throw new Error('Error al actualizar categoría en servicio');
  return res.json();         // devuelve el objeto actualizado
}

