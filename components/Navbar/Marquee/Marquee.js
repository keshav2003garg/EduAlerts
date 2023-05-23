import { useState, useEffect } from "react";

export default () => {
    const [marquee, setMarquee] = useState([]);
    const getMarquee = async () => {
        try {
            const response = await fetch('/api/marquee', {
                method: 'GET'
            })
            const json = await response.json();
            setMarquee(json);
        } catch (error) {
            console.log(error)
        }
	}
    useEffect(() => {
		getMarquee();
	}, [])
    let check = marquee.length;
    if(check==0){check=null}
    return (
        <>
            {check && <section>
                <marquee direction="left" behavior="alternate" className="marquee" onMouseOver={(e)=>{e.view.document.querySelector('.marquee').stop()}} onMouseOut={(e)=>{e.view.document.querySelector('.marquee').start()}} >
                    {marquee.map((element)=>{
                        return (
                            <p key={element._id}>{element.list}</p>
                        )
                    })}
                </marquee>
            </section>}

                
            <style jsx>{`
                section{
                    background-color: #eaf5ff;
                    padding: 5px;
                }
                marquee{
                    display: flex;
                    overflow-x: hidden;
                }          
                .marquee p{
                    margin: 0px 10px;
                    padding: 5px 10px;
                    background: #fff;
                    border: 1px dashed #636363;
                    border-radius: 4px;
                    font-size: 14px;
                    white-space: nowrap;
                    position: relative;
                }
            `}</style>
        </>
    );
}