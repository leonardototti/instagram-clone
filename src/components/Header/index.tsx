"use client";

import Image from "next/image";
import { Header } from "./styles";
import Link from "next/link";

import {
  IoHeartOutline,
  IoPaperPlaneOutline,
  IoCompassOutline,
  IoPersonOutline,
} from "react-icons/io5";

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
            <IoPaperPlaneOutline color="#000" size={22} />
          </Link>
          <Link href="#">
            <IoCompassOutline color="#000" size={22} />
          </Link>
          <Link href="#">
            <IoHeartOutline color="#000" size={22} />
          </Link>
          <Link href="#">
            <IoPersonOutline color="#000" size={22} />
          </Link>
        </div>
      </div>
    </Header>
  );
};

export default HeaderComponent;
