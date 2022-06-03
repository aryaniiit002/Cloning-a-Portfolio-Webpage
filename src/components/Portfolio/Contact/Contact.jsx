import React from 'react';
import "./Contact.css";

import instagram from "../../../images/instagram.png";
import facebook from "../../../images/facebook.png";
import youtube from "../../../images/youtube.png";

const Contact = () => {

	const socialIcons = [
		{
			img: instagram,
		},
		{
			img: youtube,
		},
		{
			img: facebook,
		},
	]

	const socialList = socialIcons.map((data) => {
		return (
			<>
				<img className="icons" src={data.img} alt="" /><br />
			</>
		)
	});

	return (
		<div id="contact" className="contactContainer">
			<div className="leftContactContent">
				<div className="contactTexts">
					<div className="title">
						Contact
					</div>
					<div className="email">
						<a href
							onClick={() => window.location = 'mailto:rachel.green@gmail.com'}>
							rachel.green@gmail.com
						</a>
					</div>
					<div className="socalIcons">
						{socialList}
					</div>
				</div>
			</div>
			<div className="rightContactContent">
				All Rights Reserved.
			</div>
		</div>
	)
}

export default Contact