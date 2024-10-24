function openTab(evt, tabName) {
    // Hide all tab content
    var tabcontent = document.getElementsByClassName("tabcontent");
    for (var i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Remove the active class from all tablinks
    var tablinks = document.getElementsByClassName("tablink");
    for (var i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened it
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

function openbar(){
    document.getElementById("sidebar").style.width = "300px";
}

function closebar(){
    document.getElementById("sidebar").style.width = "0";
}