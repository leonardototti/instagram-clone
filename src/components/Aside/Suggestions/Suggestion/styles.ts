import styled from "styled-components";

export const Suggestion = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .info {
    display: flex;
    align-items: center;
    gap: 11px;

    .avatar {
      height: 32px;
      img {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        object-fit: cover;
        aspect-ratio: 1/1;
      }
    }

    h6 {
      font-size: 14px;
      line-height: 14px;
      font-weight: 500;
      color: #262626;
      margin-bottom: 6px;
    }

    p.message {
      font-size: 12px;
      line-height: 11px;
      color: #8e8e8e;
      margin-bottom: 0;
    }
  }

  span.follow {
    font-size: 12px;
    font-weight: 500;
    color: #139ef2;

    &:hover {
      text-decoration: underline;
    }
  }
`;
