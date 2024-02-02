import React, { CSSProperties } from 'react';
import ContactoComponent from './contacto';

const UnderConstructionMessage: React.FC = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>EM CONSTRUÇÃO</h1>
      <p style={styles.message}>
        Estamos trabalhando para criar um espaço acolhedor. Em breve, estaremos disponíveis para ajudar. Cadastre seu email para ser avisado sobre o lançamento do website.
      </p>
      <ContactoComponent />
    </div>
  );
};

interface Styles {
  container: CSSProperties;
  title: CSSProperties;
  message: CSSProperties;
}

const styles: Styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    textAlign: 'center',
  },
  title: {
    fontSize: '2em',
    marginBottom: '.5em',
    color: '#333',
    fontWeight: 'bold',
  },
  message: {
    fontSize: '1.2em',
    color: '#555',
    maxWidth: '600px',
  },
};

export default UnderConstructionMessage;