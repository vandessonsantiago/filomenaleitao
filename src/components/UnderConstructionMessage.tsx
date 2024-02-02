import React, { CSSProperties } from 'react';

const UnderConstructionMessage: React.FC = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Site em Construção</h1>
      <p style={styles.message}>
        Estamos trabalhando para criar um espaço acolhedor. Em breve, estaremos disponíveis para ajudar. Enquanto isso, sinta-se à vontade para entrar em contato conosco pelo telefone +351 916 445 826.
      </p>
      <p></p>
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
    marginBottom: '1em',
    color: '#333',
  },
  message: {
    fontSize: '1.2em',
    color: '#555',
    maxWidth: '600px',
  },
};

export default UnderConstructionMessage;