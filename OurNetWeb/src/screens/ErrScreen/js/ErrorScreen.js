import { BiError } from "react-icons/bi";
import { Helmet } from "react-helmet";

function ErrorScreen({ pageTitle }) {
  return (
    <div className="bg-red">
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>
      <div className="text-center text-warning">
        <BiError size={50} />
      </div>

      <h1 className="text-center display-3">SAYFA BULUNAMADI</h1>
      <p className="text-center">
        Lütfen doğru sayfayı aradığınızdan emin olun.
      </p>
    </div>
  );
}

export default ErrorScreen;
