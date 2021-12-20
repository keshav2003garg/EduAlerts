import Link from 'next/link';
import Marquee from "./Marquee/Marquee";

export default () => {
    return (
        <>
            <div className="navbar flex-start">
                <Link href="/"><div className="home">Home</div></Link>
                <div className="contact">Contact Us</div>
            </div>
            <Marquee />


            <style jsx>{`
                .navbar{
                    height: 37px;
                    background-color: #002c56;
                    align-content: center;
                }
                .home{
                    margin-left: 0.5rem;
                    padding: 1rem;
                    border-right: 1px solid white;
                    color: white;
                    font-family: 'Open Sans';
                    font-size: 14px;
                    cursor: pointer;
                }
                .contact{
                    padding: 1rem;
                    border-right: 1px solid white;
                    color: white;
                    font-family: 'Open Sans';
                    font-size: 14px;
                    cursor: pointer;
                }
            `}</style>
        </>
    );
}