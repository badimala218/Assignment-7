/*eslint-env browser*/

function display_menu() 
{
    "use strict";
    window.console.log("Welcome to the Product Inventory Management System");
    window.console.log("");
    window.console.log("COMMAND MENU");
    window.console.log("view - View all products");
    window.console.log("update - Update an existing product's inventory");
    window.console.log("exit - Exit the program");
    window.console.log("");
}

function view(inventory_list) 
{
    "use strict";
    inventory_list.forEach(function (product) 
    {
        window.console.log(
            `${product[0]} ${product[1]} (${product[2]}) $${product[3]}`);
    });
    window.console.log("");
}

function update(inventory_list) 
{
    "use strict";
    let num, product;
    num = parseInt(window.prompt("sku number to update"), 10);
    if (isNaN(num)) 
    {
        window.alert("Invalid sku");
    }
    else 
    {
        let found = false;
        let invalidSku = false;
        for (let i = 0; i < inventory_list.length; i++)
        {       
            if (inventory_list[i][0] == num)
            {
                let newQuantity = parseInt(
                    window.prompt("Enter new stock quantity:"), 10);
                if (isNaN(newQuantity) || newQuantity < 0)
                {
                    window.alert("Invalid quantity.");
                    invalidSku = true;
                }
                else 
                {
                    inventory_list[i][2] = newQuantity;
                    found = true;
                    break;
                }
            }
        }
        if (found == false && invalidSku == false)
        {
            window.alert("Invalid sku number");
        }
    }
}

function main() {
    "use strict";
    let command;
    
    display_menu();
    
    const inventory = [[1111, "GameCube", 1, 35.50],
                       [2222, "Gameboy", 2, 36.50], 
                       [3333, "PlayStation", 3, 37.50],
                       [4444, "DS Lite", 4, 38.50], 
                       [5555, "XBox", 5, 39.50]];
    
    while (true) 
    {
        command = window.prompt("Enter command");
        if (command !== null) {
            if (command === "view") {
                view(inventory);
            } else if (command === "update") {
                update(inventory);
            } else if (command === "exit") {
                break;
            } else {
                window.alert("That is not a valid command.");
            }
        } else {
            break;
        }
    }
    window.console.log("Program terminated.");
}
main();