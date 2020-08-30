import React, { createContext, useCallback, useContext, useState } from 'react';
import { uuid } from 'uuidv4';
import ToastContainer from '../components/ToastContainer';

interface ToastContextData {
  addToast(message: Omit<ToastMessagesProps, 'id'>): void;
  removeToast(id: string): void;
}

export interface ToastMessagesProps {
  id: string;
  type?: 'success' | 'error' | 'info';
  title: string;
  description?: string;
}

const ToastContext = createContext<ToastContextData>({} as ToastContextData);

const ToastProvider: React.FC = ({ children }) => {
  const [messages, setMessages] = useState<ToastMessagesProps[]>([]);
  const addToast = useCallback(({ type, title, description }: Omit<ToastMessagesProps, 'id'>) => {

    const id = uuid();
    const toast = {
      id,
      type,
      title,
      description
    };

    setMessages((oldMessages) => [...oldMessages, toast]);

  }, []);
  const removeToast = useCallback((id: string) => {

    setMessages((state) => state.filter(message => message.id !== id));
  }, []);
  return(
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <ToastContainer messages={}/>
    </ToastContext.Provider>
  );
}

function useToast(): ToastContextData {
  const context = useContext(ToastContext);
  if(!context){
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
}

export { ToastProvider, useToast };
