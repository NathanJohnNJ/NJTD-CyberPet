import styled, { keyframes } from 'styled-components';
import DragonLeftImg from '../petImages/dragon/greenLeft.png';
import DragonRightImg from '../petImages/dragon/greenRight.png';
import DragonCompleteImg from '../petImages/dragon/completeGreen.png';
import FairyBackImg from '../petImages/fairy/blueBack.png';
import FairyFrontImg from '../petImages/fairy/blueFront.png';
import FairyLeftImg from '../petImages/fairy/blueLeft.png';
import FairyRightImg from '../petImages/fairy/blueRight.png';
import FairyCompleteImg from '../petImages/fairy/completeBlue.png';


const DragonAnimation = keyframes`
    100% { background-position: -300px; }
`;
const DragonAnimationFull = keyframes`
    100% { background-position: -3593px; }
`;

export const DragonLeft = styled.div`
    height: 100px;
    width: 100px;
    position: flex;
    align-self: center;
    transform: translate()(-50%, -50%);
    background: url(${DragonLeftImg}) left center;
    animation: ${DragonAnimation} 2.25s steps(3) infinite;
`;

export const DragonRight = styled.div`
    height: 100px;
    width: 100px;
    position: flex;
    align-self: center;
    transform: translate()(-50%, -50%);
    background: url(${DragonRightImg}) left center;
    animation: ${DragonAnimation} 2.25s steps(3) infinite;
`;

export const DragonComplete = styled.div`
    height: 150px;
    width: 145px;
    position: flex;
    align-self: center;
    transform: translate()(-50%, 0%);
    background: url(${DragonCompleteImg}) left center;
    animation: ${DragonAnimationFull} 18s steps(24) infinite;
`;

const fairyAnimation = keyframes`
    100% { background-position: -900px; }
`;
const fairyAnimationFull = keyframes`
    100% { background-position: -3593px; }
`;

export const FairyBack = styled.div`
    height: 150px;
    width: 150px;
    position: flex;
    align-self: center;
    transform: translate()(-50%, -50%);
    background: url(${FairyBackImg}) left center;
    animation: ${fairyAnimation} 2.25s steps(6) infinite;
`;

export const FairyFront = styled.div`
    height: 150px;
    width: 150px;
    position: flex;
    align-self: center;
    transform: translate()(-50%, -50%);
    background: url(${FairyFrontImg}) left center;
    animation: ${fairyAnimation} 2.25s steps(6) infinite;
`;

export const FairyLeft = styled.div`
    height: 150px;
    width: 150px;
    position: flex;
    align-self: center;
    transform: translate()(-50%, -50%);
    background: url(${FairyLeftImg}) left center;
    animation: ${fairyAnimation} 2.25s steps(6) infinite;
`;

export const FairyRight = styled.div`
    height: 150px;
    width: 150px;
    position: flex;
    align-self: center;
    transform: translate()(-50%, -50%);
    background: url(${FairyRightImg}) left center;
    animation: ${fairyAnimation} 2.25s steps(6) infinite;
`;

export const FairyComplete = styled.div`
    height: 150px;
    width: 150px;
    position: flex;
    align-self: center;
    transform: translate()(-50%, -50%);
    background: url(${FairyCompleteImg}) left center;
    animation: ${fairyAnimationFull} 18s steps(24) infinite;
`;