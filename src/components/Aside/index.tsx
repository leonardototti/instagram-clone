"use client";

import { useEffect, useState } from "react";
import { Aside, SkeletonUser } from "./styles";
import generateFakeUserData from "./faker";
import Image from "next/image";
import Suggestions, { ISuggestion } from "./Suggestions";

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
      <Suggestions loading={loading} suggestions={data?.suggestions ?? []} />
      <div className="footer-text">
        Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos •
        Localizações • Contas mais relevantes • Hashtags • Idioma
      </div>
      <div className="footer-text">© 2024 INSTAGRAM DO FACEBOOK</div>
    </Aside>
  );
};

export default AsideComponent;
