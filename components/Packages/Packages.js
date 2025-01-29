import "./Packages.css";
import trips from "../../data-trips/data";

const template = (title) => {
  const carrouselItems = trips
    .sort(() => Math.random() - 0.5)
    .slice(0, 4)
    .map(
      (trip) => `
    <figure class="carrousel-item" data-trip='${JSON.stringify(trip)}'>
      <img src="${trip.image}" alt="${trip.title}">
      <figcaption>${trip.title}</figcaption>
      <p>${trip.price}</p>
      <div class="buy-option">Buy Now</div>
    </figure>`
    )
    .join("");

  return `
<section id="carrousel">
  <h2 class="black-title">${title}</h2>
  <div class="carrousel-container">
    ${carrouselItems}
  </div>
</section>`;
};

const Carrousel = (title = "", containerSelector = ".packages") => {
  const container = document.querySelector(containerSelector);
  container.innerHTML = template(title);

  const items = container.querySelectorAll(".carrousel-item");

  items.forEach((item) => {
    item.addEventListener("click", () => {
      const tripData = JSON.parse(item.getAttribute("data-trip"));
      localStorage.setItem("selectedTrip", JSON.stringify(tripData));
      window.location.href = "/CardProducts";
    });
  });
};

export default Carrousel;
