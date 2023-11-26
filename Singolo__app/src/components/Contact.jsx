import styles from "../styles";

const Contact = () => {
  return (
    <section className={`${styles.sectionCenter}`}>
      <div>
        <form action="#">
          <div>
            <h1>Get a Quote</h1>
            <p>
              Fusce dapibus, tellus ac cursus commodo, tortor mauris
              condimentum. Duis mollis, non commodo luctus, nisi erat porttitor
              ligula, eget lacinia odio sem nec elit. Fusce dapibus, tellus ac
              cursus commodo, tortor mauris condimentum nibh.
            </p>
          </div>
          <div>
            <input type="text" placeholder="Name (required)" />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email (required)"
            />
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Subject"
            />
            <input
              type="text"
              id="text"
              name="text"
              placeholder="Describe your project in detail..."
            />
            <button>SEND</button>
          </div>
        </form>
      </div>
      <div>
        <div>
          <h2>Contact Information</h2>
          <p>
            Quisque hendrerit purus dapibus, ornare nibh vitae, viverra nibh.
            Fusce vitae aliquam tellus. Proin sit amet volutpat libero. Nulla
            sed nunc et tortor luctus faucibus. Morbi at aliquet turpis, et
            consequat felis.
          </p>
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default Contact;
