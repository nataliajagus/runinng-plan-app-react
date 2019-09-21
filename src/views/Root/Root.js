import React from 'react';
import Button from 'components/Button/Button';
import GlobalStyle from 'theme/GlobalStyle.js';

function Root() {
  return (
    <div>
      <GlobalStyle />
      <Button>Start</Button>
      <Button secondary>Stop</Button>
    </div>

  );
}

export default Root;
