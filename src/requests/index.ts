let apiUrl = `https://hacker-news.firebaseio.com/v0`;

import { IStory, IUser } from "../models";

export const fetchTopStories = async (): Promise<number[]> => {
  const res = await fetch(`${apiUrl}/topstories.json`, {
    method: "GET",
  });
  return await res.json();
};

export const fetchStoryItemById = async (id: number): Promise<IStory> => {
  const res = await fetch(`${apiUrl}/item/${id}.json`, {
    method: "GET",
  });
  return await res.json();
};

export const fetchUserById = async (id: string): Promise<IUser> => {
  const res = await fetch(`${apiUrl}/user/${id}.json`, {
    method: "GET",
  });

  return (await res.json());
};
