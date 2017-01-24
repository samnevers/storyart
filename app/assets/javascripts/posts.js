

// all input is pushed to this array
var pressed = [];

// event: logging live text preview
  window.addEventListener('keydown', function(e) {

    console.log(e.key);
    console.log(e.keyCode);

    // TO DO: Expand delete functionality to coincide with indexOf value when arrow keys are used...
    if (e.keyCode === 46 || e.keyCode === 8) {
      pressed.pop();
      console.log(pressed);

      // TO DO: Render a new line when 'Enter' key is pressed
    // } else if (e.keyCode === 13){
    //   pressed.push("<br />");
    //   console.log(pressed);

    // removing fn keys from live text preview
    } else if (e.keyCode === 16 || e.keyCode === 17 || e.keyCode === 18 || e.keyCode === 91 || e.keyCode === 20 || e.keyCode === 9 || e.keyCode === 37 || e.keyCode === 38 || e.keyCode === 39 || e.keyCode === 40 || e.keyCode === 13) {
      console.log(e.key + " is invalid");
      return e.key;
    } else {
        pressed.push(e.key);
        console.log(pressed);
    }
      var liveText = pressed.join("");
      console.log(liveText);
      var $p = $(".live-text");
      $p.text(liveText);

      $(".live-text").val("");

      $("#text-preview").append($p);

  });


  // mousetrap test
  Mousetrap.bind('a b c d e', function() { console.log("Mousetrapped: konami");
  var path = new Path.Circle(new Point(280, 50), 35);
  project.activeLayer.lastChild.fillColor = "dodgerblue";
});

  // mousetrap regex test
  var re = /\b[gG]\S+\b/;

  // Mousetrap.bind(re, function () {
    // console.log("Omg it works!");
  // });



  // Bind mousetrap to anything that would end a word
    // Get all of the text that the user has typed
      // Split it on all word boundaries
        // Run an animation for each one




  // heart easter egg
  Mousetrap.bind('< 3', function() { console.log("Mousetrapped: heart");
  var $heartImg = $("<img>");
  $heartImg.attr("src", "/assets/images/heart.png");
  $heartImg.addClass("heart animation");

  $("#canvas").append($heartImg);

  });


  // events: background color
  Mousetrap.bind('.', function() {
    console.log("Mousetrapped: color change");
    var bgColors = ["#FFF000", "#663399", "#6c6c6c", "#909090", "#000", "#000ccc"];
    var randomColor = bgColors[Math.floor(Math.random()*bgColors.length)];
    console.log(randomColor);
    $("#canvas").css({"backgroundColor": randomColor});
  });


  // TO DO: EASTER EGG
//   Mousetrap.bind('w h e r e  y o u c o m e f r o m a n d w h e r e y o u g o n n a g o t h i s t i m e', function() {
//   console.log("Play Tell Me Baby");
// });
//
// if (pressed.join("") === "where you come from and where you gonna go this time") {
//   console.log("Play Tell Me Baby");
// }

  // note to self - THIS DOES NOT WORK:
  // Mousetrap.bind('fghi', function() { console.log("Mousetrapped: fghi"); });
