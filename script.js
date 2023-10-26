const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

function homepageanimation(){
    gsap.timeline().from("#nav",{
        y: "-10",
        opacity: 0,
        duration: 2,
            ease: Expo.easeInOut
    })

 .to(".homepageeffect-content",{
        y:0,
        duration: 1.5,
        ease: Expo.easeInOut,
        stagger: .2
    })
}

function followerdistorter() {
  var xscale = 1;
  var yscale = 1;
  var xprev = 0;
  var yprev = 0;

  window.addEventListener("mousemove", (coordinates) => {
    clearTimeout(timeout);

    var xdiff = coordinates.clientX - xprev;
    var ydiff = coordinates.clientY - yprev;

    xprev = coordinates.clientX;
    yprev = coordinates.clientY;

    xscale = gsap.utils.clamp(0.8, 1.2, xdiff);
    yscale = gsap.utils.clamp(0.8, 1.2, ydiff);

    follower(xscale, yscale);

    var timeout = setTimeout(() => {
      document.querySelector("#whitedot").style.transform = `translate(${coordinates.clientX}px,${coordinates.clientY}px) 
        scale(1,1)`;
    }, 100);
  });
}

function follower(xscale, yscale) {
  window.addEventListener("mousemove", (coordinates) => {
    document.querySelector("#whitedot").style.transform = `translate(${coordinates.clientX}px,${coordinates.clientY}px) 
        scale(${xscale},${yscale})`;
  });
}

follower();
followerdistorter();
homepageanimation();


// image section

document.querySelectorAll("#elem").forEach((elem) => {    
  var prevX = 0;
  var Xdiff = 0;
  elem.addEventListener("mousemove", function (dets) {    
    var Ydiff = dets.clientY - elem.getBoundingClientRect().top;
    Xdiff = dets.clientX - prevX;
    prevX = dets.clientX;

    var Xdegree = gsap.utils.clamp(-15, 15, Xdiff);
    gsap.to(elem.querySelector("img"), {
      opacity: 1,
      ease: Power3,
      top: Ydiff,
      left: dets.clientX,
      rotate: Xdegree
    });

    clearTimeout(noAngel);


    noAngel= setTimeout((Xdegree)=>{
        Xdegree = 0
    },100)
  });
});
document.querySelectorAll("#elem").forEach((elem) => {    
    elem.addEventListener("mouseleave", function () {
      gsap.to(elem.querySelector("img"), {
        opacity: 0,
        ease: Power3,       
      });
    });
  });