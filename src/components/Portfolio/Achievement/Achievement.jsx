import React from 'react';
import "./Achievement.css";

const Achievement = () => {

	const descStyle = {
		fontSize: "18px",
	};

	const achievements = [
		{
			desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae!"
		},
		{
			desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae repellendus cupiditate mollitia, quasi amet sapiente!"
		},
		{
			desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae repellendus cupiditate mollitia, quasi amet sapiente!"
		},
		{
			desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae repellendus cupiditate mollitia, quasi amet sapiente!"
		},
		{
			desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae sapiente!"
		}
	]

	const achievementList = achievements.map((data, i) => {
		return (
			<div key={i} className="contents">
				<div className="topLine"></div>
				<span style={descStyle}>{data.desc}</span>
			</div>
		)
	});

	return (
		<div id="achievement" className="achievementContainer">
			<div className="rightContent">
				<div className="contentGrid">
					{achievementList}
				</div>
			</div>
			<div className="leftContent">
				I'm Proud Of
			</div>
		</div>
	)
}

export default Achievement