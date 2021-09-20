var floatAge, floatDays, intWeeks, floatMonths, intFortnights;
     
     floatAge = parseFloat(prompt("Enter Age"));
                               
     floatDays = parseFloat(floatAge*365.25).toFixed(2);
     intWeeks = parseInt(floatDays/7);
     floatMonths = parseFloat(floatAge*12).toFixed(2);
     intFortnights = parseInt(floatDays/14);
     
     alert("Since you are " + floatAge + " years old, then you are also " + floatDays + " days, " + intWeeks + " weeks, " + floatMonths + " months old, and " + intFortnights + " fortnights old!");
