import "./Header.css";

const template = () => `
<a href="/"><img src="https://theme793-travel-agency.myshopify.com/cdn/shop/files/img_03_150x40_crop_center.png?v=1659365564" alt="Company´s Logo"/></a>
<nav>
  <ul>
    <li>
      <a href="/">Home</a> 
    </li>
    <li>
      <a href="/products">Products</a> 
    </li>
    <li>
      <a href="/contact">Contact</a> 
    </li>
  </ul>
</nav>
<nav>
 
  <i class="fab fa-facebook"></i>
  <i class="fab fa-instagram"></i>
  <i class="fab fa-youtube"></i>
  <i class="fab fa-linkedin"></i>
</nav>
`;

const Header = () => {
  document.querySelector("header").innerHTML = template();
};

export default Header;
