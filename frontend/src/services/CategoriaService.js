const API_URL = import.meta.env.VITE_API_URL;

export async function getCategorias() {
  const res = await fetch(`${API_URL}/categorias`);
  if (!res.ok) {
    throw new Error(`Error ${res.status}: ${res.statusText}`);
  }
  return res.json();
}


export async function postCategoria(categoria) {
  const res = await fetch(`${API_URL}/categorias`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(categoria),
  });
  if (!res.ok) {
    throw new Error(`Error ${res.status}: ${res.statusText}`);
  }
  return res.json();
}

export async function deleteCategoria(id) {
  const res = await fetch(`${API_URL}/categorias/${id}`, {
    method: 'DELETE'
  });
  if (!res.ok) {
    throw new Error(`Error ${res.status}: ${res.statusText}`);
  }
  // no devolvemos body, solo confirmamos que fue exitoso
}

export async function putCategoria(id, categoria) {
  const res = await fetch(`${API_URL}/categorias/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(categoria),
  });
  if (!res.ok) {
    throw new Error(`Error ${res.status}: ${res.statusText}`);
  }
  return res.json();
}
