// script.js
function sortTable(columnIndex) {
  const table = document.getElementById("userTable");
  const rows = Array.from(table.rows).slice(1);
  const isNumeric = !isNaN(rows[0].cells[columnIndex].innerText);

  rows.sort((row1, row2) => {
    const cell1 = row1.cells[columnIndex].innerText;
    const cell2 = row2.cells[columnIndex].innerText;

    if (isNumeric) {
      return parseInt(cell1) - parseInt(cell2);
    } else {
      return cell1.localeCompare(cell2);
    }
  });

  rows.forEach((row) => table.appendChild(row));
}
