    const actID = 2110990163 //can't change value of const.
    let actEmail = "amit@gmail.com"//can change value of let
    var actPass = "@amit123" //can change value of var.
    actCity = "Uttar pradesh" //can declare variable like this; 
    let actstate; //undefined



    //actID = 2 //actId in a const variable.

    actEmail = "Kumar@gmail.com"
    actPass = "212121"
    actCity = "Jaipur"

    console.log(actID)

    /*
    Perfer not to use "var"
    because of issue in block scope and funtional scope
    */

    console.table([actID,actEmail,actPass,actCity,actstate])// [] is an array