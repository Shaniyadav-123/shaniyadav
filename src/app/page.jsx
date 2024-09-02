// import Image from "next/image";
import Navbar from "./component/Navbar"
import Features from "./component/Features"
import Hroperations from "./component/HR_Operations"
import Work from "./component/Work"
import Transform from "./component/Transform";
import Footer from "./component/Footer"
export default function Home() {
  return (
  <>
  <div className="bg-black text-white">
  <Navbar/>
  <Features/>
  <Hroperations/>
  <Work/>
  <Transform/>
  <Footer/>
  </div>
  </>
  );
}
