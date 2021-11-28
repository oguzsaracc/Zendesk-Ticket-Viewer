// customStyle is for the row design in our table. If the rowIndex which is the position of row is divisible by 2 color will be different. Else, a different color.
const customStyle = (cell, row, rowIndex, colIndex) => {
  if (rowIndex % 2 === 0) {
    return {
      backgroundColor: "#D3D3D3",
    };
  }
  return {
    backgroundColor: "#E5E4E2",
  };
};

// CustomTable; we are choosing that what we are going to display to in our project. Note that, you could do various changes in this column.
const CustomTable = [
  {
    dataField: "id",
    text: "Ticket ID",
    style: (cell, row, rowIndex, colIndex) =>
      customStyle(cell, row, rowIndex, colIndex),
  },
  {
    dataField: "subject",
    text: "Subject",
    style: (cell, row, rowIndex, colIndex) =>
      customStyle(cell, row, rowIndex, colIndex),
  },
  {
    dataField: "created_at",
    text: "Created At",
    style: (cell, row, rowIndex, colIndex) =>
      customStyle(cell, row, rowIndex, colIndex),
  },
  {
    dataField: "status",
    text: "Status",
    style: (cell, row, rowIndex, colIndex) =>
      customStyle(cell, row, rowIndex, colIndex),
  },
];

export default CustomTable;
