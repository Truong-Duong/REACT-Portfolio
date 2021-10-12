import React from 'react';

const PortfolioList = ({ myPortfolioList }) => {
	return (
		<section id="myPortfolioList" className="container mt-3 pb-3">
			<div className="post-heading text-center pb-3">
				<h3 className="display-4">My Portfolio</h3>
				<hr className="w-50 mx-auto" />
			</div>
			<div className="row">
				{myPortfolioList.map((portfolio) => (
					<div className="col-lg-4 col-md-6 col-12 pb-3">
						<div className="card" key={portfolio.id}>
							<img
								src={portfolio.img}
								className="card-img-top"
								alt="A screenshot of javascript quiz."
							/>
							<div className="card-body">
								<h5 className="card-title">{portfolio.name}</h5>
								<p className="card-text">{portfolio.description}</p>
								<a
									href={portfolio.github}
									className="btn btn-primary"
									target="_blank"
								>
									See Github
								</a>
								<a
									href={portfolio.githubPages}
									className="btn btn-primary"
									target="_blank"
								>
									See Github Pages
								</a>
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default PortfolioList;