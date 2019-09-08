import React from 'react';
import PropTypes from 'prop-types';
import { useSpring } from 'react-spring';
import { Card } from './styles';

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1];
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const AnimatedCard = ({ src, size }) => {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }));
  const { xys } = props;

  return (
    <Card
      src={src}
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: xys.interpolate(trans), height: `${size}ch`, width: `${size}ch` }}
    />
  );
};

AnimatedCard.defaultProps = {
  xys: undefined,
  size: '45',
};

AnimatedCard.propTypes = {
  xys: PropTypes.arrayOf(PropTypes.number),
  src: PropTypes.string.isRequired,
  size: PropTypes.string,
};

export default AnimatedCard;
