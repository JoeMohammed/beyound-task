import { Fragment } from "react";
import Amenities from "../../components/pages/about/amenities";
import IntroSection from "../../components/pages/about/introSection";

export default function About() {
  return (
    <Fragment>
      <main>
        <IntroSection />
        <Amenities />
      </main>
    </Fragment>
  );
}
