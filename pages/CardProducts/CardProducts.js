import "./CardProducts.css";

const showTrip = () => {
  const selectedTrip = JSON.parse(localStorage.getItem("selectedTrip"));

  if (!selectedTrip) {
    document.querySelector("main").innerHTML = `<h2>Trip not found</h2>`;
    return;
  }

  const template = `
    <section class="DestinationCard">
      <article class="photoGrid">
        <div class="mainPhoto">
          <img src="${selectedTrip.image}" alt="${selectedTrip.title}">
        </div>
        <div class="otherPhotos">
          ${selectedTrip.backupImages
            .map((image) => `<img src="${image}" alt="Backup image">`)
            .join("")}
        </div>
      </article>
      <article class="destination-info">
        <h2>${selectedTrip.title}</h2>
        <span>${selectedTrip.price}</span>
        <p>Hotel Category: ${selectedTrip.hotelCategory}</p>
        <p>Services: ${selectedTrip.services}</p>
        <p>Duration: ${selectedTrip.duration} days</p>
        <p><i class="fas fa-eye"></i> ${selectedTrip.watches} are watching</p>
        <p><i class="fas fa-fire"></i> ${selectedTrip.sold} sold recently</p>
        <p>${selectedTrip.description}</p>
        <button>Add to Cart</button>
        <button>Buy It Now</button>
      </article>
    </section>
  `;

  document.querySelector("main").innerHTML = template;
};

export default showTrip;
