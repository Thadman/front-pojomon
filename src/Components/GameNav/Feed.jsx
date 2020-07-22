import React from "react";
import FeedFood from "./FeedFood";
// import FeedVitamin from "./FeedVitamin";

const Feed = (props) => {
  const monster = props;
  return (
    <>
      <div>
        {monster && <FeedFood monster={monster} />}
        {/* <FeedVitamin /> */}
      </div>
    </>
  );
};

export default Feed;
