import {
  BsFacebook,
  BsGithub,
  BsGoogle,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
} from "react-icons/bs";
import { TITLES, icons } from "../../../../shared/constants";

const MyFooter = () => {
  return (
    <footer className="text-center text-lg-start bg-dark text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-secondary border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>{TITLES.webName}</span>
        </div>

        <div>
          <a href="" title="Facebook" className="me-4 link-secondary">
            <BsFacebook />
          </a>
          <a href="" title="Twitter" className="me-4 link-secondary">
            <BsTwitter />
          </a>
          <a href="" title="Google Plus" className="me-4 link-secondary">
            <BsGoogle />
          </a>
          <a href="" title="Instagram" className="me-4 link-secondary">
            <BsInstagram />
          </a>
          <a href="" title="LinkedIn" className="me-4 link-secondary">
            <BsLinkedin />
          </a>
          <a href="" title="GitHub" className="me-4 link-secondary">
            <BsGithub />
          </a>
        </div>
      </section>

      <section className="">
        <div className="container text-center text-md-start mt-3 mb-2">
          <div>
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 text-center">
              <p>
                <i className="text-secondary"></i>TRABZON
              </p>
              <p>
                <i className="text-secondary"></i>
                info@example.com
              </p>
              <p>
                <i className="text-secondary"></i> + 0(5xx) xxx xx xx
              </p>
              <p>
                <i className="text-secondary"></i> + 0(xxx) xxx xx xx
              </p>
            </div>

            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto">
              <a href="#" title="Play Store" alt="Google Play Store">
                <img
                  src={icons.googlePlay}
                  alt="Google Play Store"
                  className="photo img-fluid fit-image mb-2"
                />
              </a>

              <a href="#">
                <img
                  src={icons.appStore}
                  alt="App Store"
                  className="photo img-fluid fit-image mb-2"
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="container text-center border-secondary border-top pt-3">
        <small>
          Son Dakika haber, spor, astroloji ve magazinden siyasete, ekonomiden
          finansa, seyahatten televizyon dünyasına bütün konuların tek adresi
          <p>{TITLES.webName.toLocaleLowerCase()}.com</p>
        </small>

        <p className="text-center">Tüm Hakları Saklıdır</p>
      </div>

      <div className="text-center p-4">
        © 2023 Copyright :
        <a className="text-reset text-decoration-none fw-bold" href="#">
          Çağrı GÜL
        </a>
      </div>
    </footer>
  );
};

export default MyFooter;
