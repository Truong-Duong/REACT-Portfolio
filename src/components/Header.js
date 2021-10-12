import React from 'react';
import Typed from 'react-typed';

const Header = () => {
	return (
		<div id="page-top" className="header-wraper">
			<div className="main-info">
				<h3>Hello, My name is</h3>
                <h1>Truong Duong</h1>
                <h2>And I am a</h2>
				<Typed
					className="typed-text"
					strings={[
						'Software Engineer',
						'Cyber Analyst',
						'Full Stack Web Developer',
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