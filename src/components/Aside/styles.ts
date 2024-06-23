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

  .suggestions-wrapper {
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

      .suggestion {
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
      }
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
