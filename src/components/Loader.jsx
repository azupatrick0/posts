import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

/**
 * Loader
 *
 * @returns {JSX}
 */
const Loader = () => {
  return (
    <>
      <div className="loader">
        <CircularProgress />
      </div>
    </>
  );
};

export default Loader;
