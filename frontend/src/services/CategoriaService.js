// src/services/CategoriaService.js

// Dejamos la constante apuntando directamente al recurso de categorías:
const API_URL = "http://localhost:3000/categorias";

export async function getCategorias() {
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error('Error al obtener categorías en servicio');
  return res.json();        
}

export async function postCategoria(categoria) {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(categoria),
  });
  if (!res.ok) throw new Error('Error al crear categoría en servicio');
  return res.json();       
}

export async function deleteCategoria(id) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });
  if (!res.ok) throw new Error('Error al eliminar categoría en servicio');
  // 
}

export async function putCategoria(id, categoria) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(categoria),
  });
  if (!res.ok) throw new Error('Error al actualizar categoría en servicio');
  const payload = await res.json();  
  return payload.cat;                // devolvemos sólo el objeto actualizado
}
