import "./Home.css";
import Carrousel from "../../components/Packages/Packages";

const template = () => `
  <section id="gallery">
    <div class="gallery-container">
      <div class="gallery-item" style="background-image: url('https://theme793-travel-agency.myshopify.com/cdn/shop/files/img_13_1728x.png?v=1659423335');">
        <div class="overlay">
          <img src="/assets/logotrip-removebg-preview.png" alt="Logo"/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, nam? Iusto deleniti consequatur, eos exercitationem voluptatum rerum? Quos, molestiae? Explicabo ipsam dolores sunt ex?</p>
          <button><a href="/products"/>Browse Destinations<a></button>
        </div>
      </div>
      <div class="gallery-item" style="background-image: url('https://theme793-travel-agency.myshopify.com/cdn/shop/files/img_27_1728x.png?v=1659424331');">
        <div class="overlay">
            <h1>Choose your destination</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, nam? Iusto deleniti consequatur, eos exercitationem voluptatum rerum? Quos, molestiae? Explicabo ipsam dolores sunt ex?</p>
          <button><a href="/products"/>Browse Destinations<a></button>
        </div>
      </div>
    </div>
    <nav class="gallery-navigation">
      <button class="nav-button prev-button">Anterior</button>
      <button class="nav-button next-button">Siguiente</button>
    </nav>
  </section>
  <section class="packages">
    

  </section>
  <section class="hero-image">
    <div class="container">
      <h2 class="white-title">Choose your destination</h2>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias veritatis, officiis pariatur consequuntur architecto animi mollitia repellendus. Explicabo, earum repellat?</p>
    </div>
  </section>
<section class="offers">
        <h2 class="black-title">Special offers & discounts weekly</h2>
        <div class="grid-container">
            <!-- Primer Grid Item -->
            <div class="grid-item">
                <p>9 days 8 nights in Italy</p>
                <p>from</p>
                <span> $7,180</span>
                <button><a href="/products">Browse Destinations</a></button>
            </div>
            <!-- Segundo Grid Item -->
            <div class="grid-item">
                <p>Explore Brooklyn</p>
                <p> from</p>
                <span> $4,200</span>
                <button><a href="/products">Browse Destinations</a></button>
            </div>
            <!-- Tercer Grid Item -->
            <div class="grid-item">
                <p>Summer in Paris</p>
                <p> from</p>
                <span> $5,550</span>
                <button><a href="/products">Browse Destinations</a></button>
            </div>
        </div>
        <!-- Grid Item Grande -->
        <div class="grid-item large">
            <p>Take the stress out</p>
            <p>Travel to Bahamas from</p>
            <span> $7,180</span>
            <button><a href="/products">Browse Destinations</a></button>
        </div>
    </section>

  <section class="last-minute">
 

  </section>

  <section class="banner">
    <article>
      <h2>We’re avaliable for 8 hours a day! Contact to require a detailed analysis and assessment of your plan.</h2>
      <p>Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Fusce vulputate eleifend sapien. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus.</p>
      <button><a href="/contact">Know More</a></button>
    </article>
    <article>
      <i class="fas fa-phone-volume"></i>
      <p>800 123-45-678</p>
    </article>
    
  </section>
`;

let currentIndex = 0;
let autoplayInterval = null;

function navigate(direction) {
  const galleryContainer = document.querySelector(".gallery-container");
  const totalImages = document.querySelectorAll(".gallery-item").length;

  currentIndex = (currentIndex + direction + totalImages) % totalImages;
  const offset = -currentIndex * 100;

  galleryContainer.style.transform = `translateX(${offset}%)`;
}

function startAutoplay(interval) {
  stopAutoplay();
  autoplayInterval = setInterval(() => {
    navigate(1);
  }, interval);
}

function stopAutoplay() {
  clearInterval(autoplayInterval);
}

const addGalleryListeners = () => {
  document.querySelector(".prev-button").addEventListener("click", () => {
    navigate(-1);
    stopAutoplay();
  });

  document.querySelector(".next-button").addEventListener("click", () => {
    navigate(1);
    stopAutoplay();
  });
};

const Home = () => {
  document.querySelector("main").innerHTML = template();

  addGalleryListeners();
  startAutoplay(3000);

  Carrousel("Our Packages");
  Carrousel("Last Minute Deals", ".last-minute");
};

export default Home;
