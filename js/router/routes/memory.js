import { Memory } from "../../memory/Memory.js";

const display = root => {
	const content = document.createDocumentFragment();
	
	/*************** Cards container ***************/
	
	const cardsContainer = document.createElement("div");
	cardsContainer.classList.add("cards-container");
	content.appendChild(cardsContainer);
	
	/*************** Commands container ***************/
	
	const commandsContainer = document.createElement("div");
	commandsContainer.classList.add("commands-container");
	content.appendChild(commandsContainer);

	/*************** Round counter ***************/
	
	const roundsCounter = document.createElement("div");
	roundsCounter.classList.add("command-item", "rounds-counter");
	commandsContainer.appendChild(roundsCounter);
	
	const roundsCounterLabel = document.createElement("span");
	roundsCounterLabel.textContent = "Round: 0";
	roundsCounter.appendChild(roundsCounterLabel);
	
	/*************** Shuffle ***************/
	
	const shuffleWrapper = document.createElement("div");
	shuffleWrapper.classList.add("command-item", "shuffle-wrapper");
	commandsContainer.appendChild(shuffleWrapper);

	const shuffleButton = document.createElement("button");
	shuffleButton.classList.add("shuffle-button");
	shuffleButton.textContent = "Shuffle";
	shuffleWrapper.appendChild(shuffleButton);

	/*************** Game ***************/
	
	const memory = new Memory(cardsContainer, roundsCounterLabel, shuffleButton);
	
	root.replaceChildren(content);
};

export const memory = {
	name: "memory",
	path: ["/memory"],
	display
};