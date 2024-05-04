import { FaLinkedin, FaEnvelope } from "react-icons/fa";
const Info = () => {
  return (
    <div className="info2">
      <img
        className="info--photo"
        src="https://drive.google.com/file/d/1HB-rlY442VD2spSN0wmlwYa5lhDIzsnR/view"
        alt="antony's picture"
      />
      <h1 className="info--fullname">Anthony Muuo</h1>
      <h5 className="info--role">Junior Front End Developer</h5>
      <p className="info--website">
        <a
          className="info--websiteLink"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ducci.com
        </a>
      </p>
      <div className="info--buttons">
        <address>
          <a href="mailto:anthonymuuo92@gmail.com">
            <button className="button--email">
              <FaEnvelope className="info--icon" />
              Email
            </button>
          </a>
        </address>
        <a
          href="https://www.linkedin.com/in/anthony-muuo/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="button--linkedin">
            <FaLinkedin className="info--icon" />
            LinkedIn
          </button>
        </a>
      </div>
    </div>
  );
};

export default Info;
