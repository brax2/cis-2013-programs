var $ = function (id)
{
    return document.getElementById
};

var calculate_click = function ()
{
    var intGradeOption, floatTotalPts, floatHwPts, floatMidPts, floatFinPts, stringFinalGrade;
    
    floatHwPts = parseFloat($("hw_pts").value);
    
    floatMidPts = parseFloat($("mid_pts").value);
    
    floatFinPts = parseFloat($("fin_pts").value);
    
    floatTotalPts = parseFloat (floatHwPts + floatFinPts + floatMidPts);
    
    intGradeOption = parseFloat($("grade_option").value);
    
if (intGradeOption===1)
{
    if(floatTotalPts >= 80)
    {
        stringFinalGrade = "You Passed";
    }
        else
        {
            stringFinalGrade = "YouFailed";
        }
}
else
{
    if (floatTotalPts>=90) {
    stringFinalGrade = "A";
}
        else if (floatTotalPts<90 && floatTotalPts>=80)
    {
    stringFinalGrade = "B";
    }
            else if (floatTotalPts<80 && floatTotalPts>=70)
        {
    stringFinalGrade = "C";
        }
                else if (floatTotalPts<70 && floatTotalPts>=60)
            {
    stringFinalGrade = "D";
            }
                    else
                    {
    stringFinalGrade = "F";
                    }
}

    $("final_grade").value = stringFinalGrade;
  
}

window.onload = function ()
{
    $("final_grade").value = ""; //makes the Final Grade blank until page loads
    $("calculate").onclick = calculate_click; //activates the calculations once button is clicked
    $("hw_pts").focus(); //starts the default cursor on first DOM input
};
