import styled from 'styled-components';
import { animated } from 'react-spring';

export const Container = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
`;

export const Card = styled(animated.div)`
  background: grey;
  background-image: url(${props => props.src});
  background-position: center center;
  background-size: cover;
  border: 15px solid white;
  border-radius: 5px;
  box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.3);
  height: 45ch;
  transition: box-shadow 0.5s;
  object-fit: contain;
  width: 45ch;
  will-change: transform;

  :hover {
    box-shadow: 0px 30px 100px -10px rgba(0, 0, 0, 0.4);
  }
`;
