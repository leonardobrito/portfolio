import styled from 'styled-components';
import { animated } from 'react-spring';

export const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Card = styled(animated.div)`
  width: 45ch;
  height: 45ch;
  background: grey;
  border-radius: 5px;
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center center;
  box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.3);
  transition: box-shadow 0.5s;
  will-change: transform;
  border: 15px solid white;

  :hover {
    box-shadow: 0px 30px 100px -10px rgba(0, 0, 0, 0.4);
  }
`;
