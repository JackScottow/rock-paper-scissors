import React from "react";
import IconPaper from "../images/icon-paper.svg";
import IconRock from "../images/icon-rock.svg";
import IconScissors from "../images/icon-scissors.svg";

const Selection = ({ handlePlayerChoice }) => {
  return (
    <div className="Selection-Container">
      <div className="Outer-Circle-Paper Outer-Circle" title="Paper!" onClick={() => handlePlayerChoice("Paper")}>
        <div className="Inner-Circle">
          <img src={IconPaper} alt="Paper" className="Paper" />
        </div>
      </div>
      <div className="Outer-Circle-Rock Outer-Circle" title="Rock!" onClick={() => handlePlayerChoice("Rock")}>
        <div className="Inner-Circle">
          <img src={IconRock} alt="Rock" className="Rock" />
        </div>
      </div>
      <div className="Outer-Circle-Scissors Outer-Circle" title="Scissors!" onClick={() => handlePlayerChoice("Scissors")}>
        <div className="Inner-Circle">
          <img src={IconScissors} alt="Scissors" className="Scissors" />
        </div>
      </div>
    </div>
  );
};

export default Selection;
