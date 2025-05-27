export const juegos = [
  { id: 1, nombre: 'Pokemon FireRed', presentacion: 'Cartucho GBA', descripcion: 'Aventura clásica en la región de Kanto.', categoria: 'RPG', stock: 5, precio: 60.0, imagen: '/pokemon-firered.jpg' },
  { id: 2, nombre: 'Mario Kart DS', presentacion: 'CD-ROM', descripcion: 'Juego de carreras con personajes de Mario.', categoria: 'Carreras', stock: 3, precio: 40.0, imagen: '/mario-kart-ds.jpg' },
  { id: 3, nombre: 'Half-Life', presentacion: 'Cartucho DS', descripcion: 'Disparos en primera persona.', categoria: 'Acción', stock: 10, precio: 23.0, imagen: '/half-life.jpg' },
  { id: 4, nombre: 'The Legend of Zelda', presentacion: 'Cartucho SNES', descripcion: 'Explora mazmorras y salva Hyrule.', categoria: 'Aventura', stock: 7, precio: 75.0, imagen: '/zelda.jpg' },
  { id: 5, nombre: 'FIFA 21', presentacion: 'Blu-ray', descripcion: 'El mejor fútbol en tu consola.', categoria: 'Deportes', stock: 12, precio: 55.0, imagen: '/fifa21.jpg' },
  { id: 6, nombre: 'Tetris', presentacion: 'Cartucho NES', descripcion: 'El clásico juego de rompecabezas.', categoria: 'Puzzle', stock: 8, precio: 20.0, imagen: '/tetris.jpg' },
  { id: 7, nombre: 'SimCity', presentacion: 'CD-ROM', descripcion: 'Construye y gestiona tu ciudad.', categoria: 'Simulación', stock: 6, precio: 30.0, imagen: '/simcity.jpg' },
  { id: 8, nombre: 'Age of Empires II', presentacion: 'CD-ROM', descripcion: 'Estrategia en tiempo real.', categoria: 'Estrategia', stock: 9, precio: 35.0, imagen: '/aoe2.jpg' },
  { id: 9, nombre: 'Super Mario Bros', presentacion: 'Cartucho NES', descripcion: 'Salta y corre en el Reino Champiñón.', categoria: 'Plataformas', stock: 15, precio: 28.0, imagen: '/super-mario.jpg' },
  { id: 10, nombre: 'Call of Duty', presentacion: 'Blu-ray', descripcion: 'Acción bélica moderna.', categoria: 'Shotter', stock: 11, precio: 65.0, imagen: '/cod.jpg' },
  { id: 11, nombre: 'Monkey Island', presentacion: 'CD-ROM', descripcion: 'Aventura gráfica de piratas.', categoria: 'Aventura gráfica', stock: 4, precio: 45.0, imagen: '/monkey-island.jpg' },
  { id: 12, nombre: 'Resident Evil', presentacion: 'Blu-ray', descripcion: 'Sobrevive al horror en Racoon City.', categoria: 'Survival Horror', stock: 5, precio: 50.0, imagen: '/resident-evil.jpg' },
  { id: 13, nombre: 'Among Us', presentacion: 'Digital', descripcion: 'Descubre al impostor.', categoria: 'Multijugador', stock: 20, precio: 15.0, imagen: '/among-us.jpg' },
  { id: 14, nombre: 'Hollow Knight', presentacion: 'Digital', descripcion: 'Aventura indie en Hallownest.', categoria: 'Indie', stock: 13, precio: 32.0, imagen: '/hollow-knight.jpg' },
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
  {
    id: 101,
    usuario: 'Juan Perez',
    fecha: '03/05/2024',
    total: 150.5,
    estado: 'Entregado',
    productos: [
      { id: 1, nombre: 'Producto A', categoria: 'Cat 1', cantidad: 2, precio: 30 },
      { id: 2, nombre: 'Producto B', categoria: 'Cat 2', cantidad: 1, precio: 90.5 },
    ],
  },
  {
    id: 102,
    usuario: 'Juan Perez',
    fecha: '19/01/2025',
    total: 99,
    estado: 'Por Entregar',
    productos: [
      { id: 3, nombre: 'Producto C', categoria: 'Cat 3', cantidad: 1, precio: 45 },
      { id: 4, nombre: 'Producto D', categoria: 'Cat 1', cantidad: 1, precio: 54 },
    ],
  },
  {
    id: 1236,
    usuario: 'Lucía Ramírez',
    fecha: '25/05/2025',
    total: 210,
    estado: 'Entregado',
    productos: [
      { id: 5, nombre: 'Producto E', categoria: 'Cat 2', cantidad: 3, precio: 50 },
      { id: 6, nombre: 'Producto F', categoria: 'Cat 3', cantidad: 1, precio: 60 },
    ],
  },
];


export const usuarios = [
  {
    id: 1,
    nombre: 'Juan Perez',
    correo: 'juanperez@gmail.com',
    fechaRegistro: '01/05/2024',
    estado: 'Activo',
    foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUcNdEFR29DXre9LTLKm6c4tVsc8hODLXlYg&s',
    ordenes: [
      { id: 101, fecha: '03/05/2024', total: 150.5 },
      { id: 102, fecha: '10/05/2024', total: 245.0 },
    ],
  },
  {
    id: 2,
    nombre: 'María Gonzales',
    correo: 'mariagonzales@gmail.com',
    fechaRegistro: '15/04/2024',
    estado: 'Activo',
    foto: 'https://randomuser.me/api/portraits/women/44.jpg',
    ordenes: [
      { id: 103, fecha: '16/04/2024', total: 99.99 },
      { id: 104, fecha: '22/04/2024', total: 180.0 },
    ],
  },
  {
    id: 3,
    nombre: 'Alejandro Ruiz',
    correo: 'alejandroruiz@gmail.com',
    fechaRegistro: '20/03/2024',
    estado: 'Inactivo',
    foto: 'https://randomuser.me/api/portraits/men/46.jpg',
    ordenes: [
      { id: 105, fecha: '21/03/2024', total: 75.0 },
    ],
  },
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
