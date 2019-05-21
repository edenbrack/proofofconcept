// initialise controller
var controller = new ScrollMagic.Controller();

// build tweens
var frameFill = new TimelineMax()
.to(".frame", 1, {fill:"#FFB91D"})
.to(".frame", 1, {fill:"#0053E6"});

TweenMax.set(".spot", {opacity: 0});
TweenMax.set("#utters", {y:-50});
TweenMax.set("#tongue", {x:-20});

var tween1 = new TimelineMax()
.staggerTo(".spot", 2, {opacity:1}, 0.2)
.to("#utters", 0.75, {y:0})
.to("#tongue", 1, {x:0});

var tween2 = TweenMax.to([".ball", ".arm"], 3, {x:410});

var tween3 = TweenMax.to("#droplet", 3, {y:50, repeat:2, repeatDelay:0.3});

// build scenes
var frameChange = new ScrollMagic.Scene({
  triggerElement: "#element2",
  duration: 1200,
  offset: -100
})
  .setTween(frameFill)
  .addIndicators()
  .addTo(controller);

var scene1 = new ScrollMagic.Scene({
    triggerElement: "#element1",
    duration: 150,
    offset: 310
  })
    .setTween(tween1)
    .addIndicators()
    .addTo(controller);

var scene2 = new ScrollMagic.Scene({
  triggerElement: "#element2",
  duration: 300,
  offset: 150
})
  .setTween(tween2)
  .addIndicators()
  .addTo(controller);

var scene3 = new ScrollMagic.Scene({
  triggerElement: "#element3",
  duration: 500,
  offset: -50
})
  .setTween(tween3)
  .addIndicators()
  .addTo(controller);
