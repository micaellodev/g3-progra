import React from 'react';
import TablaBasica from './TablaBasica';

const OrdenesTabla = ({ ordenes }) => {
  return (
    <TablaBasica
      columnas={['#ID', 'Fecha', 'Total']}
      datos={ordenes}
      renderFila={(orden) => (
        <tr key={orden.id}>
          <td>{orden.id}</td>
          <td>{orden.fecha}</td>
          <td>S/{orden.total.toFixed(2)}</td>
        </tr>
      )}
    />
  );
};

export default OrdenesTabla;
