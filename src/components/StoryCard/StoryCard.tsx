import { useEffect, useState } from "react";
import { epochToData } from "../../utils";

import { fetchUserById } from "../../requests";
import { IUser } from "../../models";

import "./styles.scss";

interface IProps {
	image: any;
	avatar: any;
	by: string;
	time: string;
	score: number;
	title: string;
	url: string;
}

const StoryCards: React.FC<IProps> = ({
	by,
	time,
	score,
	title,
	image,
	avatar,
	url,
}) => {

	const [author, setAuthorDetails] = useState<IUser>()

	useEffect(() => {
		(async function setFetchStoriesItems() {
			const authorDetails = await fetchUserById(by);
			setAuthorDetails(authorDetails);
		})();
	}, [by]);

	const date = (value: string) => {
		return epochToData(parseInt(value));
	}

	return <div id="StoryCard">
		<div className="card">
			<div className="card-image">
				<img src={image} alt="" />
			</div>
			<div className="card-body">
				<div className="card-story-top">
					<div className="story-top-container">
						<div className="story-author-pic">
							<img src={avatar} />
						</div>
						<div>
							<div className="story-author-name">{by}</div>
							<div className="story-timestamp">{date(time).toString()}</div>
						</div>
					</div>
				</div>
				<div className="card-story-content">
					<div className="card-story-title">
						<h3>{title}</h3>
						<a href={url} target="_blank">{url}</a>
					</div>
					<div className="card-story-bottom">
						<div className="details">
							<div><i className="fa-solid fa-star"></i><span><span>{" "}{score}</span>{" "}score</span></div>
							<div><i className="fa-solid fa-meteor"></i><span><span>{" "}{author?.karma}</span>{" "}karma</span></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
}

export default StoryCards;