import { useContext } from "react";
import { MenuContext } from "./useContext/MenuContext";

export const Summary = () => {
  const context: {
    sw?: boolean;
    setSw?: Function;
    check?: number;
    setItem?: Function;
    service?: number;
    storage?: number;
    profile?: number;
  } = useContext(MenuContext);

  const {
    sw,
    check = 0,
    setItem,
    service = 0,
    storage = 0,
    profile = 0,
  } = context;

  return (
    <div className="summary__container">
      <div className="summary__details">
        <div className="summary__details-plan">
          {(() => {
            if (check === 9 || check === 90) {
              return (
                <div
                  style={{
                    alignItems: "center",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <div>Arcade ({sw ? "Monthly" : "Yearly"})</div>
                    <span onClick={() => setItem?.(2)}>Change</span>
                  </div>
                  <div>
                    ${check}/{sw ? `mo` : `yr`}
                  </div>
                </div>
              );
            } else if (check === 12 || check === 120) {
              return (
                <div
                  style={{
                    alignItems: "center",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <div>Advanced ({sw ? "Monthly" : "Yearly"})</div>
                    <span onClick={() => setItem?.(2)}>Change</span>
                  </div>
                  <div>
                    ${check}/{sw ? `mo` : `yr`}
                  </div>
                </div>
              );
            } else if (check === 15 || check === 150) {
              return (
                <div
                  style={{
                    alignItems: "center",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <div>Pro ({sw ? "Monthly" : "Yearly"})</div>
                    <span onClick={() => setItem?.(2)}>Change</span>
                  </div>
                  <div>
                    ${check}/{sw ? `mo` : `yr`}
                  </div>
                </div>
              );
            }
          })()}
          <hr />
        </div>
        <div className="summary__details-extras">
          {service > 0 && (
            <div
              style={{
                alignItems: "center",
                display: "flex",
                justifyContent: "space-between",
                marginTop: "20px",
              }}
            >
              <div>Online</div>
              <div style={{ color: "hsl(213, 96%, 18%)" }}>
                +${service}/{sw ? `mo` : `yr`}
              </div>
            </div>
          )}
          {storage > 0 && (
            <div
              style={{
                alignItems: "center",
                display: "flex",
                justifyContent: "space-between",
                marginTop: "20px",
              }}
            >
              <div>Storage</div>
              <div style={{ color: "hsl(213, 96%, 18%)" }}>
                +${storage}/{sw ? `mo` : `yr`}
              </div>
            </div>
          )}
          {profile > 0 && (
            <div
              style={{
                alignItems: "center",
                display: "flex",
                justifyContent: "space-between",
                marginTop: "20px",
              }}
            >
              <div>Profile</div>
              <div style={{ color: "hsl(213, 96%, 18%)" }}>
                +${profile}/{sw ? `mo` : `yr`}
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="summary__total">
        <div>Total (per {sw ? "month" : "year"})</div>
        <div className="summary__total-number">
          +${check + service + storage + profile}/{sw ? `mo` : `yr`}
        </div>
      </div>
    </div>
  );
};
