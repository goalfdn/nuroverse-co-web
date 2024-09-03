import ImageContainer from "./ImageContainer"
import logo from "../images/nuroverse-logo.svg"

export default function Header() {
  return (
    <div className="absolute top-0 left-0 right-0 z-10">
      <div className="flex my-container mx-auto my-4 justify-between items-center">
        <div className="flex h-8">
          <ImageContainer src={logo} alt="Nuroverse logo" />
        </div>
        <button>
          <a href="https://linktr.ee/nuroverse" target="_blank" className="btn-primary">
            <span className="text-trusty-900">Contact Us</span>
          </a>
        </button>
      </div>
    </div>
  );
}
