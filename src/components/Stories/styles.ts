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
