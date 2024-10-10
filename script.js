//javascript for navigation bar effects on scroll
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

//javascript for responsive navigation sidebar menu
const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");
const navigationItems = document.querySelectorAll(".navigation a");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  navigation.classList.toggle("active");
});

navigationItems.forEach((navigationItem) => {
  navigationItem.addEventListener("click", () => {
    menuBtn.classList.remove("active");
    navigation.classList.remove("active");
  });
});

//javascript for scroll to top button
const scrollBtn = document.querySelector(".scrollToTop-btn");

window.addEventListener("scroll", function () {
  scrollBtn.classList.toggle("active", window.scrollY > 500);
});

//javascript for scroll back to top on click scroll-to-top button
scrollBtn.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

//javascript for reveal website elements on scroll
window.addEventListener("scroll", reveal);

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var revealTop = reveals[i].getBoundingClientRect().top;
    var revealPoint = 50;

    if (revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add("active");
    }
  }
}

// *************************************************

// Smooth scrolling for navigation links
// document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
//   anchor.addEventListener("click", function (e) {
//     e.preventDefault();
//     const targetId = this.getAttribute("href");
//     const targetElement = document.querySelector(targetId);
//     targetElement.scrollIntoView({
//       behavior: "smooth",
//       block: "start",
//     });
//   });
// });

// Show the scroll to top button when scrolling down
const scrollToTopBtn = document.querySelector(".scrollToTop-btn");

window.addEventListener("scroll", () => {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
});

// Scroll to top when the button is clicked
scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Lightbox for image gallery
const galleryImages = document.querySelectorAll(".gallery .card-img img");
const lightbox = document.createElement("div");
lightbox.classList.add("lightbox");
document.body.appendChild(lightbox);

galleryImages.forEach((image) => {
  image.addEventListener("click", () => {
    lightbox.style.display = "block";
    const img = document.createElement("img");
    img.src = image.src;
    lightbox.innerHTML = "";
    lightbox.appendChild(img);
  });
});

// Close the lightbox when clicked
lightbox.addEventListener("click", () => {
  lightbox.style.display = "none";
});

// Animate skill bars when they come into view
const skillBars = document.querySelectorAll(".bar");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const line = entry.target.querySelector(".line");
        const percentage = line.previousElementSibling.innerText;
        line.style.width = percentage;
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

skillBars.forEach((bar) => observer.observe(bar));

// Simple form validation
const contactForm = document.querySelector("form");

contactForm.addEventListener("submit", (e) => {
  const name = contactForm.querySelector('input[name="name"]').value;
  const email = contactForm.querySelector('input[name="email"]').value;

  if (!name || !email) {
    e.preventDefault();
    alert("Please fill out all required fields.");
  }
});
