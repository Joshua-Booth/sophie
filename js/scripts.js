var temp;

// Page preloader
function loader() {
    var page;
    var fileName = location.href.split("/").slice(-1);
    if (fileName == "index.html" || fileName == "") {
        page = "#index";
        time = 5000
    } else if (fileName == "about.html") {
        page = "#about";
        time = 2500
    } else if (fileName == "contact.html") {
        page = "#contact";
        time = 2500
    } else {
        time = 0
    }
    temp = setTimeout(function() {
        $(".nav").first().css("display", "block");
        $(".sociallinks").first().css("display", "block");
        $("#particles-js").addClass("background-fade");
        $("body").css("background", "linear-gradient(to right,#a5fecb,#20bdff,#5433ff) 50% 50% no-repeat fixed");
        $("#loader").addClass("animate-loader");
        $(page).css("display", "block");
        $(window).trigger('resize');
        window.dispatchEvent(new Event('resize'))
    }, time)
}

// Hide the loader once it's finished
$("#loader").on('animationend', function() {
    $("#loader").css("display", "none")
});


// Set current year
document.getElementById("year").innerHTML = new Date().getFullYear();

// Toggle navigation menu
$('#menuicon').one('click', function() {
    $("#wrap").removeClass("show");
    $("#menuicon").text("✖");
    $("#wrap").addClass("slideup")
});


$("#menuicon").click(function() {
    $("#wrap").toggleClass("slidedown slideup");
    if ($("#wrap").hasClass("slidedown")) {
        $("#menuicon").text("✖")
    } else {
        $("#menuicon").text("☰")
    }
    $("#wrap").toggleClass("show hide")
});

// Load the background particles
particlesJS.load('particles-js', 'js/particles.json', function() {
    console.log('callback - particles.js config loaded')
});
