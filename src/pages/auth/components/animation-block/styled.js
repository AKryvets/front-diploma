import styled from 'styled-components';

export const AnimationWrapper = styled.div``;

export const CircleSmall = styled.div`
  animation-timing-function: cubic-bezier(0.6, 0, 0.4, 1);
  animation-delay: 0s;
  position: absolute;
  top: 200px;
  left: -150px;
  background: #34416d;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  opacity: 0.4;
  animation: pulsate 3s ease-in-out infinite alternate;
`;

export const CircleMedium = styled.div`
  animation-timing-function: cubic-bezier(0.6, 0, 0.4, 1);
  animation-delay: 0.3s;
  position: absolute;
  top: 50px;
  left: -300px;
  background: #303f6b;
  width: 600px;
  height: 600px;
  border-radius: 50%;
  opacity: 0.3;
  animation: pulsate 3s ease-in-out infinite alternate;
`;

export const CircleLarge = styled.div`
  animation-timing-function: cubic-bezier(0.6, 0, 0.4, 1);
  animation-delay: 0.6s;
  position: absolute;
  top: -100px;
  left: -450px;
  background: #3d4d82;
  width: 900px;
  height: 900px;
  border-radius: 50%;
  opacity: 0.2;
  animation: pulsate 3s ease-in-out infinite alternate;
`;

export const CircleXLarge = styled.div`
  animation-timing-function: cubic-bezier(0.6, 0, 0.4, 1);
  animation-delay: 0.9s;
  position: absolute;
  top: -250px;
  left: -600px;
  background: #6482e2;
  width: 1200px;
  height: 1200px;
  border-radius: 50%;
  opacity: 0.1;
  animation: pulsate 3s ease-in-out infinite alternate;
`;

export const CircleXXLarge = styled.div`
  animation-timing-function: cubic-bezier(0.6, 0, 0.4, 1);
  animation-delay: 1.2s;
  position: absolute;
  top: -400px;
  left: -750px;
  background: #18203a;
  width: 1500px;
  height: 1500px;
  border-radius: 50%;
  opacity: 0.05;
  animation: pulsate 3s ease-in-out infinite alternate;
`;
