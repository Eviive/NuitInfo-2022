const display = root => {
	const content = document.createDocumentFragment();

	/****   Grid Container  ****/
	const main = document.createElement("div");
	main.classList.add("grid-container");
	content.appendChild(main);

	/** Description **/
	const description = document.createElement("div");
	const descriptionTitle = document.createElement("h2");
	descriptionTitle.textContent = "À propos";
	
	const descriptionText = document.createElement("div");

	description.classList.add("grid-item");
	descriptionText.textContent = "MemorIST est un serious game en ligne vous permettant d'apprendre de nombreuses choses la vie sexuelle tout en simulant votre mémoire et votre réflexion.";

	description.appendChild(descriptionTitle);
	description.appendChild(descriptionText);
	main.appendChild(description);

	/** Game Rules **/
	const rules = document.createElement("div");
	const rulesTitle = document.createElement("h2");
	rulesTitle.textContent = "Règles du jeu";
	
	const rulesText = document.createElement("div");

	rules.classList.add("grid-item");
	rulesText.textContent = "Les règles du jeu sont les suivantes: Vous devez trouver toutes les bonnes combinaisons de cartes face à vous. Pour cela, vous retournez deux cartes; Si les deux cartes correspondent, bravo à vous ! Cette paire restera face visible. Sinon, ces cartes retourneront face cachée. Le but est ainsi de ne plus avoir de carte face cachée en essayant de faire le moins de tentative possible.";

	rules.appendChild(rulesTitle);
	rules.appendChild(rulesText);
	main.appendChild(rules);


	/** Mission **/
	const mission = document.createElement("div");
	const missionTitle = document.createElement("h2");
	missionTitle.textContent = "Notre mission";
	
	const missionText = document.createElement("div");

	mission.classList.add("grid-item");
	missionText.textContent = "L'objectif de cette application web est de faire de la prévention et sensibiliser les jeunes adultes aux problèmatiques liées à la santé sexuelle. Informer sur ce sujet permet de lutter contre les préjugés et les IST.";

	mission.appendChild(rulesTitle);
	mission.appendChild(missionText);
	main.appendChild(mission);

	/** Équipe **/
	const equipe = document.createElement("div");
	const equipeTitle = document.createElement("h2");
	equipeTitle.textContent = "Les Codeurs dla Night";
	equipe.classList.add("grid-item");
	equipe.appendChild(equipeTitle);

	const equipeText = document.createElement("div");
	equipeText.textContent = "Notre équipe est composé d'étudiants venant tout droit de l'I.U.T Lyon1:";
	equipe.appendChild(equipeText);

	const equipeList = document.createElement("ul");

	const membre1 = document.createElement("li");
	membre1.textContent = "Lilian Baudry";
	equipeList.appendChild(membre1);
	const membre2 = document.createElement("li");
	membre2.textContent = "Albert Vaillon";
	equipeList.appendChild(membre2);
	const membre3 = document.createElement("li");
	membre3.textContent = "Steve Pennec";
	equipeList.appendChild(membre3);
	const membre4 = document.createElement("li");
	membre4.textContent = "Eyoub Benkacem";
	equipeList.appendChild(membre4);


	equipe.appendChild(equipeList);
	main.appendChild(equipe);
	


	/*
	//Left Button
	const leftButton = document.createElement("button");
	leftButton.classList.add("left-button");
	content.appendChild(leftButton);

	//Right Button
	const rightButton = document.createElement("button");
	rightButton.classList.add("right-button");
	content.appendChild(rightButton);
	*/

	root.replaceChildren(content);
};

export const home = {
	name: "home",
	path: ["/", "/index.html"],
	display
};