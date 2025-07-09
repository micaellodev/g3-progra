// apuntamos al endpoint donde corren tus rutas de Express:
const API_URL = "http://localhost:3000/categorias";

export async function getCategorias() {
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error(res.statusText);
  return res.json();
}

export async function postCategoria(categoria) {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(categoria),
  });
  if (!res.ok) throw new Error(res.statusText);
  return res.json();
}

export async function deleteCategoria(id) {
  const res = await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
  if (!res.ok) throw new Error(res.statusText);
  // no devolvemos body
}

export async function putCategoria(id, categoria) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(categoria),
  });
  if (!res.ok) throw new Error(res.statusText);
  return res.json();  // aquí recibes el objeto actualizado
}
