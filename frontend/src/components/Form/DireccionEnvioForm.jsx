import React, { useState, useContext } from 'react';
import { DireccionContext } from '../../hooks/DireccionContext';
import styles from '../../styles/Carrito.module.css';


const departamentosPeru = [
  "Amazonas", "Áncash", "Apurímac", "Arequipa", "Ayacucho", "Cajamarca",
  "Callao", "Cusco", "Huancavelica", "Huánuco", "Ica", "Junín", "La Libertad",
  "Lambayeque", "Lima", "Loreto", "Madre de Dios", "Moquegua", "Pasco",
  "Piura", "Puno", "San Martín", "Tacna", "Tumbes", "Ucayali"
];

const DireccionEnvioForm = ({ onSubmitSuccess }) => {
  const { setDireccionEnvio } = useContext(DireccionContext);
  const [form, setForm] = useState({
    nombre: '',
    apellido: '',
    departamento: '',
    ciudad: '',
    direccion: '',
    codigoPostal: '',
    telefono: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setDireccionEnvio(form);
    if (onSubmitSuccess) {
      onSubmitSuccess(); // Llama a la función para mostrar el botón de método de pago
    }
  };

  return (
    <form className={styles['direccion-envio-form']} onSubmit={handleSubmit}>
      <h2>Dirección de envío</h2>
      <div className={styles['direccion-envio-row']}>
        <div className={styles['direccion-envio-col']}>
          <input
            type="text"
            name="nombre"
            value={form.nombre}
            onChange={handleChange}
            placeholder="Nombre"
            required
          />
        </div>
        <div className={styles['direccion-envio-col']}>
          <input
            type="text"
            name="apellido"
            value={form.apellido}
            onChange={handleChange}
            placeholder="Apellido"
            required
          />
        </div>
      </div>
      <div className={styles['direccion-envio-row']}>
        <div className={styles['direccion-envio-col']}>
          <select
            name="departamento"
            value={form.departamento}
            onChange={handleChange}
            required
          >
            <option value="" disabled>Departamento</option>
            {departamentosPeru.map(dep => (
              <option key={dep} value={dep}>{dep}</option>
            ))}
          </select>
        </div>
        <div className={styles['direccion-envio-col']}>
          <input
            type="text"
            name="ciudad"
            value={form.ciudad}
            onChange={handleChange}
            placeholder="Ciudad"
            required
          />
        </div>
      </div>
      <div className={styles['direccion-envio-row']}>
        <div className={`${styles['direccion-envio-col']} ${styles['direccion-envio-col-full']}`}>
          <input
            type="text"
            name="direccion"
            value={form.direccion}
            onChange={handleChange}
            placeholder="Dirección"
            required
          />
        </div>
      </div>
      <div className={styles['direccion-envio-row']}>
        <div className={styles['direccion-envio-col']}>
          <input
            type="text"
            name="codigoPostal"
            value={form.codigoPostal}
            onChange={handleChange}
            placeholder="Código postal"
            required
          />
        </div>
        <div className={styles['direccion-envio-col']}>
          <input
            type="text"
            name="telefono"
            value={form.telefono}
            onChange={handleChange}
            placeholder="Teléfono"
            required
          />
        </div>
      </div>
      <button type="submit" className={styles['submit-button']}>Guardar</button>
    </form>
  );
};

export default DireccionEnvioForm;