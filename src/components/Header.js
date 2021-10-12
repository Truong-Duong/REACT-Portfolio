import React from 'react';
import Typed from 'react-typed';

const Header = () => {
	return (
		<div id="page-top" className="header-wraper">
			<div className="main-info">
				<h1>Hello, My name is Truong Duong</h1>
				<Typed
					className="typed-text"
					strings={[
						'I am a Software Engineer',
						'I am a Cyber Analyst',
						'I am a Full Stack Web Developer',
					]}
					typeSpeed={50}
					backSpeed={50}
					loop
				/>
				<a className="btn btn-header" href="#about-me">
					About Me
				</a>
			</div>
		</div>
	);
};

export default Header;