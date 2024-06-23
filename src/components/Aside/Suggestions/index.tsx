import { SkeletonSuggestion, Suggestions } from "./styles";
import Link from "next/link";
import Suggestion from "./Suggestion";

export type ISuggestion = {
  id: string;
  username: string;
  avatar: string;
  followsYou: boolean;
};

interface IProps {
  loading: boolean;
  suggestions: ISuggestion[];
}

const SuggestionsComponent: React.FC<IProps> = ({ loading, suggestions }) => {
  return (
    <Suggestions>
      <div className="header-container">
        <h5>Sugestões para você</h5>
        <Link href="#">Ver tudo</Link>
      </div>
      <div className="suggestions-list">
        {loading
          ? Array.from({ length: 5 }).map((_, index) => (
              <SkeletonSuggestion key={index + 1}>
                <div className="info">
                  <div className="skeleton img"></div>
                  <div>
                    <div className="skeleton username"></div>
                    <div className="skeleton message"></div>
                  </div>
                </div>
                <div className="skeleton follow"></div>
              </SkeletonSuggestion>
            ))
          : suggestions.map(suggestion => (
              <Suggestion key={suggestion.id} suggestion={suggestion} />
            ))}
      </div>
    </Suggestions>
  );
};

export default SuggestionsComponent;
