import React from "react";
import TableSectionHeader from "./TableSectionHeader";
import ListMatchSoccer from "./ListMatchSoccer";

const TableSection = () => {
  return (
    <div>
      <TableSectionHeader />
      <ListMatchSoccer />
      <ListMatchSoccer />
      <ListMatchSoccer />
    </div>
  );
};

export default TableSection;
