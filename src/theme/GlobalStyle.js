import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle` 

    @import url('https://fonts.googleapis.com/css?family=Montserrat:400,600,800&display=swap');

    *, *::before, *::after {
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
         -moz-osx-font-smoothing: grayscale;
    }

    html {
        font-size: 62.5%;
    }

    body {
        font-size: 1.6rem;
        font-family: 'Montserrat', sans-serif;
        margin: 0;
    }

    span {
        font-family: 'Montserrat', sans-serif;
    }

    a {
        text-decoration: none;
    }

    input[type=number]::-webkit-inner-spin-button {
  -webkit-appearance: none;
}

`;

export default GlobalStyle;