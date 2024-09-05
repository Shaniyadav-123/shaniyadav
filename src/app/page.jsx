// import Image from "next/image";
import Head from 'next/head';
import Navbar from "./component/Navbar"
import Features from "./component/Features"
import Hroperations from "./component/HR_Operations"
import Work from "./component/Work"
import Transform from "./component/Transform";
import Footer from "./component/Footer"
import Hero from "./component/Hero"
import Story from "./component/Story"
export default function Home() {
  return (
  <>
 
  <div className="bg-black text-white">
  <Navbar/>
  <Hero/>
  <Features/>
  <Hroperations/>
  <Work/>
  <Story/>
  <Transform/>
  <Footer/>
  </div>
  </>
  );
}
