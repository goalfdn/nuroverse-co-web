import ImageContainer from "./ImageContainer"
import logo from "../images/nuroverse-logo.svg"

export default function Header() {
  return (
    <div className="absolute top-0 left-0 right-0 z-30">
      <div className="flex my-container mx-auto my-4 justify-between items-center">
        <div className="flex h-8 aspect-logo">
          <ImageContainer src={logo} alt="Nuroverse logo" />
        </div>
        <a href="https://linktr.ee/nuroverse" target="_blank" className="btn-primary">
          <span className="text-trusty-900">Contact Us</span>
        </a>
      </div>
    </div>
  );
}
