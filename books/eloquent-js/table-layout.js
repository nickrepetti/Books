/*
 * This program takes an array of arrays of table cells,
 * and builds up a string containing a nicely laid out table
 *
 * For example:
 * [["Kilimanjaro", "5895", "Tanzania"], ["Everest", "8848", "Nepal"]]
 *
 * Would product the table:
 *
 * name         height country
 * ------------ ------ --------
 * Kilimanjaro    5895 Tanzania
 * Everest        8848 Nepal
 *
 */

const mountains = [["Kilimanjaro", "5895", "Tanzania"], ["Everest", "8848", "Nepal"]];

/* 
 * Returns an array containing the maximum height for each row
 *
 */
function rowHeights(rowArr) {
  return rowArr.map(function(cellArr) {
    return cellArr.reduce(function(max, cell) {
      return Math.max(max, cell.minHeight());
    }, 0);
  }
}


