"use client";

import { memo } from "react";
import { Story } from "./styles";
import Image from "next/image";

export interface IProps {
  id: string;
  username: string;
  avatar: string;
}

const StoryComponent: React.FC<IProps> = ({ id, username, avatar }) => {
  return (
    <Story>
      <div className="avatar">
        <Image src={avatar} width={56} height={56} alt={username} />
      </div>
      <h4>{username}</h4>
    </Story>
  );
};

export default memo(StoryComponent);
