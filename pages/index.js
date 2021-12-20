import Head from 'next/head'

import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import Main from "../components/Main/Main";
import Footer from "../components/Footer/Footer";

export default function index() {
  return (
    <>
      <Head>
        <title>Joint Admission Counseling Delhi 2021 - DTU, DSEU, IGDTUW, IIIT-D, NSUT</title>
      </Head>

      <Header />
      <Navbar />
      <Main />
      <Footer />
    </>
  )
}
