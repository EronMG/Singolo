import styles from "../styles";

const Contact = () => {
  return (
    <section
      className={`${styles.sectionCenter} bg-[#F06C64] px-[30px] ss:px-[40px] pt-[44px] pb-[42px] ss:pb-[64px]`}
      id="Contact"
    >
      <div className="max-w-[1020px] flex flex-col">
        <div className="flex flex-col  gap-[14px]">
          <h1 className="text-[30px] text-[#F0D8D9] font-lato leading-normal font-bold">
            Get a Quote
          </h1>
          <p className="text-[18px] text-[#F0D8D9] font-lato leading-[30px] font-light">
            Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum.
            Duis mollis, non commodo luctus, nisi erat porttitor ligula, eget
            lacinia odio sem nec elit. Fusce dapibus, tellus ac cursus commodo,
            tortor mauris condimentum nibh.
          </p>
        </div>
        <div className="flex flex-wrap gap-[20px]">
          <form className="flex flex-col gap-[15px] w-full flex-1">
            <input
              type="text"
              placeholder="Name (required)"
              className="font-lato font-normal text-[16px] bg-[#D6564F] rounded-[5px] py-[7px]"
            />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email (required)"
              className="font-lato font-normal text-[16px] bg-[#D6564F] rounded-[5px] py-[7px]"
            />
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Subject"
              className="font-lato font-normal text-[16px] bg-[#D6564F] rounded-[5px] py-[7px]"
            />
            <input
              type="text"
              id="text"
              name="text"
              placeholder="Describe your project in detail..."
              className="font-lato font-normal text-[16px] bg-[#D6564F] rounded-[5px] h-[159px]"
            />
            <button className="bg-[#FBC65F] rounded-[5px] py-[7px] text-[14px] font-lato font-normal leading-normal text-[#886A30] bs:w-[136px]">
              SEND
            </button>
          </form>
          <div className="flex flex-col gap-[20px]">
            <div className="flex flex-col gap-[7px]">
              <h2 className="text-[18px] text-[#F0D8D9] font-lato leading-[18px] font-bold">
                Contact Information
              </h2>
              <p className="text-[12px] text-[#F0D8D9] font-lato leading-[22px] font-normal max-w-[300px]">
                Quisque hendrerit purus dapibus, ornare nibh vitae, viverra
                nibh. Fusce vitae aliquam tellus. Proin sit amet volutpat
                libero. Nulla sed nunc et tortor luctus faucibus. Morbi at
                aliquet turpis, et consequat felis.
              </p>
            </div>
            <div className="flex flex-col gap-[3px]">
              <div className="flex flex-row gap-[10px] items-center">
                <img
                  src="../src/assets/ico-location.svg"
                  alt="icon"
                  width="12px"
                  height="12px"
                />
                <p className="text-[12px] text-[#F0D8D9] font-lato leading-[22px] font-normal max-w-[300px]">
                  Elm St. 14/05 Lost City
                </p>
              </div>
              <div className="flex flex-row gap-[10px] items-center">
                <img
                  src="../src/assets/ico-phone.svg"
                  alt="icon"
                  width="12px"
                  height="12px"
                />
                <p className="text-[12px] text-[#F0D8D9] font-lato leading-[22px] font-normal max-w-[300px]">
                  03528 331 86 35{" "}
                </p>
              </div>
              <div className="flex flex-row gap-[10px] items-center">
                <img
                  src="../src/assets/ico-mail.svg"
                  alt="icon"
                  width="12px"
                  height="12px"
                />
                <p className="text-[12px] text-[#F0D8D9] font-lato leading-[22px] font-normal max-w-[300px]">
                  info@singolo.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
