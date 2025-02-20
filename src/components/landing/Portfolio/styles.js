import styled, { css, keyframes } from 'styled-components';

export const SkillsWrapper = styled.div`
  overflow: hidden;
  margin: 0 auto;
  flex-direction: column;
  padding: 4rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 40px;
  max-width: 1280px;
  flex: 1;

  @media screen and (max-width: 50em) {
    flex-direction: column;
  }
`;

export const FilterWrapper = styled.div`
  display: flex;
  margin-right: 10%;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 50em) {
    margin-right: 0;
  }
`;

const bounceIn = keyframes`
  0%{
    opacity: 0;
    transform: scale(0.3) translate3d(0,0,0);
  }
  50%{
    opacity: 0.9;
    transform: scale(1.1);
  }
  80%{
    opacity: 1;
    transform: scale(0.89);
  }
  100%{
    opacity: 1;
    transform: scale(1) translate3d(0,0,0);
  }
`;

export const FilterItem = styled.li`
  background: transparent;
  list-style: none;
  border: 0;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  margin: 0 10px;

  color: ${props => (props.active ? '#7178fc' : '#666')};
  &:before {
    content: '';
    margin-bottom: 4px;
    display: block;
    width: 100%;
    height: 5px;
    border-radius: 10px;
    background: transparent;
  }

  ${props =>
    props.active &&
    css`
      &:before {
        animation-name: ${bounceIn};
        animation-duration: 450ms;
        animation-timing-function: linear;
        animation-fill-mode: forwards;
        background: #7178fc;
      }
    `}

  @media screen and (max-width: 50em) {
    margin-top: 40px;
    font-size: 14px;
    margin-right: 5px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  max-width: 1500px;
`;

export const Grid = styled.div`
  display: grid;
  width: 100%;
  align-items: center;
  grid-template-columns: repeat(3, 1fr);
  gap: 5px;

  @media screen and (max-width: 50em) {
    grid-template-columns: repeat(1, 1fr);
    gap: 0;
    margin: 0;
  }
`;

export const PortfolioWrapper = styled.div`
  padding: 4rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
