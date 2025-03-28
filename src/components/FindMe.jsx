import { styles } from "../styles"
import { SiInstagram,SiGmail, SiGithub, SiLinkedin } from "react-icons/si"
import { FaPhoneFlip } from "react-icons/fa6";
export default function FindMe() {
  return (
    <div className="relative text-center pb-10 mt-5">

            <p className={styles.sectionSubText}>Feel free to <span className="purple">connect </span>with me</p>
            <h2 className={styles.sectionSubText}>FIND ME ON</h2>
          <ul className="example-2 mt-10">
            <li className="icon-content">
              <a
                href="https://github.com/aymanerihane"
                aria-label="Github"
                data-social="Github"
              >
                <div className="filled"></div>
                <SiGithub />
              </a>
              <div className="tooltip">Github</div>
            </li>
            <li className="icon-content">
              <a
                href="https://linkedin.com/in/aymane-rihane"
                aria-label="Linkedin"
                data-social="Linkedin"
              >
                <div className="filled"></div>
                <SiLinkedin />
              </a>
              <div className="tooltip">Linkedin</div>
            </li>
            <li className="icon-content">
              <a
                href="mailto:rihaneaymanee@gmail.com"
                aria-label="Gmail"
                data-social="Gmail"
              >
                <div className="filled"></div>
                <SiGmail />
              </a>
              <div className="tooltip">Gmail</div>
            </li>
            <li className="icon-content">
              <a
                href="https://www.instagram.com/rihane_aymane/"
                aria-label="Instagram"
                data-social="Instagram"
              >
                <div className="filled"></div>
                <SiInstagram />
              </a>
              <div className="tooltip">Instagram</div>
            </li>
            <li className="icon-content">
              <a
                href="tel:+212696240877"
                aria-label="Phone"
                data-social="Phone"
              >
                <div className="filled"></div>
                <FaPhoneFlip />
              </a>
              <div className="tooltip">Phone</div>
            </li>
          </ul>
          

        </div>
  )
}
