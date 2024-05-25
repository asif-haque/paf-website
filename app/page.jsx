import Course from "./components/course/Course";
import Donatebar from "./components/donatebar/Donatebar";
import Downloadbar from "./components/downloadbar/Downloadbar";
import Faq from "./components/faq/Faq";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Searchbar from "./components/searchbar/Searchbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Donatebar />
      <Searchbar />
      <main>
        <Course />
      </main>
      <footer>
        <Faq />
        <Footer />
        <Downloadbar />
      </footer>
    </>
  );
}
