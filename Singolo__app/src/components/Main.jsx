import { useState } from "react";

const Main = () => {
  const [image, setImage] = useState("../src/assets/Slider.png");
  const [sectionColor, setSectionColor] = useState("#F06C64");
  const [arrow, setArrow] = useState("#E94348");

  const toggle = () => {
    setImage((prevImage) =>
      prevImage === "../src/assets/Slider.png"
        ? "../src/assets/SliderBlue.png"
        : "../src/assets/Slider.png"
    );

    setSectionColor((prevColor) =>
      prevColor === "#F06C64" ? "#648BF0" : "#F06C64"
    );
    setArrow((prevColor) => (prevColor == "#E94348" ? "#5679D4" : "#E94348"));
  };

  return (
    <section
      style={{ backgroundColor: sectionColor }}
      className="flex justify-center items-center"
    >
      <img src={image} alt="phones" />
      <div className="flex justify-between absolute w-full px-[10px] max-w-[1020px]">
        <button
          onClick={toggle}
          style={{ color: arrow }}
          className="active:scale-[120%]"
        >
          ←
        </button>
        <button
          onClick={toggle}
          style={{ color: arrow }}
          className="active:scale-[120%]"
        >
          →
        </button>
      </div>
    </section>
  );
};

export default Main;
