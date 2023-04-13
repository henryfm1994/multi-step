import { useContext } from "react";
import { MenuContext } from "./useContext/MenuContext";

export const Buttons = () => {
  const context: {
    check?: number;
    menu?: any;
    item?: number;
    setItem?: any;
    name?: string;
    setName?: Function;
    setNameerr?: Function;
    email?: string;
    setEmail?: Function;
    setEmailerr?: Function;
    phone?: number;
    setPhone?: Function;
    setPhoneerr?: Function;
  } = useContext(MenuContext);

  const {
    check,
    item = 0,
    setItem,
    name = "",
    setName,
    setNameerr,
    email = "",
    setEmail,
    setEmailerr,
    phone = 0,
    setPhone,
    setPhoneerr,
  } = context;

  const next = () => {
    if (item === 1) {
      if (name.trim() === "") {
        return setNameerr?.(true);
      } else setNameerr?.(false);

      if (email.trim() === "") {
        return setEmailerr?.(true);
      } else setEmailerr?.(false);
      if (phone === 0) {
        return setPhoneerr?.(true);
      } else setPhoneerr?.(false);
      setName?.("");
      setEmail?.("");
      setPhone?.(0);
      setItem(item + 1);
    } else if (item < 5) {
      setItem(item + 1);
    }
  };

  const back = () => {
    if (item > 1) {
      setNameerr?.(false);
      setEmailerr?.(false);
      setPhoneerr?.(false);
      setItem(item - 1);
    }
  };

  return (
    <div className="content__buttons">
      {(() => {
        switch (item) {
          case 1:
            return (
              <>
                <button
                  className="content__button-back"
                  onClick={() => back()}
                  style={{ opacity: 0, cursor: "default" }}
                  disabled
                >
                  Go back
                </button>
                <button
                  type="submit"
                  className="content__button-next"
                  onClick={() => next()}
                >
                  Next Step
                </button>
              </>
            );

          case 2:
            return (
              <>
                <button className="content__button-back" onClick={() => back()}>
                  Go back
                </button>
                <button className="content__button-next" onClick={() => next()}>
                  Next Step
                </button>
              </>
            );

          case 3:
            return (
              <>
                <button className="content__button-back" onClick={() => back()}>
                  Go back
                </button>
                <button className="content__button-next" onClick={() => next()}>
                  Next Step
                </button>
              </>
            );

          case 4:
            return (
              <>
                <button className="content__button-back" onClick={() => back()}>
                  Go back
                </button>
                <button
                  className="content__button-confirm"
                  onClick={() => next()}
                >
                  Confirm
                </button>
              </>
            );
        }
      })()}
    </div>
  );
};
