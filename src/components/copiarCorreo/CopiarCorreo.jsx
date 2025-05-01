import { useState } from 'react';
import Gmail from '../icons/Gmail';

const CopiarCorreo = () => {
  const [copiado, setCopiado] = useState(false);
  const email = 'marco.cba2@gmail.com';

  const copiarEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopiado(true);
      setTimeout(() => setCopiado(false), 2000);
    } catch (error) {
      console.error('No se pudo copiar el correo:', error);
    }
  };

  return (
    <div
      className="contacto-card"
      onClick={copiarEmail}
      style={{ cursor: 'pointer' }}
    >
      <div className="icon-wrapper">
        <Gmail />
      </div>
      <h3>Correo</h3>
      <p>{copiado ? '¡Email Copiado!' : email}</p>
    </div>
  );
};

export default CopiarCorreo;
