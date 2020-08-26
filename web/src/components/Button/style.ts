import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: #ff9000;
  color: #312e38;
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  width: 100%;
  height: 56px;
  font-weight: bold;
  margin-top: 10px;
  transition: background-color 0.2s;
  &:hover {
    background: ${shade(0.2,'#ff9000')}
  }
`;
