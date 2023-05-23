import Head from 'next/head'

import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import Main from "../components/Main/Main";
import Footer from "../components/Footer/Footer";

export default function index() {
  return (
    <>
      <Head>
        <title>EduAlerts Admission Counseling - DTU, DSEU, IGDTUW, IIIT-D, NSUT</title>
      </Head>

      <Header />
      <Navbar />
      <Main />
      <Footer />
    </>
  )
}
