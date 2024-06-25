"use client";

import { Tabs } from "./styles";
import {
  IoHome,
  IoSearchOutline,
  IoHeartOutline,
  IoAddCircleOutline,
  IoPersonOutline,
} from "react-icons/io5";

const TabsComponent: React.FC = () => {
  return (
    <Tabs>
      <IoHome size={22} color="#000" />
      <IoSearchOutline size={22} color="#000" />
      <IoAddCircleOutline size={22} color="#000" />
      <IoHeartOutline size={22} color="#000" />
      <IoPersonOutline size={22} color="#000" />
    </Tabs>
  );
};

export default TabsComponent;
