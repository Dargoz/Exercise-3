var table = document.getElementById('table');
var nameList = [];
for (var idx = 0; idx < data.count; idx++) {
    table.appendChild(addRow(data.results[idx], idx + 1, 6));
    nameList.push(data.results[idx].name);
}

var filterBox = document.getElementsByClassName('filter-box');
var sortMenu = document.getElementsByClassName('dropdown-item');
var dropdownContainer = document.getElementsByClassName('drop-down');

filterBox[0].onclick = function(){
    dropdownContainer[0].style.display = "block";
}

sortMenu[0].onclick = function(){
    updateRowData("ascending");
    dropdownContainer[0].style.display = "none";
}

sortMenu[1].onclick = function(){
    updateRowData("descending");
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

function updateRowData(order) {
    if(order == "ascending") {nameList.sort();}
    else {
        nameList.sort();
        nameList.reverse();
    }

    clearRow(data.count);
    var nameListLength = nameList.length;
    for (var i = 0; i < nameListLength; i++) {
        for (var j = 0; j < data.count; j++) {
            if (data.results[j].name == nameList[i]) {
                
                table.appendChild(addRow(data.results[j], i + 1, 6));
                break;
            }
        }
    }
}

function clearRow(count) {
    var table = document.getElementById('table');
    for (var x = 0; x < count; x++) {
        table.removeChild(table.lastChild);
    }
}