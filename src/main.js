var table = document.getElementById('table');

for (var idx = 0; idx < data.count; idx++) {
    table.appendChild(addRow(data.results[idx], idx + 1));
    
}

var filterBox = document.getElementsByClassName('filter-box');
var sortMenu = document.getElementsByClassName('dropdown-item');
var dropdownContainer = document.getElementsByClassName('drop-down');
var sortButton = document.getElementsByClassName('sort');


sortButton[0].onclick = function(){
    updateRowData("ascending","rotation");
}
sortButton[1].onclick = function(){
    updateRowData("ascending","orbital");
}

filterBox[0].onclick = function(){
    dropdownContainer[0].style.display = "block";
}

sortMenu[0].onclick = function(){
    updateRowData("ascending","name");
    dropdownContainer[0].style.display = "none";
}

sortMenu[1].onclick = function(){
    updateRowData("descending","name");
    dropdownContainer[0].style.display = "none";
}


function addRow(object, rowNumber) {
    var keys = Object.entries(object);

    var row = document.createElement("div");
    row.classList.add("row");

    var divWrapper = document.createElement("div");
    var divText = document.createElement("div");
    divText.innerHTML = rowNumber;
    divWrapper.appendChild(divText);
    row.appendChild(divWrapper);
    row.appendChild(addColumn(object.name));
    row.appendChild(addColumn(object.rotation_period));
    row.appendChild(addColumn(object.orbital_period));
    row.appendChild(addColumn(object.diameter));
    row.appendChild(addColumn(object.climate));
    row.appendChild(addColumn(object.gravity));

    return row;
}

function addColumn(columnName) {
    var divWrapper = document.createElement("div");
    var divText = document.createElement("div");
    divText.innerHTML = columnName;
    divWrapper.appendChild(divText);
    return divWrapper;
}

function updateRowData(order, colName) {
    if(order == "ascending") {
        if(colName === "name")
            data.results.sort((a,b) => (a.name > b.name) ? 1 : -1);
        else if(colName === "orbital")
            data.results.sort((a,b) => (parseInt(a.orbital_period) > parseInt(b.orbital_period)) ? 1 : -1);
        else if(colName === "rotation")
            data.results.sort((a,b) => (parseInt(a.rotation_period) > parseInt(b.rotation_period)) ? 1 : -1);
    }
    else {
        if(colName === "name")
            data.results.sort((a,b) => (a.name < b.name) ? 1 : -1);
        else if(colName === "orbital")
            data.results.sort((a,b) => (parseInt(a.orbital_period) < parseInt(b.orbital_period)) ? 1 : -1);
        else if(colName === "rotation")
            data.results.sort((a,b) => (parseInt(a.rotation_period) < parseInt(b.rotation_period)) ? 1 : -1);
    }

    clearRow(data.count);
    for (var idx = 0; idx < data.count; idx++) {
        table.appendChild(addRow(data.results[idx], idx + 1));
        
    }
}

function clearRow(count) {
    var table = document.getElementById('table');
    for (var x = 0; x < count; x++) {
        table.removeChild(table.lastChild);
    }
}