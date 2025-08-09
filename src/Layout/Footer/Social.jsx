import React from "react";

import github from "../../../src/assets/footer/github.png";
import linkedin from "../../../src/assets/footer/linkedin.png";
import facebook from "../../../src/assets/footer/facebook.png";

const Social = () => {
  return (
    <div>
      <ul className="flex items-center justify-center gap-3">
        <li>
          <a href="">
            <img src={github} alt="" className="w-8" />
          </a>
        </li>
        <li>
          <a href="">
            <img src={linkedin} alt="" className="w-8" />
          </a>
        </li>
        <li>
          <a href="">
            <img src={facebook} alt="" className="w-8" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Social;
