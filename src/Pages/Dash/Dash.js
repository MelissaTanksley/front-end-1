import React, { useState } from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";

const LandingPage = styled.div`
	max-width: 100%;
	font-family: Raleway, sans-serif;
	div.header {
		display: flex;
		flex-flow: row nowrap;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 40px;
		h1 {
			font-size: 6rem;
			color: ${pr => pr.theme.charcoal};
		}
		nav {
			a {
				display: inline-block;
				font-weight: 800;
				font-size: 2rem;
				font-style: normal;
				letter-spacing: 0.05rem;
				padding: 10px;
				color: ${pr => pr.theme.charcoal};
			}
		}
	}
	div.welcome-banner {
		background: ${pr => pr.theme.primaryOrange};
		padding: 10px;
		color: white;
		font-weight: 600;
		font-size: 1.5rem;
		margin-bottom: 0px;
		h4 {
			margin: 0;
			text-align: center;
			font-weight: 800;
			font-size: 2rem;
			line-height: 2.3rem;
			letter-spacing: 0.05em;
		}
	}
	div.help-open {
		transition: all 0.4s ease-in-out;
		height: 250px;
		max-width: 100%;
		h3 {
			font-size: 8.6rem;
			line-height: 10.1rem;
			letter-spacing: 0.02rem;
			color: ${pr => pr.theme.charcoal};
		}
		p {
			font-weight: 600;
			font-size: 1.8rem;
			line-height: 2.5rem;
		}
	}
	transition: all 0.4s ease-in-out;
	div.help-not-open {
		display: none;
		transition: all 0.4s ease-in-out;
	}
	div.background-img {
		margin-top: 0;
		height: 560px;
		background-image: url("https://s3-alpha-sig.figma.com/img/9adf/3259/6e5496fba2de53fa2ad308e1607bae4b?Expires=1603670400&Signature=aXc3ptln6GHEwJfJhkE3VvPI0lk772EyadQgWoe0sqIqNtc5HrkUBNVVNWbNduvI5EN1pM~23vtZIXQDGtJqrXVTR1eZsljoCGCCUqHtETHPvyp5Nq5czwym3CLL-I0GXx1m5aYGbh-oY-nTeTrGaQIiaFbOBhLdQjr9BBiWQRIIujOi87yW6C81ZPfxJ1AvkwrAzWcs50aaY3wojabWg6JiMwfRl24~ryCblh5vGkDrAsrAYQp5RJTZClH~V2LyMyScK6o8bkHZxLrIpNnWfH8cETjag96V1qV2itgWsgo-FW940~Fjn~avYGJODdv5Yihipv-tg1f7-CdtACY7Cg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA");
		/* background: rgba(76, 175, 80, 0.5) */
		background-repeat: no-repeat;
		max-width: 100%;
		background-size: cover;
		background-position: center;
		/* opacity: 0.3; */
		background-blend-mode: darken;
		div.hero-text-container {
			background: rgba(248, 248, 248, 0.3);
			height: 100%;
		}
			div.hero-text {
				/* background: rgba(248, 248, 248, 0.5); */
				position: relative;
				width: 770px;
				height: 290px;
				left: 25px;
				top: 180px;
				h3 {
					font-size: 8.6rem;
					line-height: 10.1rem;
					letter-spacing: 0.02em;
					color: ${pr => pr.theme.charcoal};
				}
				p {
					font-weight: 600;
					font-size: 1.8rem;
					line-height: 2.5rem;
					display: flex;
					align-items: center;
					color: ${pr => pr.theme.charcoal};
				}
			}
			div.not-active {
				display: none;
			}
	}
	div.signup-button {
		a {
			display: inline-block;
			background-color: ${pr => pr.theme.primaryOrange};
			width: 27.7rem;
			height: 7.3rem;
			border-radius: 5px;
			font-size: 3rem;
			line-height: 35px;
			color: ${pr => pr.theme.charcoal};
			text-align: center;
			margin: 2rem;
		}
	}
`;

const Dash = () => {
	const [isBrowseOpen, setIsBrowseOpen] = useState(true);
	const [isAboutOpen, setIsAboutOpen] = useState(false);
	const [isHelpOpen, setIsHelpOpen] = useState(false);

	const handleAboutClick = () => {
		// if (isBrowseOpen) {
		setIsAboutOpen(!isAboutOpen);
		setIsBrowseOpen(!isBrowseOpen);
		// }
	};

	const handleHelpClick = () => {
		setIsHelpOpen(!isHelpOpen);
	};

	return (
		<LandingPage className="landing-container">
			<div className="header">
				<h1>Anywhere Fitness</h1>
				<nav className="top-nav">
					<a href="/Dash/#" onClick={handleHelpClick}>Help</a>
					<a href="/Dash/#" onClick={handleAboutClick}>About</a>
				</nav>
			</div>
			<div className="welcome-banner">
				<h4>The world is your gym.</h4>
				<h4>Welcome.</h4>
			</div>

			<div className={isHelpOpen ? "help-open" : "help-not-open"} isHelpOpen={isHelpOpen}>
				<h3>Register/Cancel classes</h3>
				<p>Signing up for classes is easy. And you can cancel and reschedule classes with little to no cancellation fee.</p>
			</div>



			<div className="background-img">
				<div className="hero-text-container">
					<div className={`${isBrowseOpen ? "hero-text" : "not-active"}`}>
						<h3>Browse classes</h3>
						<p>Our expert instructors conduct classes literally anywhere. Take a yoga class on a mountaintop. Do boot camp on the beach. Go to an abandoned mansion for mat pilates. The options are limitless.</p>
					</div>
					<div className={`${isAboutOpen ? "hero-text" : "not-active"}`}>
						<h3>Become Your Own Boss</h3>
						<p>Instead of needing a gym to attract clients, instructors can be their own boss and set up their fitness classes with a minimal start up fee.</p>
					</div>
				</div>
			</div>
			<div className="signup-button">
				<Link to="/Login">Login</Link>
			</div>
		</LandingPage>
	);
};

export default Dash;
