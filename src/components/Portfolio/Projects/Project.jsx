import React from 'react';
import "./project.css";

import recipe from "../../../images/recipe.png";
import emoji from "../../../images/emoji.png";
import guessthenumber from "../../../images/guess-the-number.png";
import rockpaperscissors from "../../../images/rock-paper-scissors.png";
import pokemon from "../../../images/pokemon.png";
import ebirthdaycard from "../../../images/e-birthday-card.png";

const Project = () => {

	const hrefStyle = {
		textDecoration: "none",
		color: "#a3cb38",
		fontSize: "17px",
		fontWeight: "600",
		cursor: "pointer"

	};
	const titleStyle = {
		fontSize: "18px",
		fontWeight: "600",
	};
	const descStyle = {
		fontSize: "16px",
	};

	const projects = [
		{
			img: recipe,
			title: "Recipe Web Page",
			desc: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
			href: "link"
		},
		{
			img: emoji,
			title: "My Fav Emojis",
			desc: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
			href: "link"
		},
		{
			img: guessthenumber,
			title: "Guess the Number",
			desc: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
			href: "link"
		},
		{
			img: rockpaperscissors,
			title: "Rock Paper Scissors",
			desc: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
			href: "link"
		},
		{
			img: pokemon,
			title: "Pokemon Game",
			desc: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
			href: "link"
		},
		{
			img: ebirthdaycard,
			title: "E-Birthday Card",
			desc: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
			href: "link"
		},
	]

	const projectsList = projects.map((data) => {
		return (
			<>
				<div className="projectSlides">
					<div className="topBox"></div>
					<img className="projectImage" src={data.img} alt="" /><br />
					<span style={titleStyle}>{data.title}</span><br />
					<span style={descStyle}>{data.desc}</span><br />
					<a style={hrefStyle} href={data.href}>SEE PROJECT</a>
				</div>
			</>
		)
	});

	return (
		<div id="projects" className="projectContainer">
			<div className="projectHeader">
				My Work
			</div>
			<div className="bio">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor non assumenda, ipsa molestiae beatae iusto minima.
			</div>
			<div className="grid">
				{projectsList}
			</div>
		</div>
	)
}

export default Project;