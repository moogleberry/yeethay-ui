import React from "react";

const Home = () => (
	<div>
		<h2 className="page-title">
			Home
		</h2>
		
		<div>
			<a href="/rate">
				<button type="button"
					role="link"
					className="btn btn-md btn-primary">
					Start Rating
				</button>
			</a>
		</div>
	</div>
);

export default Home;
