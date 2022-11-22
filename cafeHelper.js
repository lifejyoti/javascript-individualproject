"use strict"
const $ = selector => document.querySelector(selector);

var totalOrderValue = 0;
    
function espresso()
{
    var x = document.getElementById("order");
    var option = document.createElement("option");
    option.text = "$1.95 - Espresso";
    x.add(option);
    totalOrderValue = totalOrderValue + 1.95;
    document.getElementById("total").innerHTML = "Total: $" + Number(totalOrderValue).toFixed(3);
}

function latte()
{
    var x = document.getElementById("order");
    var option = document.createElement("option");
    option.text = "$2.95 - Latte";
    x.add(option);
    totalOrderValue = totalOrderValue + 2.95;
    document.getElementById("total").innerHTML = "Total: $" + Number(totalOrderValue).toFixed(3);
}

function cappuccino()
{
    var x = document.getElementById("order");
    var option = document.createElement("option");
    option.text = "$3.45 - Cappuccino";
    x.add(option);
    totalOrderValue = totalOrderValue + 3.45;
    document.getElementById("total").innerHTML = "Total: $" + Number(totalOrderValue).toFixed(3);
}

function coffee()
{
    var x = document.getElementById("order");
    var option = document.createElement("option");
    option.text = "$1.95 - Drip coffee";
    x.add(option);
    totalOrderValue = totalOrderValue + 1.95;
    document.getElementById("total").innerHTML = "Total: $" + Number(totalOrderValue).toFixed(3);
}
function biscotti()
{
    var x = document.getElementById("order");
    var option = document.createElement("option");
    option.text = "$1.95 - Biscotti";
    x.add(option);
    totalOrderValue = totalOrderValue + 1.95;
    document.getElementById("total").innerHTML = "Total: $" + Number(totalOrderValue).toFixed(3);
}

function scone()
{
    var x = document.getElementById("order");
    var option = document.createElement("option");
    option.text = "$2.95 - Scone";
    x.add(option);
    totalOrderValue = totalOrderValue + 2.95;
    document.getElementById("total").innerHTML = "Total: $" + Number(totalOrderValue).toFixed(3);
}


function placeOrder()
{
    window.location.href = "checkout.html";
}

function clearOrder()
{
    var orderBox = document.getElementById("order");
    while (orderBox.options.length > 0) {
        orderBox.remove(0);
    }

    document.getElementById("total").innerHTML = "&nbsp;";
    totalOrderValue = 0;
}

document.addEventListener("DOMContentLoaded", () => {
	$("#place_order").addEventListener("click", placeOrder);
	$("#clear_order").focus();
});


document.addEventListener("DOMContentLoaded", () => {
	$("#clear_order").addEventListener("click", clearOrder);
	$("#clear_order").focus();
});

document.addEventListener("DOMContentLoaded", () => {
	$("#espresso").addEventListener("click", espresso);
});

document.addEventListener("DOMContentLoaded", () => {
	$("#latte").addEventListener("click", latte);
});

document.addEventListener("DOMContentLoaded", () => {
	$("#cappuccino").addEventListener("click", cappuccino);
});
document.addEventListener("DOMContentLoaded", () => {
	$("#coffee").addEventListener("click", coffee);
});
document.addEventListener("DOMContentLoaded", () => {
	$("#biscotti").addEventListener("click", biscotti);
});
document.addEventListener("DOMContentLoaded", () => {
	$("#scone").addEventListener("click", scone);
});

