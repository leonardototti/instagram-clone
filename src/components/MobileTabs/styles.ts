import styled from "styled-components";

export const Tabs = styled.div`
  width: 100%;
  height: 54px;
  background-color: #fff;
  border-top: 1px solid #dbdbdb;

  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 10;

  & > * {
    flex: 1;
  }

  @media (min-width: 615px) {
    display: none;
  }
`;
