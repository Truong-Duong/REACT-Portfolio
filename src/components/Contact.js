import React from 'react';

const Contact = () => {
	return (
		<section id="contact" className="w-50 mx-auto mt-3 pb-3">
			<div className="post-heading text-center pb-3">
				<h3 className="display-4">Contact Me</h3>
				<hr className="w-50 mx-auto" />
			</div>
			<form>
				<div className="form-group pb-2">
					<label for="name">Full Name:</label>
					<input
						type="text"
						className="form-control"
						id="name"
						placeholder="Enter your name!"
					/>
				</div>
				<div className="form-group pb-2">
					<label for="phone-number">Phone Number:</label>
					<input
						type="text"
						className="form-control"
						id="phone-number"
						placeholder="Enter your phone number!"
					/>
				</div>
				<div className="form-group pb-2">
					<label for="email">Email Address:</label>
					<input
						type="email"
						className="form-control"
						id="email"
						aria-describedby="emailHelp"
						placeholder="Enter your email!"
					/>
					<small id="emailHelp" className="form-text text-muted">
						I never share your email with anyone else.
					</small>
				</div>
				<button type="submit" className="btn btn-primary">
					Submit
				</button>
			</form>
		</section>
	);
};

export default Contact;