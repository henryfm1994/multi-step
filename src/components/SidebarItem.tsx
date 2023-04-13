import { useContext } from "react";
import { MenuContext } from "./useContext/MenuContext";

export const SidebarItem = (elem: { id: number; desc: string }) => {
  const { id, desc } = elem;

  const context: { item?: number; setItem?: any } = useContext(MenuContext);

  const { item, setItem } = context;

  return (
    <div className="sidebar__item">
      {id < 5 && (
        <>
          <div
            className={
              item === id
                ? "sidebar__item-number-selected"
                : "sidebar__item-number"
            }
            onClick={() => setItem(id)}
          >
            {id}
          </div>
          <div className="sidebar__item-desc">
            <div className="sidebar__item-step">STEP {id}</div>
            <div>{desc}</div>
          </div>
        </>
      )}
    </div>
  );
};
