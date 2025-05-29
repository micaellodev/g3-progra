import { useLocation, Link, useNavigate } from 'react-router-dom';
import { juegos } from '../../constantes/Consts'; 
import '../../pages/guest/resultadosEstilos.css';
import TopBar from '../../components/TopBar/TopBar';


const Resultados = () => {
  const location = useLocation();
  const navigate = useNavigate(); 
  const queryParams = new URLSearchParams(location.search);
  const busqueda = queryParams.get('busqueda'); 

  // Filtrar juegos según el parámetro de búsqueda
  const productosFiltrados = juegos.filter(juego => 
    juego.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );


  const volverAlInicio = () => {
    navigate('/'); 
  };

  return (
    <div>
      <TopBar />

      <div className="resultados-container">
        <h1 className="resultados-title">Resultados de búsqueda para: "{busqueda}"</h1>
        
        {productosFiltrados.length > 0 ? (
          <div className="resultados-list">
            {productosFiltrados.map((producto) => (
              <div key={producto.id} className="resultado-item">
                <img src={producto.imagen} alt={producto.nombre} className="resultado-imagen" />
                <div className="resultado-info">
                  <h3 className="resultado-titulo">{producto.nombre}</h3>
                  <p className="resultado-descripcion">{producto.descripcion}</p>
                  <p className="resultado-precio"><strong>S/. {producto.precio}</strong></p>
                  <Link to={`/producto/${producto.id}`} className="resultado-enlace-detalle">Ver detalle</Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="no-resultados">No se encontraron resultados para tu búsqueda.</p>
        )}


        <button onClick={volverAlInicio} className="volver-inicio-btn">
          Volver al Inicio
        </button>
      </div>
    </div>
  );
};

export default Resultados;
