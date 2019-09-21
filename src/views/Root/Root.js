import React from 'react';
import Button from 'components/Button/Button';
import GlobalStyle from 'theme/GlobalStyle.js';
import Timer from 'components/Timer/Timer';

function Root() {
  return (
    <div>
      <GlobalStyle />
      <Button>Start</Button>
      <Button secondary>Stop</Button>
      <Timer />
    </div>

  );
}

export default Root;
