import React, { useContext } from "react";
import { MenuContext } from "./useContext/MenuContext";
import { PlanItems } from "./PlanItems";

export const Plan = () => {
  const context: { sw?: any; setSw?: any; plans?: any } =
    useContext(MenuContext);

  const { sw, setSw, plans } = context;

  return (
    <div className="plan__form">
      <div className="plan__types">
        {plans.map(
          (elem: JSX.IntrinsicAttributes, i: React.Key | null | undefined) => (
            <PlanItems id={0} type={""} month={0} year={0} key={i} {...elem} />
          )
        )}
      </div>
      <div className="plan__switch">
        <input
          type="checkbox"
          id="sw"
          defaultChecked={sw ? false : true}
          // checked={sw ? false : true}
          onClick={() => setSw(!sw)}
        />
        <label htmlFor="sw" className="plan__toggle">
          <span className="plan__toggle-handler"></span>
        </label>
      </div>
    </div>
  );
};
