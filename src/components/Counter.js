import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Counter = ({ value, func }) => {
  return (
    <div className="counter">
      {value.map((elem, index) => {
        return (
          <div className="allCounter">
            <div className="counterButtons">
              <span>
                {value[index] > 0 ? (
                  <button
                    onClick={() => {
                      const newValue = [...value];
                      newValue[index]--;
                      func(newValue);
                    }}
                  >
                    <FontAwesomeIcon icon="minus" className="minusPlus" />
                  </button>
                ) : (
                  <button disabled>
                    <FontAwesomeIcon icon="minus" className="minusPlus" />
                  </button>
                )}
              </span>
              <div className="counterBox">{elem}</div>

              <span>
                {value[index] < 10 ? (
                  <button
                    onClick={() => {
                      const newValue = [...value];
                      newValue[index]++;
                      func(newValue);
                    }}
                  >
                    <FontAwesomeIcon icon="plus" className="minusPlus" />
                  </button>
                ) : (
                  <button disabled>
                    <FontAwesomeIcon icon="plus" className="minusPlus" />
                  </button>
                )}
              </span>
            </div>
            <div>
              <button
                className="reset"
                onClick={() => {
                  const newValue = [...value];
                  newValue[index] = 0;
                  func(newValue);
                }}
              >
                Reset
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Counter;
