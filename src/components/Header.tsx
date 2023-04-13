import { useContext } from "react";
import { MenuContext } from "./useContext/MenuContext";

export const Header = () => {
  const context: { menu?: any; item?: number } = useContext(MenuContext);

  const { menu, item = 0 } = context;

  return (
    <div className="content__header">
      <div className="content__title">{menu[item - 1].title}</div>
      <div className="content__subtitle">{menu[item - 1].subtitle}</div>
    </div>
  );
};
