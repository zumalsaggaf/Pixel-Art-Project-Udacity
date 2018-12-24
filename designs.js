/* The following code is for making a table and from 
    that table we are able to color specific cells, 
    similar to coloring excel cells*/

// Get the table sizes
document.getElementById('sizePicker').addEventListener('submit', function(e){
    // Prevent from making a table until there are inputs
    e.preventDefault();
    makeGrid()});

    function makeGrid() {

        // These are the variables that we get from the html file 
        var makeTable = document.getElementById("pixelCanvas");
        makeTable.innerHTML = "";
        var getHeight = document.getElementById("inputHeight").value;
        var getWidth =  document.getElementById("inputWidth").value;

        // Print the columns using loop
        for(var h = 0; h < getHeight; h++){
            var height = document.createElement("tr");

            // Print cells within the columns
            for(var w = 0; w < getWidth; w++){
                // This is for creating the cells 
                var cell = document.createElement("td");
                height.appendChild(cell);

                // Select color input
                cell.addEventListener('click', function(e){
                    // Get the color and assign it to a variable
                    var color = document.getElementById("colorPicker").value;
                    e.target.style.backgroundColor = color;

                });
            }
            // Printg the table
            makeTable.appendChild(height);
            }
            
    }
