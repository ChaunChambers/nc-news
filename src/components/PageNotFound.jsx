import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div>
      <br />
      <h1 className="not-found-text">Page Not Found</h1>
      <br />
      {/* <Link to={`/`} className="input-submit margin-right-small ">
        Home
      </Link>
      <Link to={`/articles`} className="input-submit margin-right-small ">
        Articles{" "}
      </Link>
      <Link
        to={`/articles?topic=coding`}
        className="input-submit margin-right-small "
      >
        Coding{" "}
      </Link>
      <Link
        to={`/articles?topic=football`}
        className="input-submit margin-right-small "
      >
        Football{" "}
      </Link>
      <Link to={`/articles?topic=cooking`} className="input-submit  ">
        Cooking{" "}
      </Link> */}
    </div>
  );
};

export default PageNotFound;
