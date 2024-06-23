import styled from "styled-components";

export const Aside = styled.aside`
  width: 100%;
  max-width: 292px;

  .user-wrapper {
    display: flex;
    align-items: center;
    gap: 17px;
    margin-top: 23px;

    figure {
      width: 56px;
      height: 56px;
      aspect-ratio: 1/1;
      margin-bottom: 0;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 50%;
      }
    }

    h2,
    p.username {
      font-size: 14px;
      line-height: 16px;
    }

    h2 {
      font-weight: 500;
      color: #262626;
      margin-bottom: 1px;
    }

    p.username {
      font-weight: 300;
      color: #8e8e8e;
      margin-bottom: 0;
    }
  }

  .footer-text {
    font-size: 11px;
    color: #c7c7c7;
    margin-bottom: 18px;
  }

  @media (max-width: 900px) {
    display: none;
  }
`;

export const SkeletonUser = styled.div`
  display: flex;
  align-items: center;
  gap: 17px;

  .img {
    width: 56px;
    height: 56px;
    aspect-ratio: 1/1;
    border-radius: 50%;
  }

  .username,
  .name {
    height: 16px;
    border-radius: 3px;
  }

  .name {
    width: 60px;
  }

  .username {
    width: 85px;
    margin-bottom: 1px;
  }
`;
