import React from 'react';
import AboutMeImage from '../images/Me-2.1.jpg';

const AboutMe = () => {
	return (
		<section id="about-me" className="container mt-3 pb-3">
			<div className="post-heading text-center pb-3">
				<h1 className="display-4 font-weight-bold">About Me</h1>
				<hr className="w-50 mx-auto" />
			</div>
			<div className="row">
				<div className="col-lg-6 col-md-6 col-12 pb-3">
					<img
						src={AboutMeImage}
						alt="Truong Duong Las Vegas Trip"
						className="img-fluid"
					/>
				</div>

				<div className="col-lg-6 col-md-6 col-12 pb-3">
					<p>
                    I am currently enrolling to Southern Methodist University, 
                    and I am currently working on my master's degree of science in Computer Science. 
                    I just complete my bachelor's degree of science in Mechanical Engineer. 
                    After completing the degree, I found out that I am lacking at coding skill. 
                    I decided to enroll to SMU coding bootcamp to sharp my skill before I begin my master program. 
                    By doing the bootcamp will gain me tremendous confident in programming. 
                    I am looking forward to get a job at Web Developer, Software Developer, or Cyber Analyst.
					</p>
				</div>
			</div>
		</section>
	);
};

export default AboutMe;