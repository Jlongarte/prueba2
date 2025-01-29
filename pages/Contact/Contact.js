import "./Contact.css";

const template = () => `

 <form action="/submit" method="post">
 <div class="container">
            <div class="form-group">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required>
            </div>

            <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required>
            </div>

            <div class="form-group">
                <label for="subject">Subject:</label>
                <select id="subject" name="subject" required>
                    <option value="">Select an option</option>
                    <option value="price inquiry">Price Inquiry</option>
                    <option value="custom travel">Custom Travel</option>
                    <option value="refund">Refund</option>
                    <option value="get in touch">Get in Touch</option>
                </select>
            </div>

            <div class="form-group">
                <label for="message">Message:</label>
                <textarea id="message" name="message" rows="4" required></textarea>
            </div>

            <div class="form-group">
                <button>Send</button>
            </div>
           </div>
        </form>
   
`;

const Contact = () => {
  document.querySelector("main").innerHTML = template();
};

export default Contact;
