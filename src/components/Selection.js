import React from "react";
import BgTriangle from "../images/bg-triangle.svg";
import IconPaper from "../images/icon-paper.svg";
import IconRock from "../images/icon-rock.svg";
import IconScissors from "../images/icon-scissors.svg";

const Selection = () => {
  return (
    <div className="Selection-Container">
      <div className="Inner-Circle-Paper Inner-Circle">
        <img src={IconPaper} alt="Paper" className="Paper" />
      </div>
      <div className="Inner-Circle-Rock Inner-Circle">
        <img src={IconRock} alt="Rock" className="Rock" />
      </div>
      <div className="Inner-Circle-Scissors Inner-Circle">
        <img src={IconScissors} alt="Scissors" className="Scissors" />
      </div>
    </div>
  );
};

export default Selection;
