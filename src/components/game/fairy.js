import Back from './petImages/fairy/blueBack.png';
import Front from './petImages/fairy/blueFront.png';
import Left from './petImages/fairy/blueLeft.png';
import Right from './petImages/fairy/blueRight.png';
import Complete from './petImages/fairy/completeBlue.png';
import styled, { keyframes } from 'styled-components';

const animation = keyframes`
    100% { background-position: -900px; }
`;
const animationFull = keyframes`
    100% { background-position: -3593px; }
`;

export const FairyBack = styled.div`
    height: 150px;
    width: 150px;
    position: flex;
    align-self: center;
    transform: translate()(-50%, -50%);
    background: url(${Back}) left center;
    animation: ${animation} 2.25s steps(6) infinite;
`;

export const FairyFront = styled.div`
    height: 150px;
    width: 150px;
    position: flex;
    align-self: center;
    transform: translate()(-50%, -50%);
    background: url(${Front}) left center;
    animation: ${animation} 2.25s steps(6) infinite;
`;

export const FairyLeft = styled.div`
    height: 150px;
    width: 150px;
    position: flex;
    align-self: center;
    transform: translate()(-50%, -50%);
    background: url(${Left}) left center;
    animation: ${animation} 2.25s steps(6) infinite;
`;

export const FairyRight = styled.div`
    height: 150px;
    width: 150px;
    position: flex;
    align-self: center;
    transform: translate()(-50%, -50%);
    background: url(${Right}) left center;
    animation: ${animation} 2.25s steps(6) infinite;
`;

export const FairyComplete = styled.div`
    height: 150px;
    width: 150px;
    position: flex;
    align-self: center;
    transform: translate()(-50%, -50%);
    background: url(${Complete}) left center;
    animation: ${animationFull} 18s steps(24) infinite;
`;