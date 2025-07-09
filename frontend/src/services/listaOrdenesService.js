const API_URL = import.meta.env.VITE_API_URL;

// Obtener todas las órdenes
export async function obtenerOrdenes() {
  const res = await fetch(`${API_URL}/ordenes`);
  if (!res.ok) throw new Error('Error al obtener órdenes');
  return await res.json();
}

// Obtener orden por ID (para detalle)
export async function obtenerOrdenPorId(id) {
  const res = await fetch(`${API_URL}/ordenes/${id}`);
  if (!res.ok) throw new Error('Error al obtener orden');
  return await res.json();
}
