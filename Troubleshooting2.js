var $ = function (id) {
    return document.getElementById(id);
};

var fixPrinter = function() {
    var stringOutput = "";  //declares stringOutput, initially blank

    //define each troubleshooting tips
    var stringMessage1 = "Check the power cable.";
    var stringMessage2 = "Check the printer-computer cable.";
    var stringMessage3 = "Ensure printer software is installed.";
    var stringMessage4 = "Check / replace ink.";
    var stringMessage5 = "Check for paper jam.";
    var stringMessage6 = "Looks like everything is working fine!";

  
    var boolPrinting = $("not_printing").selected;  //returns a value of true when selecting the not_printing html id
    var boolRedLight = $("yes_redlight").selected;  //returns a value of true when selecting the yes_redlight html id
    var boolRecognised = $("not_recognised").selected;  //returns a value of true when selecting the not_recognized html id 
   
    //enter your code here and don't forget to send the output to the DOM
    switch (true){
        case boolPrinting === true && boolRedLight === true && boolRecognised === true:
            stringOutput = stringMessage2 + "\n" + stingMessage3 + "\n" + stringMessage4;
            break;
        case boolPrinting === true && boolRedLight === true && boolRecognised === false:
            stringOutput = stringMessage4 + "\n" + stringMessage5;
            break;
        case boolPrinting === true && boolRedLight === false && boolRecognised === true:
            stringOutput = stringMessage1 + "\n" + stringMessage2 + "\n" + stringMessage3;
            break;
        case boolPrinting === false && boolRedLight === true && boolRecognised === true:
            stringOutput = stringMessage3 + "\n" + stringMessage4;
            break;
        case boolPrinting === true && boolRedLight === false && boolRecognised === false:
            stringOutput = stringMessage5;
            break;
        case boolPrinting === false && boolRedLight === false && boolRecognised === false:
            stringOutput = stringMessage6;
            break;
        case boolPrinting === false && boolRedLight === false && boolRecognised === true:
            stringOutput = stringMessage3;
            break;
 
 
window.onload = function () {
    $("troubleshoot").onclick = fixPrinter;
};