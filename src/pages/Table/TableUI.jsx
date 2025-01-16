import * as React from "react";
import Table from "../../component/Table";
import useTableHook from "../../hooks/TableHook";

const headerCells = [
  {
    id: "name",
    numeric: false,
    disablePadding: true,
    label: "Dessert (100g serving)",
  },
  {
    id: "calories",
    numeric: true,
    disablePadding: false,
    label: "Calories",
  },
  {
    id: "fat",
    numeric: true,
    disablePadding: false,
    label: "Fat (g)",
  },
  {
    id: "carbs",
    numeric: true,
    disablePadding: false,
    label: "Carbs (g)",
  },
  {
    id: "protein",
    numeric: true,
    disablePadding: false,
    label: "Protein (g)",
  },
];

function TableUI() {
  const { content, retrieveNextRecord, maxContent, refresh } = useTableHook();

  return (
    <React.Fragment>
      {/* CONTENT */}
      <Table
        title={"Nutrition"}
        headerCells={headerCells}
        content={content}
        retrieveNextRecord={retrieveNextRecord}
        maxContent={maxContent}
        refresh={refresh}
      />
    </React.Fragment>
  );
}

export default TableUI;
