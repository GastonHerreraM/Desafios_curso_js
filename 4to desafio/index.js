let Products = [];

class Product {
    constructor(code, name, priceSell, amount) {
        this.code = code;
        this.name = name;
        this.priceSell = priceSell;
        this.amount = amount;
    }
}

function addProduct() {   
    alert("Next, it'll be the info of the new product")
    let code = prompt("Please, enter product code:");
    let name = prompt("Please, enter product name:");
    let priceSell = parseFloat(prompt("Please, enter product price:"));
    let amount = parseInt(prompt("Please, enter product stock:"));
    let registerProduct = new Product(code, name, priceSell, amount);
    return registerProduct;
}

function changePrice(productCode, price){
    Products.map(function(data){
        if(data.code == productCode){
            data.priceSell = price;
        }
      });
}

function adjustStock(productCode, newAmount){
    Products.map(function(data){
        if(data.code == productCode){
            data.amount = newAmount;
        }
      });
}

function sell(productCode, quantity){
    let Total = 0;
    Products.map(function(data){
        if(data.code == productCode){
            if (data.amount > quantity){
                Total = data.priceSell * quantity;
                data.amount -= quantity;
            }else{
                alert("There is no stock");
            }
        }
    });
    return Total;
}

function showProduct() {
    for (let index = 0; index < Products.length; index++) {
        alert("Product name: " + Products[index].name + "\nPrice: " + Products[index].priceSell + "\nStock: " + Products[index].amount);
    }
}

function showMenu () {
    let option = prompt("Welcome to managementOS v.47\nPlease, choose an option:(if you are done, type EXIT)\n1.Add products \n2.Change Prices \n3.Adjust Stock \n4.Sell \n5.Show products list \n6.Search product \n7.Exit");
    return option;
}

function Main () {
    let selectedOption = showMenu();
    while (selectedOption !== "EXIT") {
        if (selectedOption !== "") {
            selectedOption = parseInt(selectedOption);
            if(!isNaN(selectedOption)){
                let proCode;
                switch(selectedOption) {
                    case 1:
                        Products.push(addProduct());
                        break;
                        
                    case 2:
                        if(Products.length != 0){
                            proCode = prompt("Please, enter product code:")
                            let newPrice = parseFloat(prompt("Now please, enter the products NEW price:"));
                            changePrice(proCode, newPrice);
                        } else {
                            alert("List is empty")
                        }
                        break;

                    case 3:
                        if(Products.length != 0){
                            proCode = prompt("Please, enter product code:")
                            let productStock = parseInt(prompt("Now please, enter the products NEW quantity:"));
                            adjustStock(proCode, productStock);
                        } else {
                            alert("List is empty")
                        }
                        break;
                        
                    case 4:
                        if(Products.length != 0){
                            proCode = prompt("Please, enter product code:")
                            let sellingSum = parseInt(prompt("Now please, enter the selling amount:"));
                            let total = parseFloat(sell(proCode, sellingSum));
                            if (total > 0){
                                alert("Total: " + total);
                            }
                        } else {
                            alert("List is empty")
                        }
                        break;

                    case 5:
                        if(Products.length != 0){
                            showProduct();
                        } else {
                            alert("List is empty")
                        }
                        break;

                    case 6:
                        if(Products.length != 0){
                            let typedCode = prompt("Enter products code you are looking for:")
                            Products.find((code) => this.code === typedCode)
                            if (typedCode != true){
                                alert("There is no product with that code")
                            } else {
                                alert(showProduct(typedCode));
                            }
                        } else {
                            alert("List is empty")
                        }
                        break;

                    default:
                        alert("invalid option");
                        break;
                }
            }else{
                alert("Please, enter the number of given options or type EXIT to finish");
            }
        }else{
            alert("Select one of the given options or type EXIT to finish");
        }
        selectedOption = showMenu();
    }
}

Main();