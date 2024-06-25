import styled from "styled-components";

export const Post = styled.article`
  background: white;
  border: 1px solid #dbdbdb;
  border-radius: 3px;
  margin-bottom: 60px;

  @media (max-width: 614px) {
    border-left: none;
    border-right: none;
    margin-bottom: 35px;
  }

  header {
    padding: 14px 16px 13px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #efefef;

    .info {
      display: flex;
      align-items: center;
      gap: 15px;

      img {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        object-fit: cover;
        aspect-ratio: 1/1;
      }

      h3 {
        font-size: 14px;
        font-weight: 500;
        color: #262626;
        margin-bottom: 0;
      }
    }
  }

  figure {
    width: 100%;
    height: 100%;
    max-width: 612px;
    max-height: 612px;
    margin-bottom: 0;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  footer {
    padding: 10px 14px 12px;

    .actions {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 8px;

      .left-wrapper {
        display: flex;
        align-items: center;
        gap: 13px;

        & > * {
          cursor: pointer;
        }
      }
    }

    .likes-wrapper {
      display: flex;
      align-items: center;
      gap: 5px;
      margin-left: 2px;

      img {
        width: 20px;
        height: 20px;
        object-fit: cover;
        aspect-ratio: 1/1;
        border-radius: 50%;
      }

      p {
        font-size: 14px;
        line-height: 16px;
        margin-bottom: 0;

        strong {
          font-weight: 500;
        }
      }
    }
  }
`;
