/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import "./Contact.css";

import { instagram, facebook, youtube } from '../../../images';


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

	const socialList = socialIcons.map((data, i) => {
		return (
			<div key={i}>
				<img className="icons" src={data.img} alt="" /><br />
			</div>
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
						<a
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