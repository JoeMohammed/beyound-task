import bgImg from "../../../assets/aboutPage/bg.jpg";
import { MASTER_DATA } from "../../../data/masterPlane";
import masterImg from "../../../assets/aboutPage/master_plane.jpg";
import Title from "../../utils/title";
import MainBtn from "../../utils/buttons";

export default function IntroSection() {
  return (
    <section className="secBg pb-10">
      <img src={bgImg} alt="bg" className="w-full max-w-full" />

      <div className="container">
        <div className="flex flex-wrap -mx-4">
          <div className="flex-auto w-full mb-6 lg:w-1/2 lg:max-w-max flex lg:mb-0 px-4">
            <img
              src={masterImg}
              alt={MASTER_DATA.titleOne + MASTER_DATA.titleTwo}
              className="w-full max-w-full object-cover object-center"
            />
          </div>
          <div className="flex-auto w-full lg:w-1/2 text-white px-4">
            <Title>
              {MASTER_DATA.titleOne} <br /> <span>{MASTER_DATA.titleTwo}</span>
            </Title>
            <p className="mb-6 md:mb-12">{MASTER_DATA.desc}</p>

            <div className="flex flex-col space-y-4 items-center md:flex-row md:space-x-5 md:space-y-0">
              <MainBtn to={MASTER_DATA.brochureLink}>Download Brochure</MainBtn>
              <MainBtn to="/master-plane" download>
                Show Master plan
              </MainBtn>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
