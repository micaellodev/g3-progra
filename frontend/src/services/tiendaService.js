const API_URL = "http://localhost:3000";

// ----------- PRODUCTOS -----------
export const CrearProducto = async (producto) => {
    try {
        const response = await fetch(`${API_URL}/productos`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(producto),
        });
        if (!response.ok) throw new Error("Error al crear el producto");
        return await response.json();
    } catch (error) {
        console.error(error);
    }
};

export const ObtenerProductoPorId = async (id) => {
    try {
        const response = await fetch(`${API_URL}/productos/${id}`);
        if (!response.ok) throw new Error("Error al obtener el producto");
        return await response.json();
    } catch (error) {
        console.error(error);
    }
};

export const ActualizarProducto = async (id, producto) => {
    try {
        const response = await fetch(`${API_URL}/productos/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(producto),
        });
        if (!response.ok) throw new Error("Error al actualizar el producto");
        return await response.json();
    } catch (error) {
        console.error(error);
    }
};

export const BorrarProducto = async (id) => {
    try {
        const response = await fetch(`${API_URL}/productos/${id}`, {
            method: "DELETE",
        });
        if (!response.ok) throw new Error("Error al borrar el producto");
    } catch (error) {
        console.error(error);
    }
};

// ----------- USUARIOS -----------
export const CrearUsuario = async (usuario) => {
    try {
        const response = await fetch(`${API_URL}/usuarios`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(usuario),
        });
        if (!response.ok) throw new Error("Error al crear el usuario");
        return await response.json();
    } catch (error) {
        console.error(error);
    }
};

export const ObtenerUsuarioPorId = async (id) => {
    try {
        const response = await fetch(`${API_URL}/usuarios/${id}`);
        if (!response.ok) throw new Error("Error al obtener el usuario");
        return await response.json();
    } catch (error) {
        console.error(error);
    }
};

export const ActualizarUsuario = async (id, usuario) => {
    try {
        const response = await fetch(`${API_URL}/usuarios/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(usuario),
        });
        if (!response.ok) throw new Error("Error al actualizar el usuario");
        return await response.json();
    } catch (error) {
        console.error(error);
    }
};

export const BorrarUsuario = async (id) => {
    try {
        const response = await fetch(`${API_URL}/usuarios/${id}`, {
            method: "DELETE",
        });
        if (!response.ok) throw new Error("Error al borrar el usuario");
    } catch (error) {
        console.error(error);
    }
};

// ----------- CATEGORÍAS -----------
export const ObtenerCategorias = async () => {
    try {
        const response = await fetch(`${API_URL}/categorias`);
        if (!response.ok) throw new Error("Error al obtener categorías");
        return await response.json();
    } catch (error) {
        console.error(error);
    }
};

export const CrearCategoria = async (categoria) => {
    try {
        const response = await fetch(`${API_URL}/categorias`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(categoria),
        });
        if (!response.ok) throw new Error("Error al crear categoría");
        return await response.json();
    } catch (error) {
        console.error(error);
    }
};

export const ActualizarCategoria = async (id, categoria) => {
    try {
        const response = await fetch(`${API_URL}/categorias/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(categoria),
        });
        if (!response.ok) throw new Error("Error al actualizar categoría");
        return await response.json();
    } catch (error) {
        console.error(error);
    }
};

export const BorrarCategoria = async (id) => {
    try {
        const response = await fetch(`${API_URL}/categorias/${id}`, {
            method: "DELETE",
        });
        if (!response.ok) throw new Error("Error al borrar categoría");
    } catch (error) {
        console.error(error);
    }
};

// ----------- LOGIN (si el backend lo permite) -----------
export const LoginUsuario = async (credenciales) => {
    try {
        const response = await fetch(`${API_URL}/usuarios/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(credenciales),
        });
        if (!response.ok) throw new Error("Error al iniciar sesión");
        return await response.json();
    } catch (error) {
        console.error(error);
    }
};

// ----------- CARRITO -----------
export const ObtenerCarrito = async (usuarioId) => {
    try {
        const response = await fetch(`${API_URL}/carrito/${usuarioId}`);
        if (!response.ok) throw new Error("Error al obtener el carrito");
        return await response.json();
    } catch (error) {
        console.error(error);
    }
};

export const AgregarProductoAlCarrito = async (usuarioId, productoId) => {
    try {
        const response = await fetch(`${API_URL}/carrito/${usuarioId}/productos`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ productoId }),
        });
        if (!response.ok) throw new Error("Error al agregar producto");
        return await response.json();
    } catch (error) {
        console.error(error);
    }
};

export const ActualizarProductoEnCarrito = async (usuarioId, productoId, cantidad) => {
    try {
        const response = await fetch(`${API_URL}/carrito/${usuarioId}/productos/${productoId}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ cantidad }),
        });
        if (!response.ok) throw new Error("Error al actualizar carrito");
        return await response.json();
    } catch (error) {
        console.error(error);
    }
};

export const EliminarProductoDelCarrito = async (usuarioId, productoId) => {
    try {
        const response = await fetch(`${API_URL}/carrito/${usuarioId}/productos/${productoId}`, {
            method: "DELETE",
        });
        if (!response.ok) throw new Error("Error al eliminar del carrito");
    } catch (error) {
        console.error(error);
    }
};

export const LimpiarCarrito = async (usuarioId) => {
    try {
        const response = await fetch(`${API_URL}/carrito/${usuarioId}`, {
            method: "DELETE",
        });
        if (!response.ok) throw new Error("Error al limpiar carrito");
    } catch (error) {
        console.error(error);
    }
};
  