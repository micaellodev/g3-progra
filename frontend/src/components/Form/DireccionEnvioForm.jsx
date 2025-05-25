import React, { useState } from 'react';
import styles from '../../styles/Carrito.module.css';

const departamentosPeru = [
  "Amazonas", "Áncash", "Apurímac", "Arequipa", "Ayacucho", "Cajamarca",
  "Callao", "Cusco", "Huancavelica", "Huánuco", "Ica", "Junín", "La Libertad",
  "Lambayeque", "Lima", "Loreto", "Madre de Dios", "Moquegua", "Pasco",
  "Piura", "Puno", "San Martín", "Tacna", "Tumbes", "Ucayali"
];

const DireccionEnvioForm = ({ onSubmit }) => {
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
    onSubmit({
      nombre: form.nombre,
      direccion: form.direccion,
      telefono: form.telefono
    });
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
          />
        </div>
        <div className={styles['direccion-envio-col']}>
          <input
            type="text"
            name="apellido"
            value={form.apellido}
            onChange={handleChange}
            placeholder="Apellido"
          />
        </div>
      </div>
      <div className={styles['direccion-envio-row']}>
        <div className={styles['direccion-envio-col']}>
          <select
            name="departamento"
            value={form.departamento}
            onChange={handleChange}
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
          />
        </div>
        <div className={styles['direccion-envio-col']}>
          <input
            type="text"
            name="telefono"
            value={form.telefono}
            onChange={handleChange}
            placeholder="Teléfono"
          />
        </div>
      </div>
      <button type="submit" className={styles['submit-button']}>Enviar</button>
    </form>
  );
};

export default DireccionEnvioForm;