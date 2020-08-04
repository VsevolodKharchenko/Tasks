const table = document.querySelector('table');
const rows = document.querySelectorAll('tr');
const rowsArray = Array.from(rows);

table.addEventListener('click', (event) => {
  const rowIndex = rowsArray.findIndex(row => row.contains(event.target));
  const columns = Array.from(rowsArray[rowIndex].querySelectorAll('td'));
  const columnIndex = columns.findIndex(column => column == event.target);
  console.log(rowIndex, columnIndex)
})