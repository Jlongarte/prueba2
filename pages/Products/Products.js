import "./Products.css";
import trips from "../../data-trips/data";

const template = () => `
  <div id="search-bar">
    <input type="search" id="SearchInput" placeholder="Search"> 
    <button id="SearchBtn">Search</button>
  </div>
  <div id="categories">
    <button class="category" data-category="City">City</button>
    <button class="category" data-category="Adventure">Adventure</button>
    <button class="category" data-category="Beach">Beach</button>
    <button class="category" data-category="Offers">Offers</button>
  </div>
  <ul id="shop-products"></ul>
  <div id="no-products-message" style="display: none;">No products found in this category.</div>
`;

const printProducts = (products) => {
  const container = document.querySelector("#shop-products");
  const message = document.querySelector("#no-products-message");

  container.innerHTML = "";

  if (products.length === 0) {
    message.style.display = "block";
  } else {
    message.style.display = "none";
    for (const product of products) {
      const li = document.createElement("li");
      li.innerHTML = `
        <img src="${product.image}" alt="${product.title}">
        <figcaption>${product.title}</figcaption>
        <p>${product.price}</p>
        <div class="buy-option">
          <button class="buy-button" data-product='${JSON.stringify(
            product
          )}'>Buy Now</button>
        </div>
      `;
      container.appendChild(li);
    }

    const buyButtons = document.querySelectorAll(".buy-button");
    buyButtons.forEach((button) => {
      button.addEventListener("click", (e) => {
        const productData = JSON.parse(e.target.getAttribute("data-product"));
        localStorage.setItem("selectedTrip", JSON.stringify(productData));
        window.location.href = "/CardProducts";
      });
    });
  }
};

const SearchFunctionality = () => {
  const searchInput = document.querySelector("#SearchInput");
  const searchBtn = document.querySelector("#SearchBtn");

  const filterProducts = () => {
    const query = searchInput.value.toLowerCase();
    const filteredTrips = trips.filter((trip) =>
      trip.title.toLowerCase().includes(query)
    );
    printProducts(filteredTrips);
  };

  searchBtn.addEventListener("click", filterProducts);

  searchInput.addEventListener("input", filterProducts);
};

const CategoryFunctionality = () => {
  const categoryElements = document.querySelectorAll(".category");

  categoryElements.forEach((element) => {
    element.addEventListener("click", () => {
      const selectedCategory = element.getAttribute("data-category");
      const filteredTrips = trips.filter(
        (trip) => trip.category === selectedCategory
      );
      printProducts(filteredTrips);
    });
  });
};

const Products = () => {
  document.querySelector("main").innerHTML = template();
  printProducts(trips);
  SearchFunctionality();
  CategoryFunctionality();
};

export default Products;
