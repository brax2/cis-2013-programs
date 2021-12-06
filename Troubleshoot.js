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
    if (boolPrinting === true){
        if (boolRedLight === true){
            if (boolRecognised === true){
                stringOutput = stringMessage2 +stringMessage3 + stringMessage4;
            } else stringOutput = stringMessage4 + stringMessage5; 
        } else if (boolRecognised === true){
        stringOutput = stringMessage1 + stringMessage2 + stringMessage3; 
        } else
            stringOutput = stringMessage5; 
        }else if (boolRedLight === true){
            if(boolRecognised === true){ 
            stringOutput = stringMessage3 + stringMessage4; 
        } else stringOutput = stringMessage4;
        }else if(boolRecognised === true){
            stringOutput = stringMessage3;
        }else stingOutput = stringMessage6;
        $("output").value =  stringOutput;
    };
 
 
 
window.onload = function () {
    $("troubleshoot").onclick = fixPrinter;
};