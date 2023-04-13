import { useContext, useState } from "react";
import { MenuContext } from "./useContext/MenuContext";

export const Info = () => {
  const context: {
    setName?: any;
    nameerr?: boolean;
    setEmail?: any;
    emailerr?: boolean;
    setPhone?: any;
    phoneerr?: boolean;
  } = useContext(MenuContext);

  const { setName, nameerr, setEmail, emailerr, setPhone, phoneerr } = context;

  return (
    <form className="info__form">
      <div
        style={{
          alignItems: "end",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <label className="info__name">Name</label>
        <div className={nameerr ? "info__name-error" : "info__name-success"}>
          This field is required
        </div>
      </div>

      <input
        type="text"
        className={nameerr ? "info__input-error" : "info__input"}
        placeholder="e.g. Stephen King"
        autoComplete="none"
        required
        onChange={(e) => setName(e.target.value)}
      />
      <div
        style={{
          alignItems: "end",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <label className="info__email">Email Address</label>
        <div className={emailerr ? "info__email-error" : "info__email-success"}>
          This field is required
        </div>
      </div>

      <input
        type="email"
        className={emailerr ? "info__input-error" : "info__input"}
        placeholder="e.g. stephenking@lorem.com"
        autoComplete="none"
        required
        onChange={(e) => setEmail(e.target.value)}
      />

      <div
        style={{
          alignItems: "end",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <label className="info__phone">Phone number</label>
        <div className={phoneerr ? "info__phone-error" : "info__phone-success"}>
          This field is required
        </div>
      </div>
      <input
        type="tel"
        className={phoneerr ? "info__input-error" : "info__input"}
        placeholder="e.g. +1 234 567 890"
        autoComplete="none"
        required
        onChange={(e) => setPhone(e.target.value)}
      />
    </form>
  );
};
