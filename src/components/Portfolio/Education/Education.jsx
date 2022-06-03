import React from 'react';
import "./Education.css";

import bg from "../../../images/bg.png";

const Education = () => {
	const dateStyle = {
		color: "#a3cb38",
		fontSize: "33px",
		fontWeight: "600",
		
	};
	const titleStyle = {
		fontSize: "19px",
		fontWeight: "600",
	};
	const descStyle = {
		fontSize: "18px",
	};

	const education = [
		{
			date: "Aug 2019 - Jun 2020",
			title: "Lorem ipsum dolor sit amet consectetur adipisicing.",
			desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae repellendus cupiditate mollitia, quasi amet sapiente!"
		},
		{
			date: "Aug 2019 - Jun 2020",
			title: "Lorem ipsum dolor sit amet consectetur adipisicing.",
			desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae repellendus cupiditate mollitia, quasi amet sapiente!"
		},
	]

	const listItems = education.map((data) => {
		return (
			<div style={{marginBottom:"14px"}}>
				<span style={dateStyle}>{data.date}</span><br />
				<span style={titleStyle}>{data.title}</span><br />
				<span style={descStyle}>{data.desc}</span>
			</div>
		)
	});

	return (
		<div id="education" className="educationContainer">
			<div className="leftContainer">
				<img className="BGimage" src={bg} alt="Profile Pic" />
				<div className="educationContainerHeader">
					My Main Hustle
				</div>
			</div>

			<div className="rightContainer">
				{listItems}
			</div >
		</div>
	)
}

export default Education