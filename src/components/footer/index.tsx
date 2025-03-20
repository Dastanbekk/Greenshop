import FooterBottom from "./footer-bottom";
import FooterMain from "./footer-main";
import FooterTop from "./footer-top";

const Footer = () => {
  return (
    <div className="py-5">
      <FooterTop />
      <FooterMain />
      <FooterBottom />
    </div>
  );
};

export default Footer;
