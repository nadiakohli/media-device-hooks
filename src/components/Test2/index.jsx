import React from 'react';
import styled from 'styled-components';

// Hooks
import useDevice from 'hooks/useDevice';

// Styles
const H2 = styled.h2`
  width: 50%;
  color: #7f7fe6;
  font-size: 16px;
  text-align: center;
`;

const Test2 = () => {
  const { 
    isMobile,
    isTablet,
    isDesktop,
    isPrinting,
  } = useDevice();

  return (
    <>
      <H2>{`It is mobile width - ${isMobile}`}</H2>
      <H2>{`It is tablet width - ${isTablet}`}</H2>
      <H2>{`It is desktop width - ${isDesktop}`}</H2>
      <H2>{`It is printing width - ${isPrinting}`}</H2>
    </>
  );
};

export default Test2;
