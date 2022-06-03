import React from 'react'
import "./Home.css";

import { profilePic } from '../../../images';

const Home = () => {
	return (
		<div id="home" className="homeContainer">
			<div className="leftHomeContainer">
				<div className="leftContentContainer">
					<div className="nameContainer">
						<p className="homeName">Rachel Green<span style={{ fontSize: "25px", color: "lightgray" }}></span></p>
					</div>
					<div className="desc">
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia error, natus aliquid aperiam iusto velit. Velit rem iste deleniti quaerat quidem, doloremque ipsum maxime hic quod praesentium, eius numquam. Animi labore voluptatem commodi suscipit rerum recusandae saepe, cumque molestias ipsa explicabo quaerat et debitis numquam quo illo quod neque. Velit!
					</div>
					<button className="talkbtn">LET'S TALK!</button>
				</div>
			</div>
			<div className="rightHomeContainer">
				<div className="rightContentContainer">
					<img className="image" src={profilePic} alt="Profile Pic" />
				</div>
				<div className="box"></div>
			</div>
		</div>
	)
}

export default Home