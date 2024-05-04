import {
  FaGithubSquare,
  FaLinkedin,
  FaTwitterSquare,
  FaInstagramSquare,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer">
      <a
        href="https://twitter.com/DucciIts45360"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaTwitterSquare className="footer--icon" />
      </a>

      <a
        href="https://amuuo-dev.hashnode.dev/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagramSquare className="footer--icon" />
      </a>

      <a
        href="https://github.com/amuuo-dev"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithubSquare className="footer--icon" />
      </a>
      <a
        href="https://www.linkedin.com/in/anthony-muuo/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin className="footer--icon" />
      </a>
    </div>
  );
};

export default Footer;
