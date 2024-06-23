import styled from "styled-components";

export const Suggestions = styled.div`
  margin-top: 24px;

  .header-container {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h5 {
      font-size: 12px;
      font-weight: 500;
      color: #8e8e8e;
    }

    a {
      font-size: 12px;
      font-weight: 500;
      color: #262626;
    }
  }

  .suggestions-list {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-top: 18px;
    margin-bottom: 33px;
  }
`;

export const SkeletonSuggestion = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 32px;

  .info {
    display: flex;
    align-items: center;
    gap: 11px;
  }

  .img {
    width: 32px;
    height: 32px;
    aspect-ratio: 1/1;
    border-radius: 50%;
  }

  .username,
  .message,
  .follow {
    border-radius: 3px;
  }

  .username {
    height: 14px;
    width: 85px;
    margin-bottom: 6px;
  }

  .message {
    height: 11px;
    width: 70px;
  }

  .follow {
    height: 14px;
    width: 36px;
  }
`;
