import styled from "styled-components";

export const Stories = styled.div`
  width: 100%;
  height: 118px;
  padding: 18px 0;
  background: white;
  border: 1px solid #dbdbdb;
  border-radius: 3px;
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 24px;
  position: relative;

  .swiper {
    padding: 0 12px;

    .swiper-slide {
      width: fit-content;
    }

    .btn-prev,
    .btn-next {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      cursor: pointer;

      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      z-index: 9;

      filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.35));

      &.swiper-button-disabled {
        display: none;
      }
    }

    .btn-prev {
      left: 6px;
    }

    .btn-next {
      right: 6px;
    }
  }
`;

export const SkeletonContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  gap: 2px;
  padding: 0 12px;
`;

export const SkeletonItem = styled.div`
  width: 78px;
  min-width: 78px;
  height: 83px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .img {
    width: 66px;
    height: 66px;
    border-radius: 50%;
    aspect-ratio: 1/1;
    margin-bottom: 3px;
  }

  .text {
    width: 80%;
    height: 14px;
    border-radius: 3px;
  }
`;
