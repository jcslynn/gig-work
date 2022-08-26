import React from "react";
import TableauViz from "../../tableau";

const AggregateEarningsPerLocation = () => {
  return (
    <>
      <TableauViz
        src="https://public.tableau.com/views/AggregateStory/Map?:language=en-US&:display_count=n&:origin=viz_share_link"
        style={{ width: "100%" }}
      />
    </>
  );
};

export default AggregateEarningsPerLocation;
