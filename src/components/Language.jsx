import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

function Language() {
  const { i18n } = useTranslation();
  const {  hash } = useLocation();
  const { pathname } = window.location;

  const switcher = (lng) => {
    i18n.changeLanguage(lng);
    let newPathname = pathname.slice(3);
    window.location.replace(`/${lng}${newPathname}${hash}`);
  };

  return (
    <ul className="flex flex-row gap-2 ml-6">
      <li className="text-white" onClick={() => switcher("en")}>
        EN
      </li>
      <li className="text-white" onClick={() => switcher("az")}>
        AZ
      </li>
    </ul>
  );
}

export default Language;