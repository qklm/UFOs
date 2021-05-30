// import the data from data.js
const tableData = data;
var tbody = d3.select("tbody");
// initial function for iterating
function buildTable(data) {
    tbody.html("");
    data.forEach((dataRow) => {
        let row = tbody.append("tr");
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
            }
        );
    });
}

// snagging date range filter and building table within the new range
function handleClick(){
    let date = d3.select("#datetime").property("values");
    let filteredData = tableData
    if (data) {
        filteredData = filteredData.filter(row => row.datetime == date);
    };
    buildTable(filteredData);
}

d3.select("#filter-btn").on("click", handleClick);

buildTable(tableData);