import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import logo from "../assets/lastlogo-removebg-preview.webp";
import { FaSquareXTwitter } from "react-icons/fa6";

const NavBar = () => {
  return (
    <div className="flex items-center justify-between py-6 ">
      <div className="flex flex-shrink-0 items-center ">
        <a href="/" aria-label="Home">
          <img
            src={logo}
            className="mx-2"
            height={125}
            width={125}
            alt="Logo"
          />
        </a>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl p-4 ">
        <a
          href="https://in.linkedin.com/in/harsh-awalegaonkar-4a3464251"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:text-stone-700"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/Harshcodesfast"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Github"
          className="hover:text-stone-700"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/harsh_awalegaonkar/?next=%2F"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagarm"
          className="hover:text-stone-700"
        >
          <FaInstagram />
        </a>
        <a
          href="https://x.com/HarshAwalegaon1"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
          className="hover:text-stone-700"
        >
          <FaSquareXTwitter />
        </a>
      </div>
    </div>
  );
};

export default NavBar;
