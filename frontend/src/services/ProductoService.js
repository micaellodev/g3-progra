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

export async function createProducto(productoData) {
  try {
    const response = await fetch(`${api}/productos`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nombre: productoData.nombre,
        presentacion: productoData.presentacion,
        descripcion: productoData.descripcion,
        stock: productoData.stock,
        precio: productoData.precio || 0,
        imagen: productoData.imagen || null
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Error al crear producto');
    }

    return await response.json();
  } catch (error) {
    console.error('createProducto error:', error);
    throw error;
  }
}

export async function updateProducto(id, productoData) {
  try {
    const response = await fetch(`${api}/productos/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(productoData),
    });

    if (!response.ok) throw new Error('Error al actualizar producto');
    return await response.json();
  } catch (error) {
    console.error('updateProducto error:', error);
    throw error;
  }
}

export async function deleteProducto(id) {
  try {
    const response = await fetch(`${api}/productos/${id}`, {
      method: 'DELETE',
    });

    if (!response.ok) throw new Error('Error al eliminar producto');
    return await response.json();
  } catch (error) {
    console.error('deleteProducto error:', error);
    throw error;
  }
}
