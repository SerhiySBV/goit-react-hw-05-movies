import styled from 'styled-components';

const ListCast = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-auto-rows: minmax(100px, auto);
`;

export { ListCast };
