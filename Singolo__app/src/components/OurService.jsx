import service from "../constants/index";
import styles from "../styles";

const OurService = () => {
  return (
    <section
      className={`${styles.sectionCenter} ${styles.paddungX} pt-[25px] sm:pt-[38px] md:pt-[58px] md:pb-[52px]`}
      id="Service"
    >
      <div className="flex flex-col gap-[25px] flex-1 max-w-[1020px]">
        <div className="flex flex-col gap-[18px]">
          <h1 className={`${styles.heading1}`}>Our Services</h1>
          <p className={`${styles.paragraph}  flex-1 max-w-[936px]`}>
            Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum.
            Duis mollis, non commodo luctus, nisi erat porttitor ligula, eget
            lacinia odio sem nec elit. Fusce dapibus, tellus ac cursus commodo,
            tortor mauris condimentum nibh.
          </p>
        </div>
        <div className="flex flex-wrap gap-[15px] md:gap-[20px] sm:gap-[40px] justify-center">
          {service.map((item, index) => (
            <div
              key={index}
              className="flex flex-row items-start gap-[20px] max-w-[300px]"
            >
              <img src={item.logo} alt={item.name} className="object-contain" />
              <div className="flex flex-col gap-[7px]">
                <h2 className={`${styles.heading2}`}>{item.name}</h2>
                <p className={`${styles.paragraphlow} max-w-[230px]`}>
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurService;
