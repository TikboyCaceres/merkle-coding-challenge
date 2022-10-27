import "./styles.scss";

const LoadingStoryCard = () => {
	return (
		<div id="LoadingStoryCard">
			<div className="card">
				<div className="loading-image card-image">
				</div>
				<div className="card-body">
					<div className="card-story-top">
						<div className="story-top-container">
							<div className="story-author-pic">
								<div className="loading-avatar"></div>
							</div>
							<div>
								<div className="loading-text card-story-title"></div>
								<div className="loading-text card-story-title"></div>
							</div>
						</div>
					</div>
					<div className="card-story-content">
						<h3 className="loading-text card-story-title"></h3>
						<div className="card-story-bottom">
							<div className="details">
								<div className="loading-text card-story-title"></div>
								<div className="loading-text card-story-title"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default LoadingStoryCard;