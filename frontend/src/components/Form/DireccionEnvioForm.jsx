import React from 'react';
import styles from '../../styles/Carrito.module.css';

const departamentosPeru = [
  "Amazonas", "Áncash", "Apurímac", "Arequipa", "Ayacucho", "Cajamarca",
  "Callao", "Cusco", "Huancavelica", "Huánuco", "Ica", "Junín", "La Libertad",
  "Lambayeque", "Lima", "Loreto", "Madre de Dios", "Moquegua", "Pasco",
  "Piura", "Puno", "San Martín", "Tacna", "Tumbes", "Ucayali"
];

const DireccionEnvioForm = ({ form, onChange }) => (
  <form className={styles['direccion-envio-form']}>
    <h2>Dirección de envío</h2>
    <div className={styles['direccion-envio-row']}>
      <div className={styles['direccion-envio-col']}>
        <input
          type="text"
          name="nombre"
          value={form.nombre}
          onChange={onChange}
          placeholder="Nombre"
        />
      </div>
      <div className={styles['direccion-envio-col']}>
        <input
          type="text"
          name="apellido"
          value={form.apellido}
          onChange={onChange}
          placeholder="Apellido"
        />
      </div>
    </div>
    <div className={styles['direccion-envio-row']}>
      <div className={styles['direccion-envio-col']}>
        <select
          name="departamento"
          value={form.departamento}
          onChange={onChange}
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
          onChange={onChange}
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
          onChange={onChange}
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
          onChange={onChange}
          placeholder="Código postal"
        />
      </div>
      <div className={styles['direccion-envio-col']}>
        <input
          type="text"
          name="telefono"
          value={form.telefono}
          onChange={onChange}
          placeholder="Teléfono"
        />
      </div>
    </div>
  </form>
);

export default DireccionEnvioForm;