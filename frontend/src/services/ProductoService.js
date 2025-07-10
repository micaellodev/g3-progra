// URL del backend desde variables de entorno
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

// Obtener todos los productos
export async function fetchProductos(searchTerm = '') {
  try {
    const url = searchTerm 
      ? `${API_URL}/api/productos?q=${encodeURIComponent(searchTerm)}`
      : `${API_URL}/api/productos`;
      
    const response = await fetch(url, {
      credentials: 'include'
    });
    
    if (!response.ok) {
      const error = await response.json().catch(() => ({}));
      throw new Error(error.message || `Error ${response.status}: ${response.statusText}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error al obtener productos:', error);
    if (error.name === 'TypeError' && error.message.includes('fetch')) {
      throw new Error('No se puede conectar al servidor. Verifica que el backend esté ejecutándose.');
    }
    throw error;
  }
}

// Crear un nuevo producto
export async function createProducto(productoData) {
  try {
    const response = await fetch(`${API_URL}/api/productos`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nombre: productoData.nombre,
        presentacion: productoData.presentacion,
        descripcion: productoData.descripcion,
        stock: Number(productoData.stock),
        precio: Number(productoData.precio),
        imagen: productoData.imagen,
        id_categoria: Number(productoData.id_categoria)
      }),
      credentials: 'include'
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({}));
      throw new Error(error.message || `Error ${response.status}: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error al crear producto:', error);
    throw error;
  }
}

// Actualizar un producto existente
export async function updateProducto(id, productoData) {
  try {
    const response = await fetch(`${API_URL}/api/productos/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(productoData),
      credentials: 'include'
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({}));
      throw new Error(error.message || `Error ${response.status}: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error al actualizar producto:', error);
    throw error;
  }
}

// Eliminar un producto
export async function deleteProducto(id) {
  try {
    const response = await fetch(`${API_URL}/api/productos/${id}`, {
      method: 'DELETE',
      credentials: 'include'
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({}));
      throw new Error(error.message || `Error ${response.status}: ${response.statusText}`);
    }
    
    return true;
  } catch (error) {
    console.error('Error al eliminar producto:', error);
    throw error;
  }
}

// Obtener todas las categorías
export async function fetchCategorias() {
  try {
    const response = await fetch(`${API_URL}/api/categorias`, {
      credentials: 'include'
    });
    
    if (!response.ok) {
      const error = await response.json().catch(() => ({}));
      throw new Error(error.message || `Error ${response.status}: ${response.statusText}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error al obtener categorías:', error);
    throw error;
  }
}
