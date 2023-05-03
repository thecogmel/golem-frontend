import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface IContainer {
  selected?: boolean;
  index: number;
}

export const Container = styled(Link)<IContainer>`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;
