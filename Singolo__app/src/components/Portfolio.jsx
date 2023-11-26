import { images } from "../constants";
import styles from "../styles";

const Portfolio = () => {
  return (
    <section
      className={`${styles.sectionCenter} bg-[#2D303A] px-[30px] sm:px-[40px] py-[42px] sm:py-[55px]`}
      id="Portfolio"
    >
      <div className="flex flex-col max-w-[1020px] gap-[25px] sm:gap-[20px]">
        <div className="flex flex-col">
          <h2 className={`${styles.heading1} mb-[12px]`}>Portfolio</h2>
          <p className={`${styles.paragraph} mb-[10px]`}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula,
            eget lacinia odio sem nec elit.
          </p>
          <div className="flex flex-row gap-[10px]">
            <button className="text-[12px] font-lato font-normal leading-[12px] text-white rounded-[5px] border-[1px] border-[#BBB] py-[4px] px-[5.85px]">
              All
            </button>
            <button className="text-[12px] font-lato font-normal leading-[12px] text-[#767E9E] rounded-[5px] border-[1px] border-[#767E9E] py-[4px] px-[7px]">
              Web Design
            </button>
            <button className="text-[12px] font-lato font-normal leading-[12px] text-[#767E9E] rounded-[5px] border-[1px] border-[#767E9E] py-[4px] px-[6.5px]">
              Graphic Design
            </button>
            <button className="text-[12px] font-lato font-normal leading-[12px] text-[#767E9E] rounded-[5px] border-[1px] border-[#767E9E] py-[4px] px-[6px]">
              Artwork
            </button>
          </div>
        </div>
        <div className="flex flex-wrap gap-[13px] sm:gap-[26px] items-center">
          {images.map((item, index) => (
            <img
              src={item.image}
              alt="icon"
              key={index}
              className={`max-w-[151px] max-h-[128px] ss:max-w-[215px] ss:max-h-[183px] ${
                item.id > 8 ? "hidden" : "block"
              } ss:block bs:block smd:max-w-[131px] smd:max-h-[100px] object-contain`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
