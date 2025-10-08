//Testimonial Data
const testimonials = [
  {
    name: "Karthika Raj",
    job: "CEO, Fashworks",
    testimonial:
      "These shoes are an absolute game-changer! I wore them for a 10-hour shift, and my feet felt great the entire time. Plus, they look fantastic with any outfit!",
  },
  {
    name: "Husu Mon",
    job: "Developer, TechCrew",
    image: "img/profile-image-2.png",
    testimonial:
      "I've tried several brands, but these are by far the best. The grip is excellent, and I've taken them out on some challenging trails. Can't recommend them enough!",
  },
  {
    name: "Geo Johny",
    job: "UI Designer, Affinity Agency",
    image: "img/profile-image-3.png",
    testimonial:
      "Not only are these shoes stylish, but they are also incredibly comfortable. I get compliments every time I wear them! Perfect for both casual and dressy occasions",
  },
  {
    name: "Abido ES",
    job: "CEO,Zeal Wheels",
    image: "img/profile-image-4.png",
    testimonial:
      "I love my new shoes! They fit like a glove and offer amazing arch support. I've been wearing them for runs and daily errands without any discomfort.",
  },
];

//Current Slide
let i = 0;
//Total Slides
let j = testimonials.length;

let testimonialContainer = document.getElementById("testimonial-container");
let nextBtn = document.getElementById("next");
let prevBtn = document.getElementById("prev");

nextBtn.addEventListener("click", () => {
  i = (j + i + 1) % j;
  displayTestimonial();
});
prevBtn.addEventListener("click", () => {
  i = (j + i - 1) % j;
  displayTestimonial();
});

let displayTestimonial = () => {
  testimonialContainer.innerHTML = `
    <p>${testimonials[i].testimonial}</p>
    <h3>${testimonials[i].name}</h3>
    <h6>${testimonials[i].job}</h6>
  `;
};
window.onload = displayTestimonial;
