import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    /* Light theme variables */
    --background: #ffffff;
    --text: #2d3436;
    --text-secondary: #4a4a4a;
    --muted: #636e72;
    --primary: #0984e3;
    --primary-light: #74b9ff;
    --primary-dark: #0652DD;
    --secondary: #00b894;
    --secondary-light: #55efc4;
    --secondary-dark: #00a884;
    --accent: #6c5ce7;
    --light: #f5f6fa;
    --border: #dfe6e9;
    --error: #d63031;
    --success: #00b894;
    --warning: #fdcb6e;
    --info: #0984e3;

    /* Breakpoints */
    --breakpoint-sm: 576px;
    --breakpoint-md: 768px;
    --breakpoint-lg: 992px;
    --breakpoint-xl: 1200px;
  }

  [data-theme='dark'] {
    --background: #1e272e;
    --text: #f5f6fa;
    --text-secondary: #e2e8f0;
    --muted: #a4b0be;
    --primary: #74b9ff;
    --primary-light: #0984e3;
    --primary-dark: #0652DD;
    --secondary: #55efc4;
    --secondary-light: #00b894;
    --secondary-dark: #00a884;
    --accent: #a29bfe;
    --light: #2d3436;
    --border: #2d3436;
    --error: #ff7675;
    --success: #55efc4;
    --warning: #ffeaa7;
    --info: #74b9ff;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
  body,
  #root {
    height: 100%;
    width: 100%;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family:
      -apple-system,
      BlinkMacSystemFont,
      'Segoe UI',
      Roboto,
      Oxygen,
      Ubuntu,
      Cantarell,
      'Open Sans',
      'Helvetica Neue',
      sans-serif;
    background: var(--background);
    color: var(--text);
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  main {
    flex: 1;
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  section {
    min-height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem 1rem;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    font-family: inherit;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  /* Scrollbar styles */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background: var(--light);
  }

  ::-webkit-scrollbar-thumb {
    background: var(--muted);
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: var(--primary);
  }
`;

export default GlobalStyles;
