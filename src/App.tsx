import React, { Component } from 'react';
import anime from 'animejs';
import styled from 'styled-components';
import { ReactComponent as SVGLogo } from './logo.svg';
import './App.css';

const LogoContainer = styled.div`
  position: relative;
  margin: auto;
  width: 256px;
`;

const Logo = styled(SVGLogo)`
  pointer-events: none;
`;

const Circle = styled.div`
  pointer-events: none;
  position: absolute;
  top: -6px;
  left: -6px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: rgb(255, 104, 104);;
`;

class App extends Component<{}, { dir: number }> {
  componentDidMount() {
    var path = anime.path(`${Logo} path`);

    anime({
      targets: `${Circle}`,
      translateX: path('x'),
      translateY: path('y'),
      rotate: path('angle'),
      easing: 'linear',
      duration: 10000,
      loop: true,
    })
  }
  
  render() {
    return (
      <LogoContainer>
        <Circle />
        <Logo />
      </LogoContainer>
    );
  }
}

export default App;
