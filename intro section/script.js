let featuresdropdown = false;
let navStatus = false;

function featureslink() {
    var featuresmenu = document.getElementById("features-dropdown");
    var downarrow = document.getElementById("downarrow1");
    var uparrow = document.getElementById("uparrow1");
    var text = document.getElementById("features-txt");

    if(featuresdropdown === false){
        featuresmenu.style.visibility = "visible";
        downarrow.style.visibility = "hidden";
        uparrow.style.visibility = "visible";
        text.style.color = "hsl(0, 0%, 8%)"
        featuresdropdown=true
    }
    else if(featuresdropdown === true){
        featuresmenu.style.visibility = "hidden";
        downarrow.style.visibility = "visible";
        uparrow.style.visibility = "hidden";
        text.style.color = "hsl(0, 0%, 41%)";
        featuresdropdown = false
    }
    
}

let companydropdown = false

function companylink() {
    var companymenu = document.getElementById("company-dropdown");
    var downarrow = document.getElementById("downarrow2");
    var uparrow = document.getElementById("uparrow2");
    var text = document.getElementById("company-txt");


    if(companydropdown === false){
        companymenu.style.visibility = "visible";
        downarrow.style.visibility = "hidden";
        text.style.color = "hsl(0, 0%, 8%)"
        uparrow.style.visibility = "visible";
        companydropdown=true
    }
    else if(companydropdown === true){
        companymenu.style.visibility = "hidden";
        downarrow.style.visibility = "visible";
        uparrow.style.visibility = "hidden";
        text.style.color = "hsl(0, 0%, 41%)";
        companydropdown = false
    }
    
}

function toggleNav() {
    var navsidebar = document.getElementById("nav-sidebar");

    if (navStatus === false){
        navsidebar.style.visibility = "visible";
        navStatus = true;
    }
    else  if (navStatus === true){
        navsidebar.style.visibility = "hidden";
        navStatus = false;
    }

}