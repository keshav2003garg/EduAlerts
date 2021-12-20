export default () => {
    return (
        <>
            <footer>

                <div className="upperFooter flex-center">
                    <img src="/images/ecounselling.png"></img>
                    <img src="/images/digital-india-logo.png"></img>
                    <img src="/images/data-gov-logo.png"></img>
                    <img src="/images/gov-logo.png"></img>
                    <img src="/images/nic-logo.png"></img>
                </div>

                <div className="lowerFooter flex-space-btw">
                    <div className="leftLowerFooter font-bold">Version 2.6628</div>
                    <div className="centerLowerFooter font-bold">This site is designed, developed and hosted by eCounselling Division, NIC and the contents are provided by JAC, Delhi. For any further information, please contact JAC, Delhi</div>
                    <div className="rightLowerFooter font-bold"><div>Visitors: <span>2033645</span></div></div>
                </div>

            </footer>


            <style jsx>{`
                .upperFooter{
                    padding: 0.5rem;
                    background-color: #2e5274;
                }
                    .upperFooter img{
                        margin: 0.25rem 1rem;
                        cursor: pointer;
                    }


                .lowerFooter{
                    padding: 1rem;
                    background-color: #002c56;
                }
                    .leftLowerFooter{
                        flex: 0.75;
                        color: white;
                        font-size: 14px;
                    }
                    .centerLowerFooter{
                        flex: 1.7;
                        color: white;
                        font-size: 14px;
                        text-align: center;
                    }
                    .rightLowerFooter{
                        display: flex;
                        justify-content: flex-end;
                        flex: 1;
                        color: white;
                        font-size: 14px;
                    }
                        .rightLowerFooter div{
                            padding: 0.75rem;
                            background-color: #313131;
                            border: 1px solid #1b1b1b;
                        }
                            .rightLowerFooter div span{
                                color: #FFEB3B;
                                font-size: 24px;
                                font-weight: bold;
                            }
            `}</style>
        </>
    );
}