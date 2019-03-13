import React from 'react';
import PropTypes from 'prop-types';
import { useSpring } from 'react-spring';
import { Container, Card } from './styles';

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1];
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const Work = () => {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }));
  const { xys } = props;
  return (
    <Container>
      <Card
        src="https://scontent.fjdo1-2.fna.fbcdn.net/v/t1.0-9/15590503_1068433069945642_5073939722861799705_n.jpg?_nc_cat=100&_nc_ht=scontent.fjdo1-2.fna&oh=3313b113cda992f70dd1264345f5afb6&oe=5D14AC61"
        onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
        onMouseLeave={() => set({ xys: [0, 0, 1] })}
        style={{ transform: xys.interpolate(trans) }}
      />
    </Container>
  );
};

Work.defaultProps = {
  xys: undefined,
};

Work.propTypes = {
  xys: PropTypes.arrayOf(PropTypes.number),
};

export default Work;
