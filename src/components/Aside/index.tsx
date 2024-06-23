"use client";

import { useEffect, useState } from "react";
import { Aside, SkeletonSuggestion, SkeletonUser } from "./styles";
import generateFakeUserData from "./faker";
import Image from "next/image";
import Link from "next/link";

type ISuggestion = {
  id: string;
  username: string;
  avatar: string;
  followsYou: boolean;
};

export interface IUserData {
  user: {
    name: string;
    username: string;
    avatar: string;
  };
  suggestions: ISuggestion[];
}

const AsideComponent: React.FC = () => {
  const [data, setData] = useState<IUserData>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setData(generateFakeUserData());

    setTimeout(() => {
      setLoading(false);
    }, Math.floor(Math.random() * 1000) + 500);
  }, []);

  return (
    <Aside>
      <div className="user-wrapper">
        {loading ? (
          <SkeletonUser>
            <div className="skeleton img"></div>
            <div>
              <div className="skeleton username"></div>
              <div className="skeleton name"></div>
            </div>
          </SkeletonUser>
        ) : (
          <>
            <figure>
              <Image
                src={data?.user?.avatar ?? ""}
                width={56}
                height={56}
                alt={data?.user?.name ?? ""}
              />
            </figure>
            <div>
              <h2>{data?.user?.username ?? ""}</h2>
              <p className="username">{data?.user?.name ?? ""}</p>
            </div>
          </>
        )}
      </div>
      <div className="suggestions-wrapper">
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
            : data?.suggestions.map(suggestion => (
                <Link key={suggestion.id} href="#">
                  <div className="suggestion">
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
                          {suggestion.followsYou
                            ? "Segue você"
                            : "Novo no instagram"}
                        </p>
                      </div>
                    </div>
                    <span className="follow">Seguir</span>
                  </div>
                </Link>
              ))}
        </div>
      </div>
      <div className="footer-text">
        Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos •
        Localizações • Contas mais relevantes • Hashtags • Idioma
      </div>
      <div className="footer-text">© 2024 INSTAGRAM DO FACEBOOK</div>
    </Aside>
  );
};

export default AsideComponent;
