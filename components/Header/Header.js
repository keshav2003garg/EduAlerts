export default () => {
    return (
        <>
            <div className="topStrip"></div>

            <div className="headerTop flex-space-btw">
                <div className="leftItem flex-start">
                    <div className="gov font-semiBold">भारत सरकार<br />Government of India</div>
                    <div className="nic font-semiBold">राष्ट्रीय सूचना विज्ञान केंद्र<br />National Informatics Centre</div>
                </div>

                <div className="rightItem flex-end">
                    <div className="languageSelector font-semiBold">Language: <select><option>English</option></select></div>
                    <div className="skipBtn font-semiBold">Skip to main content</div>
                </div>
            </div>

            <div className="flex-space-btw">
                <div className="headerBottomLeft flex-start"><img src="/images/headerBottomLeft.jpg" width="223" height="85.93"></img></div>
                <div className="headerBottomCenter flex-center">
                    <h1 className="jac font-bold">EduAlerts Admission Counseling</h1>
                    <h4 className="instituteName font-semiBold">DTU, DSEU, IGDTUW, IIIT-D, NSUT</h4>
                </div>
                <div className="headerBottomRight flex-end"><img src="/images/headerBottomRight.jpg" width="205" height="94.69"></img></div>
            </div>


            <style jsx>{`
                .topStrip{
                    height: 5px;
                    background-color: #f7931e;
                }


                .headerTop{
                    background-color: #ececec;
                }
                    .leftItem{
                        margin-left: 0.25rem;
                    }
                        .gov{
                            padding: 0.5rem;
                            font-size: 11px;
                            border-right: 2px solid #bfbfbf;
                            cursor: pointer;
                        }
                        .gov:hover{
                            text-decoration: underline;
                        }
                        .nic{
                            padding: 0.5rem;
                            font-size: 11px;
                            border-right: 2px solid #bfbfbf;
                            cursor: pointer;
                        }
                        .nic:hover{
                            text-decoration: underline;
                        }
                    .rightItem{
                        margin: 0 0.5em 0 auto;
                    }
                        .languageSelector{
                            padding: 0.5rem;
                            font-size: 11px;
                            border-right: 2px solid #bfbfbf;
                        }
                        .skipBtn{
                            padding: 0.5rem;
                            font-size: 11px;
                            border-right: 2px solid #bfbfbf;
                            cursor: pointer;
                        }
                        .skipBtn:hover{
                            text-decoration: underline;
                        }

                .headerBottomLeft{
                    margin: 0.75rem;
                    flex: 1;
                }
                .headerBottomCenter{
                    margin: 0.75rem;
                    flex: 3;
                    flex-direction: column;
                }
                    .jac{
                        color: #002c56;
                        font-size: 22px;
                        text-align: center;
                    }
                    .instituteName{
                        color: #002c56;
                        font-size: 18px;
                        text-align: center;
                    }
                .headerBottomRight{
                    margin: 0.75rem;
                    flex: 1;
                }


                @media only screen and (max-width: 785px){
                    .headerBottomLeft{
                        flex: 1 100%;
                    }
                    .headerBottomCenter{
                        flex: 1 100%;
                    }
                    .headerBottomRight{
                        flex: 1 100%;
                    }
                }
                @media only screen and (max-width: 575px){
                    .headerBottomLeft{
                        flex: 1 100%;
                        justify-content: center;
                    }
                    .headerBottomCenter{
                        flex: 1 100%;
                    }
                    .headerBottomRight{
                        flex: 1 100%;
                        justify-content: center;
                    }
                }
            `}</style>
        </>
    );
}