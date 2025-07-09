const api = import.meta.env.VITE_API_URL;

export async function fetchProductos() {
  try {
    const response = await fetch(`${api}/productos`);
    if (!response.ok) throw new Error('Error al obtener productos');
    return await response.json();
  } catch (error) {
    console.error('fetchProductos error:', error);
    throw error;
  }
}
