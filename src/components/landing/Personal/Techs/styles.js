import styled from 'styled-components';

export const Container = styled.div`
  overflow: hidden;
  /* padding: 0 10%; */
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const Badges = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;

  @media (max-width: 790px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
  }

  .ui.image.label .detail {
    width: 100%;
  }

  .ui.image.label .detail {
    white-space: nowrap;
  }
`;
