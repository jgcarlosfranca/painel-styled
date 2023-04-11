import React from "react";
import { StyledBeautifyConteiner } from "./BeatifyForms.styles";
import CodeSpinner from "../../../components/Spinner/Spinner";

const BeautifyForms = () => {
  return (
    <StyledBeautifyConteiner>
      <div className="pager">
        <button>
          <span></span>
        </button>
        <button>
          <span></span>
        </button>
        <button>
          <span></span>
        </button>
        <button>
          <span></span>
        </button>
        <button>
          <span></span>
        </button>
      </div>
      <div className="pager-glummy">
        <button>
          <span></span>
        </button>
        <button>
          <span></span>
        </button>
        <button>
          <span></span>
        </button>
        <button>
          <span></span>
        </button>
        <button>
          <span></span>
        </button>
      </div>
      <div className="wrapper-spiner"></div>
    </StyledBeautifyConteiner>
  );
};

export default BeautifyForms;
