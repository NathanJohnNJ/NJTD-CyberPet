import SpritePage from './petImages/fairy/completeBlue.png';
import styled, { keyframes } from 'styled-components';

const animation = keyframes`
    100% { background-position: -4096px; }
`;
export const Fairy = styled.div`
    height: 171px;
    width: 171px;
    position: flex;
    align-self: center;
    transform: translate()(-50%, -50%);
    background: url(${SpritePage}) left center;
    animation: ${animation} 6s steps(24) infinite;
`;