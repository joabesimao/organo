import "./Footer.css";

export const Footer = (props) => {
  return (
    <footer className="footer">
      <section>
        <ul>
          <li>
            <img src="./images/fb.png" alt="facebook"></img>
          </li>
          <li>
            <img src="./images/ig.png" alt="instagram"></img>
          </li>
          <li>
            <img src="./images/tw.png" alt="twi"></img>
          </li>
        </ul>
      </section>
      <section>
        <img className="logo" src="./images/logo.png" alt="logo"></img>
      </section>
    </footer>
  );
};
