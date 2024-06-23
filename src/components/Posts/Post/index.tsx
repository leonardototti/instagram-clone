"use client";

import { memo, useState } from "react";
import { Post } from "./styles";
import { IPost } from "..";
import Image from "next/image";
import {
  IoEllipsisHorizontal,
  IoHeartOutline,
  IoBookmarkOutline,
  IoChatbubbleOutline,
  IoPaperPlaneOutline,
} from "react-icons/io5";

const PostComponent: React.FC<{ post: IPost }> = ({ post }) => {
  const [liked, setLiked] = useState(false);

  return (
    <Post>
      <header>
        <div className="info">
          <Image
            src={post.user.avatar}
            width={32}
            height={32}
            alt={post.user.username}
          />
          <h3>{post.user.username}</h3>
        </div>
        <IoEllipsisHorizontal color="#262626" size={16} />
      </header>
      <figure>
        <Image
          src={post.image}
          width={614}
          height={614}
          quality={100}
          objectFit="cover"
          layout="responsive"
          priority
          alt={post.user.username}
        />
      </figure>
      <footer>
        <div className="actions">
          <div className="left-wrapper">
            <IoHeartOutline
              color={liked ? "#D12D8D" : "#000"}
              size={22}
              onClick={() => setLiked(!liked)}
            />
            <IoChatbubbleOutline color="#000" size={22} />
            <IoPaperPlaneOutline color="#000" size={22} />
          </div>
          <div className="save-wrapper">
            <IoBookmarkOutline color="#000" size={22} />
          </div>
        </div>
        <div className="likes-wrapper">
          <Image
            src={post.likes.featured.avatar}
            width={20}
            height={20}
            alt={post.likes.featured.username}
          />
          <p>
            Curtido por <strong>{post.likes.featured.username}</strong> e{" "}
            <strong>outras {post.likes.count} pessoas</strong>
          </p>
        </div>
      </footer>
    </Post>
  );
};

export default memo(PostComponent);
