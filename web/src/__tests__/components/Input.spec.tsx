import React from 'react'; 
import { render, wait, fireEvent } from '@testing-library/react';
import Input from '../../components/Input';

jest.mock('@unform/core', () => {

  return {
    useField() {
      return {
        fieldName: 'email',
        defaultValue: '',
        error: '',
        registerField: jest.fn()
      }
    }
  }
});

describe('Input component', () => {
  it('should be able to render an input', async () => {
    const { getByPlaceholderText } = render(
      <Input name="email" placeholder="E-mail"/>
    );
    
    expect(getByPlaceholderText("E-mail")).toBeTruthy();
  });

  it('should render highlight on input focus', () => {
    const { getByPlaceholderText, getByTestId } = render(
      <Input name="email" placeholder="E-mail"/>
    );

    const inputElement = getByPlaceholderText('E-mail');
    const containerElement = getByTestId('input-container');

    fireEvent.focus(inputElement);

    await wait(() => {
      expect(containerElement).toHaveStyle('border-color: #ff9000');
      expect(containerElement).toHaveStyle('color: #ff9000');
    });

    fireEvent.blur(inputElement);

    await wait(() => {
      expect(containerElement).not.toHaveStyle('border-color: #ff9000');
      expect(containerElement).not.toHaveStyle('color: #ff9000');
    });
  });

  it('should keep input border highlight when input filled', async () => {
    const { getByPlaceholderText, getByTestId } = render(
      <Input name="email" placeholder="E-mail"/>
    );

    const inputElement = getByPlaceholderText('E-mail');
    const containerElement = getByTestId('input-container');

    fireEvent.type(inputElement, {
      target: { value: 'johndoe@example.com.br' }
    });

    fireEvent.blur(inputElement);

    await wait(() => {
      expect(containerElement).not.toHaveStyle('color: #ff9000');
    });
  });
});