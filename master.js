document.querySelector(".icon").addEventListener("click", () => {
  document.querySelector(".options").classList.toggle("show");
  document.querySelector(".options .icon i").classList.toggle("clicked");
});
//!============================================================================
//!============================================================================
//!============================================================================
let colors = Array.from(document.querySelectorAll(".options .colors .color"));
if (colors.length > 0) {
  colors.forEach((element) => {
    element.onclick = function () {
      colors.forEach((ele) => {
        ele.classList.remove("active");
      });
      element.classList.add("active");
      document.documentElement.style.setProperty(
        "--main-color",
        element.dataset.color
      );
      localStorage.setItem("color", element.dataset.color);
    };
  });
}
if (localStorage.getItem("color")) {
  document.documentElement.style.setProperty(
    "--main-color",
    localStorage.getItem("color")
  );
  colors.forEach((ele) => {
    ele.classList.remove("active");
  });
  colors.forEach((e) => {
    if (e.dataset.color == localStorage.getItem("color")) {
      e.classList.add("active");
    }
  });
}
//!============================================================================
//!============================================================================
//!============================================================================
let randomBg = Array.from(
  document.querySelectorAll(".rBackground .choies span")
);

let landing = document.querySelector(".landing");

let bgOptions = true;
let bgInterval;
let imageArray = [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
  "9.jpg",
  "10.jpg",
];
function interval() {
  if (bgOptions == true) {
    bgInterval = setInterval(() => {
      let i = Math.ceil(Math.random() * 10);
      // landing.style.backgroundImage = 'url("./imgs/' + i + '.jpg")';
      landing.style.backgroundImage = `url("./imgs/${imageArray[i]}")`;
      localStorage.setItem("bgImage", `url("./imgs/${imageArray[i]}")`);
    }, 5000);
  }
}
if (localStorage.getItem("bgImage")) {
  landing.style.backgroundImage = localStorage.getItem("bgImage");
}
interval();

randomBg.forEach((e) => {
  e.onclick = (ele) => {
    localStorage.setItem("rbg", e.dataset.boolyan);
    randomBg.forEach((element) => {
      element.classList.remove("active");
    });
    e.classList.add("active");
    if (e.dataset.boolyan == "yes") {
      bgOptions = true;
      interval();
    } else {
      bgOptions = false;
      clearInterval(bgInterval);
    }
  };
});

let storedValue = localStorage.getItem("rbg");
if (storedValue == "no") {
  bgOptions = false;
  clearInterval(bgInterval);
  randomBg.forEach((ele) => {
    ele.classList.remove("active");
  });
  randomBg[1].classList.add("active");
} else {
  randomBg.forEach((ele) => {
    ele.classList.remove("active");
  });
  randomBg[0].classList.add("active");
}

//!============================================================================
//!============================================================================
//!============================================================================
let bullets = Array.from(
  document.querySelectorAll(".showBulltes .choies span")
);
bullets.forEach((bullet) => {
  bullet.onclick = function () {
    if (bullet.dataset.boolyan == "no") {
      document.querySelector(".nav-bulltes").style.display = "none";
      localStorage.setItem("bullteStatus", bullet.dataset.boolyan);
    } else if (bullet.dataset.boolyan == "yes") {
      document.querySelector(".nav-bulltes").style.display = "flex";
      localStorage.setItem("bullteStatus", bullet.dataset.boolyan);
    }
    bullets.forEach((otherBullet) => {
      otherBullet.classList.remove("active");
    });
    bullet.classList.add("active");
  };
});
if (localStorage.getItem("bullteStatus") == "yes") {
  document.querySelector(".nav-bulltes").style.display = "flex";
  bullets.forEach((ele) => {
    ele.classList.remove("active");
  });
  bullets[0].classList.add("active");
} else if (localStorage.getItem("bullteStatus") == "no") {
  document.querySelector(".nav-bulltes").style.display = "none";
  bullets.forEach((ele) => {
    ele.classList.remove("active");
  });
  bullets[1].classList.add("active");
}

//!============================================================================
//!============================================================================
//!============================================================================
let nameBtn = document.querySelector(".options .restbtn");
nameBtn.onclick = function () {
  document.querySelector(".options .img img").classList.toggle("show");
};

//!============================================================================
//!============================================================================
//!============================================================================

let images = Array.from(document.querySelectorAll(".gallery .img img"));

images.forEach((image) => {
  image.onclick = () => {
    console.log(image.getAttribute("src"));
    let frame = document.createElement("div");
    frame.classList.add("frame");
    let img = document.createElement("img");
    img.setAttribute("src", image.getAttribute("src"));
    console.log(img);
    let close = document.createElement("span");
    close.classList.add("close");
    close.appendChild(document.createTextNode("X"));
    frame.appendChild(close);
    frame.appendChild(img);
    document.querySelector(".gallery").prepend(frame);
  };
});

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("close")) {
    document.querySelector(".gallery .frame").remove();
  }
});

//!============================================================================
//!============================================================================
//!============================================================================

let progressSpan = Array.from(
  document.querySelectorAll(".skills .progress span")
);

let skills = document.querySelector(".skills");

window.onscroll = () => {
  let offsetTop = skills.offsetTop;
  let outerHeigth = skills.offsetHeight;
  let windowHeigth = this.innerHeight;
  let windowScrollTop = this.scrollY;
  if (windowScrollTop > offsetTop + outerHeigth - windowHeigth) {
    progressSpan.forEach((e) => {
      e.style.width = e.dataset.width;
    });
  }
  if (windowScrollTop >= 700) {
    document.querySelector(".up").classList.add("show");
  } else if (windowScrollTop < 700) {
    document.querySelector(".up").classList.remove("show");
  }
};

document.addEventListener("click", (e) => {
  if (e.target.parentElement.classList.contains("up")) {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
});

//!============================================================================
//!============================================================================
//!============================================================================

let menuIcon = document.querySelector(".menu-icon");
menuIcon.onclick = () => {
  document.querySelector("nav").classList.toggle("open");
};
