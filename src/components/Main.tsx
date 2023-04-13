import { useContext } from "react";
import { Content } from "./Content";
import { Sidebar } from "./Sidebar";
import { Thanks } from "./Thanks";
import { MenuContext } from "./useContext/MenuContext";

export const Main = () => {
  const context: { menu?: any; item?: number } = useContext(MenuContext);

  const { item = 1 } = context;

  return (
    <div className="main__container">
      <Sidebar />
      {item < 5 ? <Content /> : <Thanks />}
    </div>
  );
};
