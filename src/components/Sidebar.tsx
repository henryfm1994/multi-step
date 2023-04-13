import { useContext } from "react";
import { SidebarItem } from "./SidebarItem";
import { MenuContext } from "./useContext/MenuContext";

export const Sidebar = () => {
  const context: { menu?: any } = useContext(MenuContext);

  const { menu } = context;

  return (
    <div className="sidebar__container">
      {menu.map(
        (elem: JSX.IntrinsicAttributes & { id: number; desc: string }) => (
          <SidebarItem key={elem.id} {...elem} />
        )
      )}
    </div>
  );
};
