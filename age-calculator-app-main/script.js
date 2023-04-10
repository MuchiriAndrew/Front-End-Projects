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

   else if(dayValue>31){
        document.getElementById("day-error-message").innerHTML="Must be a valid day";
        dayLabel.style.color="hsl(0, 100%, 67%)";
        dayTb.style.borderColor="hsl(0, 100%, 67%)";
    }
    
//30 days of September, April, June and November

    else if(monthValue==4  && dayValue>30){
        document.getElementById("day-error-message").innerHTML="Must be a valid day";
        dayLabel.style.color="hsl(0, 100%, 67%)";
        dayTb.style.borderColor="hsl(0, 100%, 67%)";
    }

    else if(monthValue==9  && dayValue>30){
        document.getElementById("day-error-message").innerHTML="Must be a valid day";
        dayLabel.style.color="hsl(0, 100%, 67%)";
        dayTb.style.borderColor="hsl(0, 100%, 67%)";
    }

    else if(monthValue==6  && dayValue>30){
        document.getElementById("day-error-message").innerHTML="Must be a valid day";
        dayLabel.style.color="hsl(0, 100%, 67%)";
        dayTb.style.borderColor="hsl(0, 100%, 67%)";
    }

    else if(monthValue==11  && dayValue>30){
        document.getElementById("day-error-message").innerHTML="Must be a valid day";
        dayLabel.style.color="hsl(0, 100%, 67%)";
        dayTb.style.borderColor="hsl(0, 100%, 67%)";
    }

//February Leap Years

    else if(monthValue==2 && yearValue%4==0 && dayValue>29){
        document.getElementById("day-error-message").innerHTML="Must be a valid day";
        dayLabel.style.color="hsl(0, 100%, 67%)";
        dayTb.style.borderColor="hsl(0, 100%, 67%)";
    }

    else if(monthValue==2 && yearValue%4!=0 && dayValue>28){
        document.getElementById("day-error-message").innerHTML="Must be a valid day";
        dayLabel.style.color="hsl(0, 100%, 67%)";
        dayTb.style.borderColor="hsl(0, 100%, 67%)";
    }

    else if(monthValue=='' || monthValue==null){
        document.getElementById("month-error-message").innerHTML="This field is required";
        monthLabel.style.color="hsl(0, 100%, 67%)";
        monthTb.style.borderColor="hsl(0, 100%, 67%)";
    }
    
    else if(monthValue>12){
        document.getElementById("month-error-message").innerHTML="Must be a valid month";
        monthLabel.style.color="hsl(0, 100%, 67%)";
        monthTb.style.borderColor="hsl(0, 100%, 67%)";
    }

    else if(yearValue=='' || yearValue==null){
        document.getElementById("year-error-message").innerHTML="This field is required";
        yearLabel.style.color="hsl(0, 100%, 67%)";
        yearTb.style.borderColor="hsl(0, 100%, 67%)";
    }

    else if(yearValue> new Date().getFullYear()){//new Date().getFullYear() is a function for getting the current time
         document.getElementById("year-error-message").innerHTML="Must be in the past";
         yearLabel.style.color="hsl(0, 100%, 67%)";
        yearTb.style.borderColor="hsl(0, 100%, 67%)";       
    }

    else{
        
        dayLabel.style.color="";
        monthLabel.style.color="";
        yearLabel.style.color="";

        dayTb.style.borderColor="";
        monthTb.style.borderColor="";
        yearTb.style.borderColor="";

        document.getElementById("day-error-message").innerHTML= "";
        document.getElementById("month-error-message").innerHTML= "";
        document.getElementById("year-error-message").innerHTML= "";

        return calculateAge();
    }
}
}

function calculateAge() {

    var dayValue = document.getElementById("day").value;
    var monthValue = document.getElementById("month").value;
    var yearValue = document.getElementById("year").value;

    var dateOfBirth = new Date (yearValue, monthValue, dayValue); //month values are zero indexed thus we need to subtract one!!

    var currentDate = new Date();

    var timeDifference = currentDate - dateOfBirth;     //time will be calculated in ms, we have to convert it to days

    var differenceDays = Math.floor(timeDifference / (1000 * 60 * 60 * 24)); 

    var years = Math.floor(differenceDays/364);         //divide number of days by 364 to get the number of years rounded down

    var months = Math.floor((differenceDays%364) /30);  //use the modulus to get the number of days left over nthat cannot make a full year the divide by 30 to get the number of months left over

    var days = Math.floor((differenceDays%364)%30);     //use the modulus of the number of months left over to find the number of days left over

    // console.log(years,months,days);

    document.getElementById("daystext").innerHTML= days;
    document.getElementById("monthstext").innerHTML= months; 
    document.getElementById("yearstext").innerHTML=years;
}