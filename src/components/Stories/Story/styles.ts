import styled from "styled-components";

export const Story = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 78px;

  .avatar {
    background-image: linear-gradient(
      45deg,
      #ffa95f 5%,
      #f99c4a 15%,
      #f47838 30%,
      #e75157 45%,
      #d92d7a 70%,
      #cc2a92 80%,
      #c32e92 95%
    );
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    width: 66px;
    height: 66px;

    &,
    & > img {
      background-color: white;
      border: 2.5px solid #fff;
      border-radius: 50%;
    }

    & > img {
      width: 56px;
      height: 56px;
      min-width: 56px;
      min-height: 56px;
      object-fit: cover;
    }

    &.has-story img {
      transform: scale(1);
    }
  }

  h4 {
    font-size: 12px;
    line-height: 14px;
    font-weight: 400;
    text-align: center;
    color: #262626;
    margin-top: 3px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 78px;
  }
`;
