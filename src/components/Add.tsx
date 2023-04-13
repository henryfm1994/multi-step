import React, { useContext } from "react";
import { MenuContext } from "./useContext/MenuContext";
import { AddItems } from "./AddItems";

export const Add = () => {
  const context: { adds?: any } = useContext(MenuContext);

  const { adds } = context;

  return (
    <div className="add__container">
      <div className="add__online">
        {adds.map(
          (
            elem: JSX.IntrinsicAttributes & {
              id: number;
              type: string;
              desc: string;
              month: number;
              year: number;
            },
            i: React.Key | null | undefined
          ) => (
            <AddItems key={i} {...elem} />
          )
        )}
      </div>
    </div>
  );
};
