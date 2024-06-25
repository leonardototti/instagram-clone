import styled from "styled-components";

export const SkeletonContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 60px;
`;

export const SkeletonItem = styled.div`
  background: white;
  border: 1px solid #dbdbdb;
  border-radius: 3px;

  header {
    width: 100%;
    padding: 14px 16px;
    display: flex;
    align-items: center;
    gap: 15px;

    .img {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      aspect-ratio: 1/1;
    }

    .username {
      width: 90px;
      height: 16px;
      border-radius: 3px;
    }
  }

  .post-image {
    width: 100%;
    max-width: 612px;
    height: 100%;
    max-height: 612px;
    aspect-ratio: 1/1;

    @media (max-width: 614px) {
      width: 100vw;
      height: 100vw;
    }
  }

  footer {
    width: 100%;
    padding: 42px 17px 14px;
    display: flex;
    align-items: center;
    gap: 5px;

    .img {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      aspect-ratio: 1/1;
    }

    .username {
      width: 60%;
      height: 16px;
      border-radius: 3px;
    }
  }
`;
