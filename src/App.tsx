import { useState } from "react";
import { Main } from "./components/Main";
import { MenuContext } from "./components/useContext/MenuContext";
import { menu, plans, adds } from "./data";

function App() {
  const [item, setItem] = useState(1);
  const [sw, setSw] = useState(true);
  const [check, setCheck] = useState(0);
  const [service, setService] = useState(0);
  const [storage, setStorage] = useState(0);
  const [profile, setProfile] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState(0);
  const [nameerr, setNameerr] = useState(false);
  const [emailerr, setEmailerr] = useState(false);
  const [phoneerr, setPhoneerr] = useState(false);

  return (
    <MenuContext.Provider
      value={{
        menu,
        item,
        setItem,
        sw,
        setSw,
        plans,
        check,
        setCheck,
        adds,
        service,
        setService,
        storage,
        setStorage,
        profile,
        setProfile,
        name,
        setName,
        email,
        setEmail,
        phone,
        setPhone,
        nameerr,
        setNameerr,
        emailerr,
        setEmailerr,
        phoneerr,
        setPhoneerr,
      }}
    >
      <div className="app__main">
        <div className="app__container">
          <Main />
          <div></div>
        </div>
      </div>
    </MenuContext.Provider>
  );
}
export default App;
