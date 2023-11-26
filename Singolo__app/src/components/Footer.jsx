import styles from "../styles";
import { linksfooter } from "../constants";
const Footer = () => {
  return (
    <footer
      className={`${styles.sectionCenter} bg-[#2D303A] py-[22px] px-[40px]`}
    >
      <div className="flex flex-row justify-center items-center flex-1 bs:justify-between">
        <p className="text-[13px] text-[#666D89] font-lato font-bold leading-[18px] hidden bs:block">
          © Copyright 2013{" "}
        </p>
        <nav className="flex flex-row gap-[10px]">
          {linksfooter.map((item, index) => (
            <a href="#" key={index}>
              {" "}
              <img src={item.icon} alt={item.name} />
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
