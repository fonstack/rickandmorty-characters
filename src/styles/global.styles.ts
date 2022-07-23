import { createGlobalStyle } from 'styled-components';
import { reset } from './reset.styles';
import { variables } from './variables.styles';
import { getSpacing } from './utils.styles';

export const GlobalStyle = createGlobalStyle`
    ${variables}
    ${reset}

    body {
        font-family: 'Lato', sans-serif;
        min-height: 100vh;
        background-color: var(--color-dark-gray);
        color: var(--color-text);
    }

    .max-width-wrapper {
        position: relative;
        width: 100%;
        max-width: 1400px;
        margin-left: auto;
        margin-right: auto;
        padding-left: ${getSpacing(4)};
        padding-right: ${getSpacing(4)};
    }

    ::-webkit-scrollbar {
        width: 12px;
        background-color: var(--color-gray);
    }

    ::-webkit-scrollbar-thumb {
        border-radius: 8px;
        background-color: var(--color-light-gray);
        border: 2px solid var(--color-gray);
    }
    
    ::-webkit-scrollbar-track {
        border-radius: 3px;
        background-color: transparent;
    }
`;
