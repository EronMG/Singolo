import styles from "../styles";
import { persons } from "../constants";

const About = () => {
  return (
    <section
      className={`${styles.sectionCenter} px-[30px] ss:px-[40px] pt-[33px] pb-[45px] ss:pt-[55px] ss:pb-[67px]`}
      id="About"
    >
      <div className="flex flex-wrap max-w-[1020px] gap-[47px]">
        <div className="flex flex-col gap-[14px]">
          <h1 className={`${styles.heading1}`}>About Us</h1>
          <p className={`${styles.paragraph}`}>
            Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum.
            Duis mollis, non commodo luctus, nisi erat porttitor ligula, eget
            lacinia odio sem nec elit. Fusce dapibus, tellus ac cursus commodo,
            tortor mauris condimentum nibh.
          </p>
        </div>
        <div className="flex flex-wrap gap-[20px] ss:gap-[14px] sm:gap-[20px]">
          {persons.map((item, index) => (
            <div key={index} className="flex flex-col gap-[15px]">
              <div className="flex flex-col gap-[17px]">
                <img
                  src={item.icon}
                  alt={item.name}
                  className="max-w-[300px] ss:max-w-[218px] md:max-w-[300px]"
                />
                <div className="flex flex-col gap-[10px]">
                  <h2 className={`${styles.heading2}`}>{item.name}</h2>
                  <p className="text-[12px] text-[#767E9E] font-lato font-normal leading-[22px] max-w-[300px] ss:max-w-[218px]">
                    {item.title}
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-[8px]">
                {item.links.map((item, index) => (
                  <a key={index} href="#">
                    <img
                      src={item.icon}
                      alt={item.name}
                      className="object-contain"
                    />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
