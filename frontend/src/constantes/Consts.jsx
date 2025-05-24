// consts.jsx

export const juegos = [
  {
    id: 1,
    nombre: 'Pokemon FireRed',
    presentacion: 'Cartucho GBA',
    descripcion: 'Aventura clásica en la región de Kanto.',
    categoria: 'RPG',
    stock: 5,
    precio: 60.0,
    imagen: '/pokemon-firered.jpg',
  },

  {
    id: 2,
    nombre: 'Mario Kart DS',
    presentacion: 'Cartucho DS',
    descripcion: 'Juego de carreras con personajes de Mario.',
    categoria: 'Carreras',
    stock: 3,
    precio: 40.0,
    imagen: '/mario-kart-ds.jpg',
  },

  {
    id: 3,
    nombre: 'Half-Life',
    presentacion: 'Cartucho DS',
    descripcion: 'Disparos en primera persona.',
    categoria: 'Acción',
    stock: 0,
    precio: 23.0,
    imagen: '/half-life.jpg',
  },
];

export const usuarioP = {
  username: 'usuario123',
  email: 'usuario@ejemplo.com',
  firstname: 'Juan',
  lastname: 'Pérez',
  country: 'Perú',
};

export const carritoInicial = [
  {
    id: 1,
    nombre: 'Pokemon FireRed',
    presentacion: 'Cartucho GBA',
    descripcion: 'Aventura clásica en la región de Kanto.',
    categoria: 'RPG',
    stock: 5,
    precio: 60.0,
    imagen: '/pokemon-firered.jpg',
  },
  
  {
    id: 3,
    nombre: 'Half-Life',
    presentacion: 'Cartucho DS',
    descripcion: 'Disparos en primera persona.',
    categoria: 'Acción',
    stock: 0,
    precio: 23.0,
    imagen: '/half-life.jpg',
  }
]

export const User = {
  email: '123@demo.com',
  password: '123',
  username: 'gamer_pro',
  firstname: 'Carlos',
  lastname: 'Rodriguez',
  country: 'México',
};

export default User;