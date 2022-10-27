import React, { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import StoryCard from "./components/StoryCard";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import LoadingStoryCard from "./components/LoadingStoryCard";

import { fetchTopStories, fetchStoryItemById } from "./requests";
import { isEmpty, randomPickItems, sortBy } from "./utils";
import { IStory } from "models";

import avatar1 from "./assets/imgs/avatars/avatar-1.svg";
import avatar2 from "./assets/imgs/avatars/avatar-2.svg";
import avatar3 from "./assets/imgs/avatars/avatar-3.svg";
import avatar4 from "./assets/imgs/avatars/avatar-4.svg";
import avatar5 from "./assets/imgs/avatars/avatar-5.svg";
import avatar6 from "./assets/imgs/avatars/avatar-6.svg";
import avatar7 from "./assets/imgs/avatars/avatar-7.svg";
import avatar8 from "./assets/imgs/avatars/avatar-8.svg";
import avatar9 from "./assets/imgs/avatars/avatar-9.svg";
import avatar10 from "./assets/imgs/avatars/avatar-10.svg";

import cardImg1 from "./assets/imgs/card/img1.webp";
import cardImg2 from "./assets/imgs/card/img2.webp";
import cardImg3 from "./assets/imgs/card/img3.webp";
import cardImg4 from "./assets/imgs/card/img4.webp";
import cardImg5 from "./assets/imgs/card/img5.webp";
import cardImg6 from "./assets/imgs/card/img6.webp";
import cardImg7 from "./assets/imgs/card/img7.webp";
import cardImg8 from "./assets/imgs/card/img8.webp";
import cardImg9 from "./assets/imgs/card/img9.webp";
import cardImg10 from "./assets/imgs/card/img10.webp";

const App = () => {
	const [loadingStories, setIsLoadingStories] = useState<boolean>(false);
	const [loadingStoryItems, setIsLoadingStoryItems] = useState<boolean>(false);
	const [storiesItems, setStoriesItems] = useState<IStory[]>([]);
	const [randomTop10Stories, setRandomTop10Stories] = useState<number[]>([]);

	let imgs = [cardImg1, cardImg2, cardImg3, cardImg4, cardImg5, cardImg6, cardImg7, cardImg8, cardImg9, cardImg10]

	let avatars = [avatar1, avatar2, avatar3, avatar4, avatar5, avatar6, avatar7, avatar8, avatar9, avatar10];

	useEffect(() => {
		setIsLoadingStories(true);
		(async function setFetchStories() {
			try {
				let topStories = await fetchTopStories();
				let randomPickedStories = randomPickItems(topStories, 10);
				setRandomTop10Stories(randomPickedStories);
				setIsLoadingStories(false);
			} catch (error) {
				setIsLoadingStories(false);
			}
		})();
	}, []);

	useEffect(() => {
		if (!isEmpty(randomTop10Stories)) {
			(async function setFetchStoriesItems() {
				setIsLoadingStoryItems(true);
				try {
					let storiesItem = await Promise.all(randomTop10Stories.map(async (story: number) => {
						return await fetchStoryItemById(story);
					}));
					let sortedStoriesItem = storiesItem.concat().sort(sortBy("score"));
					setStoriesItems(sortedStoriesItem);
					setIsLoadingStoryItems(false);
				} catch (error) {
					setIsLoadingStoryItems(false);
				}
			})();
		}
	}, [randomTop10Stories]);

	if (loadingStories) return <Loader />
	return <div id="App">
		<Navbar />
		<div className="container">
			<div className="grid-list">
				{loadingStoryItems ? randomTop10Stories.map(() => <LoadingStoryCard />) : storiesItems.map((story: IStory, key: number) => {
					return <StoryCard
						url={story.url}
						by={story.by}
						score={story.score}
						title={story.title}
						image={imgs[key]}
						avatar={avatars[key]}
						time={story.time}
						key={story.id}
					/>
				})}
			</div>
		</div>
		<Footer />
	</div>
}

export default App;