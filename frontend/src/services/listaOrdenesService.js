const API_URL = import.meta.env.VITE_API_URL;

export const obtenerOrdenes = async () => {
  const res = await fetch(`${API_URL}/listaordenes`);
  if (!res.ok) throw new Error('Error al obtener órdenes');
  return await res.json();
};

// Obtener orden por ID (para detalle)
export async function obtenerOrdenPorId(id) {
  const res = await fetch(`${API_URL}/ordenes/${id}`);
  if (!res.ok) throw new Error('Error al obtener orden');
  return await res.json();
}
