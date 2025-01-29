import "./Footer.css";

const template = () => `
<article>
<img src="https://theme793-travel-agency.myshopify.com/cdn/shop/files/img_03_150x40_crop_center.png?v=1659365564" alt="Company´s Logo"/>
<ul>
    <li>
        <i class="fa-solid fa-phone"></i>
        <a>Call Us:800-123-4567</a>
    <li>
    <li>
        <i class="fa-solid fa-envelope"></i>
        <a>Send us an email</a>
    <li>
<ul>
</article>
<article>
    <h5>Company</h5>
    <ul> 
        <li><a href="https://www.linkedin.com/in/janire-gonzalez-13aa78258/" target="_blank">About Us</a></li>
        <li><a href="https://www.linkedin.com/in/janire-gonzalez-13aa78258/" target="_blank">Contact Us</a></li>
        <li><a href="https://www.linkedin.com/in/janire-gonzalez-13aa78258/" target="_blank">Blog</a></li>
        <li><a href="https://www.linkedin.com/in/janire-gonzalez-13aa78258/" target="_blank">Privacy Policy</a></li>
    </ul>
</article>
<article>
    <h5>Information</h5>
    <ul>
        <li><a href="https://www.linkedin.com/in/janire-gonzalez-13aa78258/" target="_blank">Terms</a></li>
        <li><a href="https://www.linkedin.com/in/janire-gonzalez-13aa78258/" target="_blank">Delivery Info</a></li>
        <li><a href="https://www.linkedin.com/in/janire-gonzalez-13aa78258/" target="_blank">Refund Policy</a></li>
    </ul>
</article>
<article>
    <h5>Order</h5>
    <ul>
        <li><a href="https://www.linkedin.com/in/janire-gonzalez-13aa78258/" target="_blank">My Account</a></li>
        <li><a href="https://www.linkedin.com/in/janire-gonzalez-13aa78258/" target="_blank">View Cart</a></li>
       <li><a href="https://www.linkedin.com/in/janire-gonzalez-13aa78258/" target="_blank">Check Out</a></li>
    </ul>
</article>


`;

const Footer = () => {
  document.querySelector("footer").innerHTML = template();
};

export default Footer;
