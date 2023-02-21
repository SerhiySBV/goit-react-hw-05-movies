import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  gap: 50px;
  border-bottom: 1px solid;
  padding: 20px;
  justify-content: flex-start;
  margin-bottom: 20px;
`;

const StyledLink = styled(NavLink)`
  border: 1px solid;
  padding: 5px;
  border-radius: 6px;
  color: darkslategray;
`;
export default StyledLink;
