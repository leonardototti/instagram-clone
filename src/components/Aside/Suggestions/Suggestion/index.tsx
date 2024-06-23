import { memo } from "react";
import { Suggestion } from "./styles";
import Link from "next/link";
import { ISuggestion } from "..";
import Image from "next/image";

const SuggestionComponent: React.FC<{ suggestion: ISuggestion }> = ({
  suggestion,
}) => {
  return (
    <Link href="#">
      <Suggestion>
        <div className="info">
          <div className="avatar">
            <Image
              src={suggestion.avatar}
              width={32}
              height={32}
              alt={suggestion.username}
            />
          </div>
          <div>
            <h6>{suggestion.username}</h6>
            <p className="message">
              {suggestion.followsYou ? "Segue você" : "Novo no instagram"}
            </p>
          </div>
        </div>
        <span className="follow">Seguir</span>
      </Suggestion>
    </Link>
  );
};

export default memo(SuggestionComponent);
