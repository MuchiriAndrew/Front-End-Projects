function validateForm() {

    var dayValue = document.getElementById("day").value;
    var monthValue = document.getElementById("month").value;
    var yearValue = document.getElementById("year").value;

    var dayLabel = document.getElementById("daylabel");
    var monthLabel = document.getElementById("monthlabel");
    var yearLabel = document.getElementById("yearlabel");

    var dayTb = document.getElementById("day");
    var monthTb = document.getElementById("month");
    var yearTb = document.getElementById("year");


    //dates Validation
{   
    if(dayValue=='' || dayValue==null){
        document.getElementById("day-error-message").innerHTML="This field is required";
        dayLabel.style.color="hsl(0, 100%, 67%)";
        dayTb.style.borderColor="hsl(0, 100%, 67%)";

    }

    if(parseInt(dayValue)>31){
        document.getElementById("day-error-message").innerHTML="Must be a valid day";
        dayLabel.style.color="hsl(0, 100%, 67%)";
        dayTb.style.borderColor="hsl(0, 100%, 67%)";
    }
    
//30 days of September, April, June and November

    if(monthValue==4  && dayValue>30){
        document.getElementById("day-error-message").innerHTML="Must be a valid day";
        dayLabel.style.color="hsl(0, 100%, 67%)";
        dayTb.style.borderColor="hsl(0, 100%, 67%)";
    }

    if(monthValue==9  && dayValue>30){
        document.getElementById("day-error-message").innerHTML="Must be a valid day";
        dayLabel.style.color="hsl(0, 100%, 67%)";
        dayTb.style.borderColor="hsl(0, 100%, 67%)";
    }

    if(monthValue==6  && dayValue>30){
        document.getElementById("day-error-message").innerHTML="Must be a valid day";
        dayLabel.style.color="hsl(0, 100%, 67%)";
        dayTb.style.borderColor="hsl(0, 100%, 67%)";
    }

    if(monthValue==11  && dayValue>30){
        document.getElementById("day-error-message").innerHTML="Must be a valid day";
        dayLabel.style.color="hsl(0, 100%, 67%)";
        dayTb.style.borderColor="hsl(0, 100%, 67%)";
    }


//February Leap Years

    if(monthValue==2 && yearValue%4==0 && dayValue>29){
        document.getElementById("day-error-message").innerHTML="Must be a valid day";
        dayLabel.style.color="hsl(0, 100%, 67%)";
        dayTb.style.borderColor="hsl(0, 100%, 67%)";
    }

    if(monthValue==2 && yearValue%4!=0 && dayValue>28){
        document.getElementById("day-error-message").innerHTML="Must be a valid day";
        dayLabel.style.color="hsl(0, 100%, 67%)";
        dayTb.style.borderColor="hsl(0, 100%, 67%)";
    }



    if(monthValue=='' || monthValue==null){
        document.getElementById("month-error-message").innerHTML="This field is required";
        monthLabel.style.color="hsl(0, 100%, 67%)";
        monthTb.style.borderColor="hsl(0, 100%, 67%)";
    }
    
    if(parseInt(monthValue)>12){
        document.getElementById("month-error-message").innerHTML="Must be a valid month";
        monthLabel.style.color="hsl(0, 100%, 67%)";
        monthTb.style.borderColor="hsl(0, 100%, 67%)";
    }

    if(yearValue=='' || yearValue==null){
        document.getElementById("year-error-message").innerHTML="This field is required";
        yearLabel.style.color="hsl(0, 100%, 67%)";
        yearTb.style.borderColor="hsl(0, 100%, 67%)";
    }

    if(yearValue> new Date().getFullYear()){//new Date().getFullYear() is a function for getting the current time
         document.getElementById("year-error-message").innerHTML="Must be in the past";
         yearLabel.style.color="hsl(0, 100%, 67%)";
        yearTb.style.borderColor="hsl(0, 100%, 67%)";       
    }

    else{
        return submitForm();
    }
}
}

function submitForm() {

    console.log("garra submit this form!!")
}