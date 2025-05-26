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
    presentacion: 'CD-ROM',
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
    presentacion: 'CD-ROM',
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

export const UserDash = {
  nombre: 'John Doe',
  correo: 'john.doe@example.com',
  fechaRegistro: '2023-01-01',
  estado: 'Activo',
  foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUcNdEFR29DXre9LTLKm6c4tVsc8hODLXlYg&s',
  ordenes: [
    { id: 1, fecha: '2023-01-02', total: 100 },
    { id: 2, fecha: '2023-01-03', total: 200 },
  ]
};

export const ordenes = [
  { id: '#1234', usuario: 'Alejandro Ruiz', fecha: '20/01/2025', total: 199, estado: 'Entregado' },
  { id: '#1235', usuario: 'Juan Perez', fecha: '19/01/2025', total: 99, estado: 'Pendiente' },
];

export const usuarios = [
  { id: 1, nombre: 'Juan Perez', fechaRegistro: '2024/05/01', estado: 'Activo' },
  { id: 2, nombre: 'María Gonzales', fechaRegistro: '2024/04/15', estado: 'Activo' },
  { id: 3, nombre: 'Alejandro Ruiz', fechaRegistro: '2024/03/20', estado: 'Inactivo' },
];


export const categorias = [
  { id: 1, nombre: 'RPG', descripcion: 'Juegos de rol' },
  { id: 2, nombre: 'Acción', descripcion: 'Juegos de acción' },
  { id: 3, nombre: 'Carreras', descripcion: 'Juegos de carreras' },
  { id: 4, nombre: 'Aventura', descripcion: 'Juegos de aventura' },
  { id: 5, nombre: 'Deportes', descripcion: 'Juegos deportivos' },
  { id: 6, nombre: 'Puzzle', descripcion: 'Juegos de rompecabezas' },
  { id: 7, nombre: 'Simulación', descripcion: 'Juegos de simulación' },
  { id: 8, nombre: 'Estrategia', descripcion: 'Juegos de estrategia' },
  { id: 9, nombre: 'Plataformas', descripcion: 'Juegos de plataformas' },
  { id: 10, nombre: 'Shotter', descripcion: 'Juegos de disparos' },
  { id: 11, nombre: 'Aventura gráfica', descripcion: 'Juegos de aventura gráfica' },
  { id: 12, nombre: 'Survival Horror', descripcion: 'Juegos de terror y supervivencia' },
  { id: 13, nombre: 'Multijugador', descripcion: 'Juegos multijugador' },
  { id: 14, nombre: 'Indie', descripcion: 'Juegos independientes' },
];
