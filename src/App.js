import React from 'react';
import styled from 'styled-components';

// Components
import Test1 from 'components/Test1';
import Test2 from 'components/Test2';

// Styles
const Wrap= styled.div`
  height: 100vh;  
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Card= styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #eaeafb;
  width: 75%;
  height: 75%;
`;

const App = () => {
  return (
    <Wrap>
      <Card>
        <Test1 />
        <Test2 />
      </Card>
    </Wrap>
  );
};

export default App;
