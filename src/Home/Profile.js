import React from "react";
import "./Profile.css";
import image from '../Assests/Image1.jpeg'
// import bgPatternCard from "../assets/bg-pattern-card.svg";
// import imageVictor from "../assets/image-victor.jpg";

const Profile = () => {
	return (
		<div className="card-container">
			<main className="card">
			
				<div className="user-image">
					<img src={image} alt="Profile" className="image-victor-class" />
				</div>
				<div className="user-content">
					<div className="user-details">
						<h1 className="user-name-age">
							Victor Crest <span className="user-age">26</span>
						</h1>
						<div className="user-location">London</div>
					</div>
					<hr />
					<div className="user-stats">
						<div className="followers">
							<h1 className="stats">80K</h1>
							<div className="title">Followers</div>
						</div>
						<div className="likes">
							<h1 className="stats">803K</h1>
							<div className="title">Likes</div>
						</div>
						<div className="photos">
							<h1 className="stats">1.4K</h1>
							<div className="title">Photos</div>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
};

export default Profile;