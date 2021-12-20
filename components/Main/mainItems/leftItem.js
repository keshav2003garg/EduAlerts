import { useEffect, useState } from "react";
import Link from 'next/link';

export default () => {
	const [implist, setImplist] = useState([]);
	const [addlist, setAddlist] = useState([]);
	const getImportantList = async () => {
		try {
			const response = await fetch('http://localhost:3000/api/importantInfo', {
				method: 'GET'
			})
			const json = await response.json();
			setImplist(json);
		} catch (error) {
			const response = await fetch('http://192.168.1.7:3000/api/importantInfo', {
				method: 'GET'
			})
			const json = await response.json();
			setImplist(json);			
		}
	}
	const getAdditionalLinks = async () => {
		try {
			const response = await fetch('http://localhost:3000/api/additionalLinks', {
				method: 'GET'
			})
			const json = await response.json();
			setAddlist(json);			
		} catch (error) {
			const response = await fetch('http://192.168.1.7:3000/api/additionalLinks', {
				method: 'GET'
			})
			const json = await response.json();
			setAddlist(json);			
		}
	}
	useEffect(() => {
		getImportantList();
		getAdditionalLinks();
	}, [])
	let check1 = implist.length;
	let check2 = addlist.length;
    if(check1==0){check1=null}
    if(check2==0){check2=null}

	return (
		<>
			<aside className="leftDiv">

				{check1 && <div className="important">
					<div className="leftHeading flex-space-btw">
						<h5 className="font-regular">Important Information</h5>
						<i className="far fa-calendar-check fa-lg"></i>
					</div>
					<div className="leftContainer">
						<ul>
							{implist.map((element) => {
								return (<Link href={`/view/${element._id}`} key={element._id} ><li>{element.list}</li></Link>)
							})}
						</ul>
					</div>
				</div>}

				{check2 && <div className="additional">
					<div className="leftAddHeading flex-space-btw">
						<h5>Additional Links</h5>
						<i className="fas fa-external-link-square-alt fa-lg"></i>
					</div>
					<div className="leftAddContainer">
						<ul>
							{addlist.map((element) => {
								return (<Link href={`/view/${element._id}`} key={element._id} ><li>{element.list}</li></Link>)
							})}
						</ul>
					</div>
				</div>}
				
			</aside>


			<style jsx>{`
				.leftDiv{
					margin: 0.75rem;
					flex: 1;
				}
				.important{
					margin-bottom: 20px;
				}
					.leftHeading{
						padding: 0.6rem;
						background-color: #002c56;
						color: white;
					}
						.leftHeading h5{
							font-size: 18px;
						}
					.leftContainer{
					background-color: #464545;
					}
						.leftContainer ul{
							list-style: none;
						}
							.leftContainer ul li{
							padding: 0.7rem 0.3rem;
							color: white;
							font-size: 14px;
							border-bottom: 1px solid white;
							}
							.leftContainer ul li:hover{
							background-color: #5b5851;
							cursor: pointer;
							}
				.additional{
					margin-bottom: 20px;
				}
					.leftAddHeading{
						padding: 0.6rem;
						background-color: #f3f3f3;
						color: black;
						border-bottom: 4px solid #002c56;
					}
						.leftAddHeading h5{
							font-size: 18px;
						}
					.leftAddContainer ul{
					list-style: none;
					}
						.leftAddContainer ul li{
						margin: 5px;
						padding: 8px 4px 8px 6px;
						background-color: #eeeff1;
						font-size: 14px;
						border: 1px solid #d9dce1;
						border-left: 8px solid #002c56;
						transition: all 1s;
						}
						.leftAddContainer ul li:hover{
							background-color: #002c56;
							color: white;
							padding-left: 10px;
						}
      `}</style>
		</>

	);
}