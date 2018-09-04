import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'personal-site';

  $(document).ready(function() {

    // Calculates left margin
  function calculateLeftMargin (element) {
    return ($(element).outerWidth(true) - $(element).outerWidth()) / 2;
}

// Event listener to resize photo
var photoResize = function(){
    if (window.innerWidth >= 1024) {
        var h = window.innerHeight - $(".personal-photo").offset().top - 30;
        $(".personal-photo").css("max-height", h + "px");
    } else {
        $(".personal-photo").css("max-height", "");
    }
    var leftMargin = calculateLeftMargin(".personal-photo");

    $(".pulse").css("left", $(".personal-photo").position().left + leftMargin + 10);

    $(".pulse").css("top", $(".personal-photo").position().top + 10);

};

$('.home-page').imagesLoaded(function() {
    photoResize();
});

$(window).resize(photoResize);


// Changing photo functionality
var images = ["img/myself.jpg", "img/code.jpg", "img/riverwalk.jpg", "img/map.jpg", "img/sheet-music.png", "img/college.jpg", "img/opera3.jpg", "img/beach.jpg", //"img/fall.gif", //"img/snow.gif",
"img/space.jpg",
//"img/ocean.gif",
"img/cats.jpg"];

var counter = 0;

function nextImage() {
    counter++;
    if(counter >= images.length)
        counter = 0;
    swapImage(counter);
}

function swapImage(index) {
    $('#photos').css('background-image','');
    $('#photos').css('background-image','url("'+images[index]+'")');
}

$('.img-and-pointer').click(function(){
    nextImage();
});

// Adding all images to HTML to preload images and reduce loading time
for (let i = 0; i < images.length; i++) {
    $("#hidden-pictures").html("<img src=" + images[i] + ">");
}

// Flashing pointer functionality
var pulse = $(".pulse");
    pulse.hide();
var pointer = $("#pointer");
    pointer.hide();

var delay = 5000;
setInterval(function(){
    pointer.fadeToggle();
    pulse.fadeToggle();
}, delay);

  })

}
