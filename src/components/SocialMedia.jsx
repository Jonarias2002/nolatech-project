import { FaFacebookF, FaInstagram, FaTwitter, FaTiktok } from "react-icons/fa6";
import { TfiYoutube } from "react-icons/tfi";

function SocialMedia() {
  return (
    <div className="w-10 bg-gray-400 p-3 fixed right-0" style={{
      top: '50%',
      transform: 'translateY(-50%)'
    }}>
      <ol className=" text-white">
        <li className="mb-3">
          <a
            href="https://www.instagram.com/nola_tech/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF />
          </a>
        </li>
        <li className="mb-3">
          <a
            href="https://www.instagram.com/nola_tech/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </li>
        <li className="mb-3">
          <a
            href="https://www.instagram.com/nola_tech/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
        </li>
        <li className="mb-3">
          <a
            href="https://www.instagram.com/nola_tech/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TfiYoutube />
          </a>
        </li>
        <li className="">
          <a
            href="https://www.instagram.com/nola_tech/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTiktok />
          </a>
        </li>
      </ol>
    </div>
  )
}

export default SocialMedia