import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  background: #131e31;
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  padding: 15px;
  border-bottom: 1px solid gainsboro;
`;

export const HeaderLeft = styled.div`
  flex: 0.5;
  min-width: 5vw;
  background-color: white;
  color: gray;
  border-radius: 30px;
  display: flex;
  align-items: center;
  padding: 10px;

  @media (max-width: 680px) {
    display: none;
  }
`;

export const HeaderInput = styled.input`
  border: none;
  outline: none;
  width: 100%;
`;

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 640px) {
    flex: 1;
    justify-content: flex-end;
  }
`;

export const UserEmail = styled.h4`
  color: whitesmoke;
  margin-left: 15px;
  margin-top: 5px;
  cursor: pointer;
`;

export const MenuItem = styled.span`
  margin-left: 10px;
`;
