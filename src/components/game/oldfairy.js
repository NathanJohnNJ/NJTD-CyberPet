import SpritePage from './petImages/fairy/blueBack.png';
import styled, { keyframes } from 'styled-components';

const animation = keyframes`
    100% { background-position: -900px; }
`;
export const Fairy = styled.div`
    height: 150px;
    width: 150px;
    position: flex;
    align-self: center;
    transform: translate()(-50%, -50%);
    background: url(${SpritePage}) left center;
    animation: ${animation} 2.25s steps(6) infinite;
`;
// below for completeBlue

// const animation = keyframes`
//     100% { background-position: -3593px; }
// `;
// export const Fairy = styled.div`
//     height: 150px;
//     width: 150px;
//     position: flex;
//     align-self: center;
//     transform: translate()(-50%, -50%);
//     background: url(${SpritePage}) left center;
//     animation: ${animation} 45s steps(24) infinite;
// `;