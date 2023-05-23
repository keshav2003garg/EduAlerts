import { useRouter } from "next/dist/client/router";
import { useState, useEffect } from "react";

export default () => {
    const { query } = useRouter();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [auth, setAuth] = useState(false);

    const [implistinput, setImplistinput] = useState("")
    const [addlistinput, setAddlistinput] = useState("")
    const [newslistinput, setNewslistinput] = useState("")
    const [usefullListinput, setUsefullListinput] = useState("")
    const [marqueeinput, setMarqueeinput] = useState("")


    const [implist, setImplist] = useState([]);
    const [addlist, setAddlist] = useState([]);
    const [newsList, setNewsList] = useState([]);
	const [usefullLink, setUsefullLink] = useState([]);
	const [marquee, setMarquee] = useState([]);
    const formHandler = async (e) => {
        e.preventDefault();
        const response = await fetch('/api/adminAuth', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        });
        const json = await response.json();
        setAuth(json.auth)
    }
    const getImportantList = async () => {
        const response = await fetch('/api/importantInfo', {
            method: 'GET'
        })
        const json = await response.json();
        setImplist(json);
    }
    const getAdditionalLinks = async () => {
		const response = await fetch('/api/additionalLinks', {
			method: 'GET'
		})
		const json = await response.json();
		setAddlist(json);
	}
    const getNewsList = async () => {
		const response = await fetch('/api/newsNevents', {
			method: 'GET'
		})
		const json = await response.json();
		setNewsList(json);
	}
	const getUsefullLink = async () => {
		const response = await fetch('/api/usefullLinks', {
			method: 'GET'
		})
		const json = await response.json();
		setUsefullLink(json);
	}
    const getMarquee = async () => {
		const response = await fetch('/api/marquee', {
			method: 'GET'
		})
		const json = await response.json();
		setMarquee(json);
	}
    
    useEffect(() => {
        getImportantList();
        getAdditionalLinks();
        getNewsList();
		getUsefullLink();
        getMarquee();
    }, [implistinput, addlistinput, newslistinput, usefullListinput, marqueeinput])


    if (query.adminID == 8700016795) {
        if (!auth) {
            return (
                <>
                    <h1 style={{ textAlign: "center" }}>Welcome to admin portal</h1>
                    <form id="adminAuth" action="/api/adminAuth" method="get" onSubmit={formHandler}>
                        <div className="form">
                            <label htmlFor="username" name="username" id="username">Username:</label>
                            <input type="text" id="username" value={username} onChange={(e) => { setUsername(e.target.value) }} />
                            <label htmlFor="password" name="password" id="password">Password:</label>
                            <input type="password" id="password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                            <input type="submit" value="Submit" className="submit" />
                        </div>
                    </form>

                    <style jsx>{`
                        .form{
                            height: 90vh;
                            display: flex;
                            flex-direction: column;
                            justify-content: center;
                            align-items: center;
                        }
                        .submit{
                            margin: 0.75rem;
                        }
                    `}</style>
                </>
            );
        }
        else {

            const handleRelease1 = async (e) => {
                e.preventDefault();
                const response = await fetch('/api/importantInfo', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ list: implistinput, tag: "importantInfo" })
                })
                const json = await response.json();
                setImplistinput("")
            }
            const handleRelease2 = async (e) => {
                e.preventDefault();
                const response = await fetch('/api/additionalLinks', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ list: addlistinput, tag: "additionalLinks" })
                })
                const json = await response.json();
                setAddlistinput("")
            }
            const handleRelease3 = async (e) => {
                e.preventDefault();
                const response = await fetch('/api/newsNevents', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ list: newslistinput, tag: "newsNevents" })
                })
                const json = await response.json();
                setNewslistinput("")
            }
            const handleRelease4 = async (e) => {
                e.preventDefault();
                const response = await fetch('/api/usefullLinks', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ list: usefullListinput, tag: "usefullLinks" })
                })
                const json = await response.json();
                setUsefullListinput("")
            }
            const handleRelease5 = async (e) => {
                e.preventDefault();
                const response = await fetch('/api/marquee', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ list: marqueeinput, tag: "marquee" })
                })
                const json = await response.json();
                setMarqueeinput("");
            }

            const handleDelete = async(e)=>{
                await fetch(`/api/deleteList?id=${e.target.id}`, {
                    method: 'DELETE'
                })
                setImplistinput(null);
            }


            return (
                <>
                    <h1 style={{ textAlign: "center", marginBottom: "25px" }}>You logged in as admin</h1>
                    <div className="impInfo max-w-80">
                        <h2>Release a Important Information</h2>
                        <form onSubmit={handleRelease1} className="form">
                            <label htmlFor="list">Release a Notice: </label>
                            <input type="text" name="release" id="list" value={implistinput} onChange={(e) => { setImplistinput(e.target.value) }} size="55" />
                            <input type="submit" value="Release" />
                        </form>
                        <div className="preview">
                            {implist.map((element) => {
                                return (
                                    <div key={element._id}>
                                        <p>{element.list}</p>
                                        <i className="fas fa-trash-alt" id={element._id} onClick={handleDelete}></i>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className="additionalLinks max-w-80">
                        <h2>Release a Additional Links</h2>
                        <form onSubmit={handleRelease2} className="form">
                            <label htmlFor="list">Release a Notice: </label>
                            <input type="text" name="release" id="list" value={addlistinput} onChange={(e) => { setAddlistinput(e.target.value) }} size="55" />
                            <input type="submit" value="Release" />
                        </form>
                        <div className="preview">
                            {addlist.map((element) => {
                                return (
                                    <div key={element._id}>
                                        <p>{element.list}</p>
                                        <i className="fas fa-trash-alt" id={element._id} onClick={handleDelete}></i>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className="newsNevents max-w-80">
                        <h2>Release a News & Event</h2>
                        <form onSubmit={handleRelease3} className="form">
                            <label htmlFor="list">Release a Notice: </label>
                            <input type="text" name="release" id="list" value={newslistinput} onChange={(e) => { setNewslistinput(e.target.value) }} size="55" />
                            <input type="submit" value="Release" />
                        </form>
                        <div className="preview">
                            {newsList.map((element) => {
                                return (
                                    <div key={element._id}>
                                        <p>{element.list}</p>
                                        <i className="fas fa-trash-alt" id={element._id} onClick={handleDelete}></i>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className="usefullLinks max-w-80">
                        <h2>Release a Usefull Link</h2>
                        <form onSubmit={handleRelease4} className="form">
                            <label htmlFor="list">Release a Notice: </label>
                            <input type="text" name="release" id="list" value={usefullListinput} onChange={(e) => { setUsefullListinput(e.target.value) }} size="55" />
                            <input type="submit" value="Release" />
                        </form>
                        <div className="preview">
                            {usefullLink.map((element) => {
                                return (
                                    <div key={element._id}>
                                        <p>{element.list}</p>
                                        <i className="fas fa-trash-alt" id={element._id} onClick={handleDelete}></i>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className="marquee max-w-80">
                        <h2>Release a Marquee Information</h2>
                        <form onSubmit={handleRelease5} className="form">
                            <label htmlFor="list">Release a Notice: </label>
                            <input type="text" name="release" id="list" value={marqueeinput} onChange={(e) => { setMarqueeinput(e.target.value) }} size="55" />
                            <input type="submit" value="Release" />
                        </form>
                        <div className="preview">
                            {marquee.map((element) => {
                                return (
                                    <div key={element._id}>
                                        <p>{element.list}</p>
                                        <i className="fas fa-trash-alt" id={element._id} onClick={handleDelete}></i>
                                    </div>
                                )
                            })}
                        </div>
                    </div>



                    <style jsx>{`
                        .impInfo, .additionalLinks, .newsNevents, .usefullLinks, .marquee{
                            margin-top: 1rem;
                            margin-bottom: 1rem;
                            display: flex;
                            flex-direction: column;
                            justify-content: center;
                            align-items: center;
                            border: 1px solid black;
                            padding: 0.5rem;
                        }
                        .impInfo h2, .additionalLinks h2, .newsNevents h2, .usefullLinks h2, .marquee h2{
                            margin-bottom: 15px;
                            text-align: center;
                        }
                        .form{
                            max-width: 75%;
                            text-align: center;
                        }
                        .form input{
                            max-width: 75%;
                        }

                        .preview{
                            margin: 1rem;
                            padding: 1rem;
                            width: 95%;
                            height: 15vw;
                            display: flex;
                            flex-direction: column;
                            border: 1px solid #cac6c6;
                            border-radius: 12px;
                            overflow-y: auto;
                        }
                        .preview div{
                            margin: 0.5rem;
                            padding: 0.5rem;
                            border: 1px solid #cac6c6;
                            width: auto;
                            border-radius: 10px;
                            display: flex;
                            justify-content: space-between;
                            align-items: center;
                            font-size: 14px;
                        }
                        i{
                            cursor: pointer;
                        }
                    `}</style>
                </>
            )
        }
    }
    else {
        return (
            <h1 style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", textAlign: "center" }}>You have no access to admin panel</h1>
        )
    }
}