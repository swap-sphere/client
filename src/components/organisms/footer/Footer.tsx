import FooterBottom from "../../molecules/footer-bottom/FooterBottom"
import FooterMiddle from "../../molecules/footer-middle/FooterMiddle"
import FooterTop from "../../molecules/footer-top/FooterTop"

const Footer = () => {
  return (
    <div className="font-titleFont">
      <FooterTop />
      <FooterMiddle />
      <FooterBottom />
    </div>
  )
}

export default Footer