import React from 'react';
import styled from 'styled-components';

// Hooks
import useMedia from 'hooks/useMedia';

// Styles
const H1 = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #3f3fd9;
  font-size: 31px;
  margin: 10px;
`;

const Test1 = () => {
  const matches = useMedia('(min-width: 768px)');

  return (
    <H1>
      {`The view port is ${matches ? 'at least' : 'less than'} 768 pixels wide`}
    </H1>
  );
};

export default Test1;
