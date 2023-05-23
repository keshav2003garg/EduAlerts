import { useState, useEffect } from "react";
import Link from 'next/link';

export default () => {
    const [newsList, setNewsList] = useState([]);
    const [usefullLink, setUsefullLink] = useState([]);
    const getNewsList = async () => {
        try {
            const response = await fetch('/api/newsNevents', {
                method: 'GET'
            })
            const json = await response.json();
            setNewsList(json);           
        } catch (error) {
            console.log(error);         
        }
    }
    const getUsefullLink = async () => {
        try {
            const response = await fetch('/api/usefullLinks', {
                method: 'GET'
            })
            const json = await response.json();
            setUsefullLink(json);        
        } catch (error) {
            console.log(error);        
        }
    }
    useEffect(() => {
        getNewsList();
        getUsefullLink();
    }, [])
    let check1 = newsList.length;
    let check2 = usefullLink.length;
    if(check1==0){check1=null}
    if(check2==0){check2=null}
    
    return (
        <>
            <aside className="rightDiv">
                {check1 && <div className="newsNevents">
                    <h5 className="font-semiBold">News & Events</h5>
                    <div className="rightTopContainer">
                        <ul>
                            {newsList.map((element) => {
                                return (
                                    <Link href={`/view/${element._id}`} key={element._id} ><li>{element.list}</li></Link>
                                )
                            })}
                        </ul>
                    </div>
                </div>}

                {check2 && <div className="usefullLinks">
                    <h5 className="rightHeading font-semiBold">Useful Links</h5>
                    <div className="rightContainer">
                        <ul>
                            {usefullLink.map((element) => {
                                return (
                                    <Link href={`/view/${element._id}`} key={element._id} ><li>{element.list}</li></Link>
                                )
                            })}
                        </ul>
                    </div>
                </div>}
            </aside>


            <style jsx>{`
                .rightDiv{
                    margin: 0.75rem;
                    flex: 1;
                }
                    .newsNevents{
                        margin-bottom: 0.75rem;
                        border: 1px solid #2f3335;
                        border-bottom: 5px solid #2f3335
                    }
                        .newsNevents h5{
                            background-color: #2f2d2d;
                            color: white;
                            padding: 0.6rem;
                            font-size: 18px;
                        }
                        .rightTopContainer{
                            min-height: 200px;
                            background-color: #ffffff;
                        }
                            .rightTopContainer ul{
                                list-style: none;
                            }
                                .rightTopContainer ul li{
                                    padding: 0.7rem 0.3rem;
                                    font-size: 12px;
                                    font-weight: 700;
                                    border-bottom: 1px solid #efefef;
                                    color: black;
                                    cursor: pointer;
                                }
                                .rightTopContainer ul li:hover{
                                    background-color: #3c3738;
                                    color: white;
                                }


                    .usefullLinks{
                        box-shadow: -1px 1px 11px 1px #808080;
                    }
                        .rightHeading{
                            padding: 0.6rem;
                            background-color: #f3f3f3;
                            font-size: 18px;
                            color: black;
                            border-bottom: 1px solid gainsboro;
                        }
                        .rightContainer{
                            background-color: #ffffff;
                        }
                            .rightContainer ul{
                                list-style: none;
                            }
                                .rightContainer ul li{
                                    padding: 0.7rem 0.3rem;
                                    font-size: 14px;
                                    border-bottom: 1px solid #efefef;
                                    color: black;
                                    cursor: pointer;
                                }
            `}</style>
        </>
    );
}