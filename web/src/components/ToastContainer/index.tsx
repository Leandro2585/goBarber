import React from 'react';
import { FiAlertCircle, FiX } from 'react-icons/fi';
import { Container, Toast } from './style';

const ToastContainer: React.FC = () => {
  return (
    <Container>
      <Toast hasDescription>
        <FiAlertCircle size={20}/>

        <div>
          <strong>ERRRROUU</strong>
          <p>Não foi possível completar sua ação de login</p>
        </div>
        <button type="button">
          <FiXCircle size={18}/>
        </button>
      </Toast>
    </Container>
  );
};

export default ToastContainer;
