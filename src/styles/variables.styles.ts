import { css } from 'styled-components';

export const variables = css`
  :root {
    --color-dark-gray: #181818;
    --color-medium-gray: #2a2a2a;
    --color-medium-gray-opacity: #2a2a2ae8;
    --color-gray: #3a3b3c;
    --color-light-gray: #929292;
    --color-primary: #8a3ffc;
    --color-primary-lighter: #b9a6fd;
    --color-primary-darker: #6c30c7;
    --color-secondary: #e100ff;
    --color-secondary-lighter: #de4cf1;
    --color-text: #ffffff;

    --gradient-primary-secondary: linear-gradient(to top right, var(--color-secondary), var(--color-primary));
  }
`;
