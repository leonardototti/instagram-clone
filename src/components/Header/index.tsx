"use client";

import Image from "next/image";
import { Header } from "./styles";
import Link from "next/link";

const HeaderComponent: React.FC = () => {
  return (
    <Header>
      <div className="container">
        <Link href="/" className="logo-wrapper">
          <Image src="logo-icone.svg" alt="Instagram" width={22} height={22} />
          <Image src="logo.svg" alt="Instagram" width={103} height={29} />
        </Link>
        <div className="input-wrapper">
          <input type="text" placeholder="Pesquisar" />
        </div>
        <div className="actions-wrapper">
          <Link href="#">
            <Image
              src="paperplane.svg"
              alt="Mensagens"
              width={22}
              height={22}
              title="Mensagens"
            />
          </Link>
          <Link href="#">
            <Image
              src="compass.svg"
              alt="Explorar"
              width={22}
              height={22}
              title="Explorar"
            />
          </Link>
          <Link href="#">
            <Image
              src="heart.svg"
              alt="Notificações"
              width={22}
              height={22}
              title="Notificações"
            />
          </Link>
          <Link href="#">
            <Image
              src="person.svg"
              alt="Perfil"
              width={22}
              height={22}
              title="Perfil"
            />
          </Link>
        </div>
      </div>
    </Header>
  );
};

export default HeaderComponent;
