import React from 'react';
import { Container } from './style';
import { ToastMessagesProps } from '../../hooks/ToastContext';
import Toast from './Toast';
import { useTransition } from 'react-spring';

interface ToastContainerProps {
  messages: ToastMessagesProps[];
}

const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {
  const messagesWithTransitions = useTransition(
    messages,
    message => message.id,
    {
      from: { right: '120%', opacity: 0 },
      enter: { right: '0%', opacity: 1 },
      leave: { right: '-120%', opacity: 0 }
    }
  );
  return (
    <Container>
      {messagesWithTransitions.map(({ item, key, props }) => (
        <Toast key={key} style={props} message={item}/>
      ))}
    </Container>
  );
};

export default ToastContainer;
