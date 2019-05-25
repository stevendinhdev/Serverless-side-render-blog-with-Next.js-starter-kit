import Link from "next/link";
import React, { useState } from "react";

const Menu = props => {
  const [aboutModal, setAboutModal] = useState(false);
  const [contactModal, setContactModal] = useState(false);

  return (
    <nav id="menu">
      <div className="inner">
        <ul className="links">
          <li>
            <Link href="/">
              <a>
                <span onClick={props.onToggleMenu}>Home</span>
              </a>
            </Link>
          </li>
          <li>
            <a>
              <span onClick={() => setAboutModal(true)}>About</span>
            </a>
          </li>

          <li>
            <a>
              <span onClick={() => setContactModal(true)}>Contact</span>
            </a>
          </li>

          <li>
            <a
              href="https://hirvitek.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span onClick={props.onToggleMenu}>Hirvitek site</span>
            </a>
          </li>
        </ul>
        {/*<ul className="actions vertical">*/}
        {/*    <li><a href="#" className="button special fit">Get Started</a></li>*/}
        {/*    <li><a href="#" className="button fit">Log In</a></li>*/}
        {/*</ul>*/}
      </div>
      <a className="close" onClick={props.onToggleMenu} href="javascript:;">
        Close
      </a>

      {aboutModal && <About setAboutModal={setAboutModal} />}
      {contactModal && <Contact setContactModal={setContactModal} />}
    </nav>
  );
};

export default Menu;

const About = ({ setAboutModal }) => {
  return (
    <nav id="menu">
      <div className="inner" style={{ textAlign: "left" }}>
        <h3>Hello and welcome to the Hirvitek blog</h3>
        <p>
          Here you can find articles about general Front-end engineering,
          serverless, React, progressive web application, Web assembly and
          front-end performance.
          <br />
          <br />
          Our article will treat advanced topics so don't expect "how to write
          hello world in React.js"
        </p>
      </div>
      <a className="close" onClick={() => setAboutModal(false)}>
        Close
      </a>
    </nav>
  );
};

const Contact = ({ setContactModal }) => {
  return (
    <nav id="menu">
      <div
        className="inner"
        style={{ textAlign: "left", minWidth: "310px", width: "50%" }}
      >
        <h3>You can drop us an email at: <a href="mailto:info@hirvitek.com">info@hirvitek.com</a></h3>
        <p>We will make a nice form later</p>
        {/*<form method="post" action="#">*/}
        {/*  <div className="field half first">*/}
        {/*    <label htmlFor="name">Name</label>*/}
        {/*    <input type="text" name="name" id="name" />*/}
        {/*  </div>*/}
        {/*  <div className="field half">*/}
        {/*    <label htmlFor="email">Email</label>*/}
        {/*    <input type="text" name="email" id="email" />*/}
        {/*  </div>*/}
        {/*  <div className="field">*/}
        {/*    <label htmlFor="message">Message</label>*/}
        {/*    <textarea name="message" id="message" rows="6" />*/}
        {/*  </div>*/}
        {/*  <ul className="actions">*/}
        {/*    <li>*/}
        {/*      <input type="submit" value="Send Message" className="special" />*/}
        {/*    </li>*/}
        {/*    <li>*/}
        {/*      <input type="reset" value="Clear" />*/}
        {/*    </li>*/}
        {/*  </ul>*/}
        {/*</form>*/}
      </div>
      <a className="close" onClick={() => setContactModal(false)}>
        Close
      </a>
    </nav>
  );
};
