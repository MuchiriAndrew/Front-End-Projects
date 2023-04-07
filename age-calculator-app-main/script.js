function validateForm() {

    var dayValue = document.getElementById("day").value;
    // var monthValue = document.getElementById("month").value;
    // var yearValue = document.getElementById("year").value;

    if(dayValue == ''){
        document.getElementById("error-message").innerHTML="This field is required";  
        return false; 
    }

    // if(parseInt(dayValue)>31){
    //     document.getElementById("error-message").innerHTML="Must be a valid day";
    // }

    // if(monthValue=='' || monthValue==null){
    //     document.getElementById("error-message").innerHTML="This field is required";
    // }

    // if(parseInt(monthValue)>12){
    //     document.getElementById("error-message").innerHTML="Must be a valid month";
    // }

    // if(yearValue=='' || yearValue==null){
    //     document.getElementById("error-message").innerHTML="This field is required";
    // }

    // if(parseInt(yearValue)> new Date().getFullYear){//new Date().getFullYear is a function for getting the current time
    //     document.getElementById("error-message").innerHTML="Must be in the past";
    // }

    return true;
}