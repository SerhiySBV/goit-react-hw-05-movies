import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const GoBack = styled.button`
  width: 100px;
  height: 50px;
  border-radius: 15px;
  position: absolute;
  top: 85px;
  right: 15px;
`;

export const Box = styled.div`
  display: flex;
  gap: 50px;
  justify-content: center;
  margin-left: 40px;
`;

const MoveeLinkStyled = styled(NavLink)`
  display: flex;
  border: 1px solid darkslategray;
  padding: 5px;
  border-radius: 5px;
  color: orangered;
  width: 80px;
  justify-content: center;
`;
export default MoveeLinkStyled;
