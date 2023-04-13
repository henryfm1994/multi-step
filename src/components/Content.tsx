import { useContext } from "react";
import { Add } from "./Add";
import { Buttons } from "./Buttons";
import { Header } from "./Header";
import { Info } from "./Info";
import { Plan } from "./Plan";
import { Summary } from "./Summary";
import { MenuContext } from "./useContext/MenuContext";

export const Content = () => {
  const context: { menu?: any; item?: number } = useContext(MenuContext);

  const { item } = context;

  return (
    <div className="content__container">
      <div>
        <Header />
        {(() => {
          switch (item) {
            case 1:
              return <Info />;
            case 2:
              return <Plan />;
            case 3:
              return <Add />;
            case 4:
              return <Summary />;
          }
        })()}
      </div>

      <Buttons />
    </div>
  );
};
