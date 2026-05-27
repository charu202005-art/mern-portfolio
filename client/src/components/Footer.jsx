import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 text-center">

      <h2 className="text-3xl font-bold text-cyan-400">
        Charmathy M
      </h2>

      <p className="mt-2 text-gray-400">
        BTECH STUDENT | MERN STACK DEVELOPER
      </p>

      <div className="flex justify-center gap-8 mt-6 text-3xl">

  <a
    href="https://github.com/"
    target="_blank"
    rel="noreferrer"
    className="hover:text-cyan-400 cursor-pointer"
  >
    <FaGithub />
  </a>

  <a
    href="https://linkedin.com/"
    target="_blank"
    rel="noreferrer"
    className="hover:text-cyan-400 cursor-pointer"
  >
    <FaLinkedin />
  </a>

  <a
    href="https://mail.google.com/mail/?view=cm&fs=1&to=@gmail.com"
    target="_blank"
    rel="noreferrer"
    className="hover:text-cyan-400 cursor-pointer"
  >
    <FaEnvelope />
  </a>

</div>
 <p className="mt-6 text-sm text-gray-500">
        © 2026 All Rights Reserved
      </p>

    </footer>
  );
}

export default Footer;