import React from 'react';
import Button from 'components/Button/Button';
import GlobalStyle from 'theme/GlobalStyle.js';
import Timer from 'components/Timer/Timer';
import WeekButton from 'components/WeekButton/WeekButton';

function Root() {
  return (
    <div>
      <GlobalStyle />
      <Button>Start</Button>
      <Button secondary>Stop</Button>
      <Timer />
      <WeekButton />
    </div>

  );
}

export default Root;
