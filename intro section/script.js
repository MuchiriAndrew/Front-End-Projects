let featuresdropdown = false;

function featureslink() {
    var featuresmenu = document.getElementById("features-dropdown");
    var downarrow = document.getElementById("downarrow1");
    var uparrow = document.getElementById("uparrow1");

    if(featuresdropdown === false){
        featuresmenu.style.visibility = "visible";
        downarrow.style.visibility = "hidden";
        uparrow.style.visibility = "visible";
        featuresdropdown=true
    }
    else if(featuresdropdown === true){
        featuresmenu.style.visibility = "hidden";
        downarrow.style.visibility = "visible";
        uparrow.style.visibility = "hidden";
        featuresdropdown = false
    }
    
}

let companydropdown = false

function companylink() {
    var companymenu = document.getElementById("company-dropdown");
    var downarrow = document.getElementById("downarrow2");
    var uparrow = document.getElementById("uparrow2");


    if(companydropdown === false){
        companymenu.style.visibility = "visible";
        downarrow.style.visibility = "hidden";
        uparrow.style.visibility = "visible";
        companydropdown=true
    }
    else if(companydropdown === true){
        companymenu.style.visibility = "hidden";
        downarrow.style.visibility = "visible";
        uparrow.style.visibility = "hidden";
        companydropdown = false
    }
    
}