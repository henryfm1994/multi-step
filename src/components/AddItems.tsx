import { useContext, useState } from "react";
import { MenuContext } from "./useContext/MenuContext";

export const AddItems = (elem: {
  id: number;
  type: string;
  desc: string;
  month: number;
  year: number;
}) => {
  const { id, type, desc, month, year } = elem;

  const context: {
    sw?: any;
    setService?: any;
    setStorage?: any;
    setProfile?: any;
  } = useContext(MenuContext);

  const { sw, setService, setStorage, setProfile } = context;

  const [selected, setSelected] = useState(false);

  const handleItem = () => {
    setSelected(!selected);
    switch (id) {
      case 1:
        if (sw) {
          return setService(1);
        }
        return setService(10);

      case 2:
        if (sw) {
          return setStorage(2);
        }
        return setStorage(20);

      case 3:
        if (sw) {
          return setProfile(2);
        }
        return setProfile(20);
    }
  };

  return (
    <div
      className={selected ? "add__item selected" : "add__item"}
      onClick={() => handleItem()}
    >
      <div className="add__data">
        <input
          type="checkbox"
          name="add"
          className="add__check"
          defaultChecked={false}
          checked={selected}
          onClick={() => handleItem()}
        />
        <span className="checkmark"></span>
        <div className="add__details">
          <div className="add__type">{type}</div>
          <div className="add__desc">{desc}</div>
        </div>
      </div>
      <div className="plan__price">
        {sw ? (
          <div className="add__price-datails">+${month}/mo</div>
        ) : (
          <div className="add__price-datails">+${year}/yr </div>
        )}
      </div>
    </div>
  );
};
