import TopBar from '../../components/TopBar/TopBar';

export const Inicio = ({ handleSearch, busqueda, setBusqueda }) => {
  return (
    <>
      <TopBar
        handleSearch={handleSearch}
        busqueda={busqueda}
        setBusqueda={setBusqueda}
      />
      <h1>Inicio</h1>
    </>
  );
};

export default Inicio;
