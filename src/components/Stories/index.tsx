"use client";

import { useEffect, useState } from "react";

import { Navigation, A11y, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { SkeletonContainer, SkeletonItem, Stories } from "./styles";

import generateFakeStories from "./faker";
import Story from "./Story";

import { IoChevronBackCircle, IoChevronForwardCircle } from "react-icons/io5";

export interface IStory {
  id: string;
  user: {
    name: string;
    avatar: string;
  };
}

const StoriesComponent: React.FC = () => {
  const [data, setData] = useState<IStory[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setData(generateFakeStories());

    setTimeout(() => {
      setLoading(false);
    }, Math.floor(Math.random() * 1000) + 500);
  }, []);

  return (
    <Stories>
      {loading ? (
        <SkeletonContainer>
          {Array.from({ length: 10 }).map((_, index) => (
            <SkeletonItem key={index + 1}>
              <div className="skeleton img"></div>
              <div className="skeleton text"></div>
            </SkeletonItem>
          ))}
        </SkeletonContainer>
      ) : (
        <Swiper
          modules={[Navigation, A11y, FreeMode]}
          spaceBetween={2}
          slidesPerView="auto"
          slidesPerGroup={7}
          navigation={{
            nextEl: ".btn-next",
            prevEl: ".btn-prev",
          }}
          freeMode
        >
          {(data || []).map(story => (
            <SwiperSlide key={story.id}>
              <Story
                id={story.id}
                avatar={story.user.avatar}
                username={story.user.name}
              />
            </SwiperSlide>
          ))}

          <div className="btn-prev">
            <IoChevronBackCircle color="white" size={32} />
          </div>
          <div className="btn-next">
            <IoChevronForwardCircle color="white" size={32} />
          </div>
        </Swiper>
      )}
    </Stories>
  );
};

export default StoriesComponent;
