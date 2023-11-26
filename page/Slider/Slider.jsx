import { animated, useSpring } from 'react-spring';
import { useRoutes, useLocation } from 'react-router-dom';
import TodoList from '../TodoList/TodoList';
import Important from '../Important/Important';
import Completed from '../Completed/Completed';

const slides = [
  { path: '/all', Component: TodoList },
  { path: '/important', Component: Important },
  { path: '/completed', Component: Completed },
];

const Slider = () => {
  const location = useLocation();
  const index = slides.findIndex(slide => slide.path === location.pathname);
  const { x } = useSpring({ x: index * window.innerWidth, config: { tension: 250, friction: 40 } });

  const routing = useRoutes(slides.map(({ path, Component }, i) => ({
    path,
    element: <animated.div style={{ transform: x.to(x => `translate3d(${x - i * window.innerWidth}px,0,0)`) }}><Component /></animated.div>,
  })));

  return routing || null;
};

export default Slider;