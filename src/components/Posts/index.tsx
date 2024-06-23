"use client";

import { useEffect, useState } from "react";
import generateFakePosts from "./faker";
import Post from "./Post";
import { SkeletonContainer, SkeletonItem } from "./styles";

export type IPost = {
  id: string;
  user: {
    username: string;
    avatar: string;
  };
  image: string;
  likes: {
    featured: {
      username: string;
      avatar: string;
    };
    count: string;
  };
};

const PostsComponent: React.FC = () => {
  const [data, setData] = useState<IPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setData(generateFakePosts());

    setTimeout(() => {
      setLoading(false);
    }, Math.floor(Math.random() * 1000) + 500);
  }, []);

  return (
    <>
      {loading ? (
        <SkeletonContainer>
          {Array.from({ length: 3 }).map((_, index) => (
            <SkeletonItem key={index + 1}>
              <header>
                <div className="skeleton img"></div>
                <div className="skeleton username"></div>
              </header>
              <div className="skeleton post-image"></div>
              <footer>
                <div className="skeleton img"></div>
                <div className="skeleton username"></div>
              </footer>
            </SkeletonItem>
          ))}
        </SkeletonContainer>
      ) : (
        data.map(post => <Post key={post.id} post={post} />)
      )}
    </>
  );
};

export default PostsComponent;
