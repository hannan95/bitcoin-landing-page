const text = document.querySelector(".text");
const cursor = document.querySelector(".cursor");

const words = ["Gold", "Fiat Currencies", "Silver", "Stocks"];

const main_timeline = gsap.timeline({
  repeat: -1,
});

words.forEach((word) => {
  const tl = gsap.timeline({
    repeat: 1,
    repeatDelay: 4,
    yoyo: true,
  });

  const cursorTimeline = gsap.timeline({
    repeat: -1,
    repeatDelay: 0.8,
  });

  cursorTimeline
    .to(".cursor", {
      opacity: 1,
      duration: 0,
    })
    .to(".cursor", {
      opacity: 0,
      duration: 0,
      delay: 0.8,
    });

  tl.to(text, {
    text: word,
    duration: 1,
    onUpdate: () => {
      cursorTimeline.restart();
      cursorTimeline.pause();
    },
    onComplete: () => {
      cursorTimeline.play();
    },
  });
  main_timeline.add(tl);
});

const page_timeline_one = gsap.timeline();

page_timeline_one.from("header .logo", {
  opacity: 0,
  y: -100,
  duration: 0.4,
  delay: 0.8,
});
page_timeline_one.from(
  "header nav p, nav .button, nav .burger",
  {
    opacity: 0,
    y: -100,
    stagger: 0.2,
    duration: 1,
  },
  "-=0.3",
);

const page_timeline_one_content = gsap.timeline({
  scrollTrigger: {
    trigger: ".page1",
    scroller: "body",
    start: "top center",
    // markers: true,
    end: "bottom 95%",
    onEnter: () => {
      page_timeline_one_content.play();
    },
    onLeave: () => {
      page_timeline_one_content.reverse();
    },
    onEnterBack: () => {
      page_timeline_one_content.play();
    },
    onLeaveBack: () => {
      page_timeline_one_content.reverse();
    },
  },
});

page_timeline_one_content.from(".content1 h1, .content1 p", {
  opacity: 0,
  x: -400,
  stagger: 0.2,
  duration: 0.8,
  delay: 2,
});
page_timeline_one_content.fromTo(
  ".animated-button",
  {
    opacity: 0,
    x: -400,
    duration: 0.3,
  },
  {
    opacity: 1,
    x: 0,
    duration: 0.3,
  },
  "-=0.5",
);

page_timeline_one_content.from(
  ".image1",
  {
    opacity: 0,
    x: 400,
    duration: 0.7,
  },
  "-=0.8",
);

const page2_timeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".page2",
    scroller: "body",
    // markers: true,
    start: "top center",
    end: "bottom 60%",
    onEnter: () => {
      page2_timeline.play();
    },
    onLeave: () => {
      page2_timeline.reverse();
    },
    onEnterBack: () => {
      page2_timeline.play();
    },
    onLeaveBack: () => {
      page2_timeline.reverse();
    },
  },
});

page2_timeline.from(
  ".image2",
  {
    opacity: 0,
    xPercent: -50,
    duration: 0.8,
  },
  "same",
);

page2_timeline.from(
  ".content2 h1, .content2 p",
  {
    opacity: 0,
    xPercent: 50,
    stagger: 0.5,
    duration: 0.8,
  },
  "same",
);

const page3_timeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".page3",
    scroller: "body",
    start: "top 60%",
    end: "bottom 70%",
    onEnter: () => {
      page3_timeline.play();
    },
    onLeave: () => {
      page3_timeline.reverse();
    },
    onEnterBack: () => {
      page3_timeline.play();
    },
    onLeaveBack: () => {
      page3_timeline.reverse();
    },
  },
});
page3_timeline.from(
  ".content3 h1, .content3 p",
  {
    opacity: 0,
    xPercent: -50,

    duration: 0.8,
  },
  "same",
);
page3_timeline.from(
  ".image3",
  {
    opacity: 0,
    xPercent: 50,

    stagger: 0.5,
    duration: 0.8,
  },
  "same",
);

const lenis = new Lenis();

lenis.on("scroll", (e) => {
  console.log(e);
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
