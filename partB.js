function buttonandchecks() {
	var date;
    var name;
    var address;
    var postal;
	var phone;
    var type;
    var email;
    var choice;
    var orderMessage = "";
    var resultmessage = "";
    var vegNum = parseFloat(0);
    var fruitNum = parseFloat(0);
    var chickenNum = parseFloat(0);
    var porkNum = parseFloat(0);
    var vegPrice = parseFloat(30.00);
    var fruitPrice = parseFloat(20.00);
    var chickenPrice = parseFloat(7.00);
    var porkPrice = parseFloat(5.00);
    var totalvalue = parseFloat(0.00);

    //Personal Information Field
	date = document.getElementById("date").value;
    name = document.getElementById("name").value;
    address = document.getElementById("address").value;
    postal = document.getElementById("postal").value;
	phone = document.getElementById("phone").value;
    type = document.querySelector('input[name=type]:checked').value;
    email = document.getElementById("email").value;
    choice = document.querySelector('input[name=choice]:checked').value;

    //Food Hamper Field
    // check input quantity of vegetable hamper with if-statement 
    if (parseFloat(document.getElementById("vegetable").value) > 0) {
        vegNum = parseFloat(document.getElementById("vegetable").value);
        orderMessage += vegNum + " Vegetable Hampers" + "<br>";
        totalvalue += (vegNum*vegPrice);
    } else {
        orderMessage += "";
        totalvalue += (vegNum*vegPrice);
    }

    // check input quantity of fruit hamper with if-statement
    if (parseFloat(document.getElementById("fruit").value) > 0) {
        fruitNum = parseFloat(document.getElementById("fruit").value);
        orderMessage += fruitNum + " Fruit Hampers" + "<br>";
        totalvalue += (fruitNum*fruitPrice);
    } else {
        orderMessage += "";
        totalvalue += (fruitNum*fruitPrice);
    }

    // check input quantity of chicken with if-statement
    if (parseFloat(document.getElementById("chicken").value) > 0) {
        chickenNum = parseFloat(document.getElementById("chicken").value);
        orderMessage += chickenNum + " Fresh Chickens" + "<br>";
        totalvalue += (chickenNum*chickenPrice);
    } else {
        orderMessage += "";
        totalvalue += (chickenNum*chickenPrice);
    }

    // check input quantity of pork with if-statement
    if (parseFloat(document.getElementById("pork").value) > 0) {
        porkNum = parseFloat(document.getElementById("pork").value);
        orderMessage += porkNum + " Kg Pork" + "<br>";
        totalvalue += (porkNum*porkPrice);
    } else {
        orderMessage += "";
        totalvalue += (porkNum*porkPrice);
    }

	//add to message
    resultmessage += "ORDER SUMMARY:" + "<br>";
	resultmessage += "Order Date: " + date + "<br>";
    resultmessage += "Name: " + name + "<br>";
    resultmessage += "Address: " + address + ", " + postal + "<br>";
    resultmessage += type + ": " + phone + "<br>";
    resultmessage += "Email: " + email + "<br>";
    resultmessage += "Collection Method: " + choice + "<br><br>";
    resultmessage += "Item List:" + "<br>";
    resultmessage += orderMessage + "<br>";
    resultmessage += "Total Order: $" + totalvalue.toFixed(2);

    document.getElementById("result").innerHTML=resultmessage;

}