import Image from "next/image";
import "./style-carousel.css";
export function Carousels() {
  return (
    <section className="p-8">
      <div className="relative max-w-[48rem] mx-0 my-auto">
        <div className="w-full h-[80vh] slider aspect-video flex overflow-auto ">
          <img
            fill
            id="img1"
            src="https://as1.ftcdn.net/v2/jpg/06/99/70/94/1000_F_699709472_uz7FOEgBUfwlbhOuWBMC6ffhkz0BcK8l.jpg"
            alt="..."
          />

          <img
            fill
            id="img2"
            src="https://as1.ftcdn.net/v2/jpg/06/99/70/94/1000_F_699709472_uz7FOEgBUfwlbhOuWBMC6ffhkz0BcK8l.jpg"
            alt="..."
          />

        </div>
        <div className="slider-nav">
          <a href="#img1"></a>
          <a href="#img2"></a>
        </div>
      </div>
    </section>
  );
}
