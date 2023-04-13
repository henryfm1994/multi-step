import React, { useContext } from "react";
import { MenuContext } from "./useContext/MenuContext";

export const PlanItems = (elem: {
  id: number;
  type: string;
  month: number;
  year: number;
}) => {
  const { id, type, month, year } = elem;

  const context: { sw?: boolean; setCheck?: Function } =
    useContext(MenuContext);

  const { sw, setCheck } = context;

  return (
    <div
      className="plan__data"
      onClick={() => setCheck?.(sw ? month : year)}
      tabIndex={id}
    >
      <div className="plan__icono">
        <img src={`./assets/images/icon-${type.toLowerCase()}.svg`} alt="" />
      </div>
      <div className="plan__details">
        <div className="plan__tittle">{type}</div>
        <div className="plan__price">
          {sw ? (
            <div className="plan__price-datails">${month}/mo</div>
          ) : (
            <div>
              <div className="plan__price-datails"> ${year}/yr </div>
              <div className="plan__promo">2 months free</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
