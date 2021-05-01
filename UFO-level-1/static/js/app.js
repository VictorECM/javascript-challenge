// from data.js
var tableData = data;

// References for input

var $tbody = d3.select("tbody");
var button = d3.select("#filter-btn");
var inputFieldDate = d3.select("#datetime");
var inputFieldCity = d3.select("#city");
var columns = ["datetime", "city", "state", "country", "shape", "dirationMinutes", "comments"]

// Input data into html

var addData = (dataInput) => {
    dataInput.forEach(ufoSightings => {
        var row = $tbody.append("tr");
        columns.forEach(column => row.append("td").text(ufoSightings[column])
        )
    });
}

addData(tableData);

//Filter

button.on("click", () => {

    d3.event.preventDefault();

    var inputDate = inputFieldDate.property("value").trim();
    var filterDate = tableData.filter(tabledata => tableData.datetime === inputDate);

    $tbody.html("");
    let response = {
        filterDate
    }

    if(response.filterDate.lenght !==0){
        addDate(filterDate);
    }

        else{
            $tbody.append("tr").append("td").text("The Star Gate has not been opened here.")
        }
})