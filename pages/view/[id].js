import { useRouter } from "next/dist/client/router";
import Head from 'next/head';

import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/DocNav";
import DocView from "../../components/Main/docView/docView";
import Footer from "../../components/Footer/Footer";

export default () => {
    const router = useRouter();
    const { id } = router.query;
    return (
        <>
            <Head>
                <title>View</title>
            </Head>

            <Header />
            <Navbar />
            <DocView id={id} />
            <Footer />
        </>
    );
}