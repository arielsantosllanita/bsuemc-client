import Content from "./Content";
import Header from "./Header";
import Footer from './Footer';
import Services from './Services';
import FadeInWhenVisible from "@helpers/FadeInWhenVisible";

export default function Index() {
  return (
    <>
      <Header />
      <FadeInWhenVisible>
        <Content />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <Services />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <Footer />
      </FadeInWhenVisible>
    </>
  )
}
