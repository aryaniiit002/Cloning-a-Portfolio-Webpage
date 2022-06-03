import React from 'react';
import "./Hobbies.css";

import { badminton, guitar, friends, painting, reading } from '../../../images';


const Hobbies = () => {

	const hobbiesImagesColumn1 = [
		{
			img: guitar,
		},
		{
			img: painting,
		},
	]
	const hobbiesImagesColumn2 = [
		{
			img: friends,
		},
		{
			img: badminton,
		},
		{
			img: reading,
		},
	]

	const imageListColumn1 = hobbiesImagesColumn1.map((data, i) => {
		return (
			<div key={i}>
				<img className="hobbiesImage" src={data.img} alt="" /><br />
			</div>
		)
	});
	const imageListColumn2 = hobbiesImagesColumn2.map((data, i) => {
		return (
			<div key={i}>
				<img className="hobbiesImage" src={data.img} alt="" /><br />
			</div>
		)
	});

	return (
		<div id="hobbies" className="hobbiesContainer">
			<div className="leftHobbiesContainer">
				<div className="leftHobbiesContent">
					<div className="titleContainer">
						My Side Hustle
					</div>
					<div className="hobbiesdesc">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam, labore?
					</div>
				</div>
			</div>
			<div className="rightHobbiesContainer">
				<div className="rightContentContainerRow">
					<div className="column">{imageListColumn1}</div>
					<div className="column">{imageListColumn2}</div>
				</div>
			</div>
		</div>
	)
}

export default Hobbies