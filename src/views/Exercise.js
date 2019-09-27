import React from 'react';
import Button from 'components/Button/Button';
import GlobalStyle from 'theme/GlobalStyle.js';
import Timer from 'components/Timer/Timer';
import Header from 'components/Header/Header';


function Exercise() {
  return (
    <div>
      <GlobalStyle />
      <Header>
      <Timer />
      </Header>
      <Button>Start</Button>
      <Button secondary>Stop</Button>
    </div>

  );
}

export default Exercise;