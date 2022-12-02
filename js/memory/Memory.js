const categoriesJSON = [
	{
		id: 1,
		name: "Diseases"
	},
	{
		id: 2,
		name: "Contraceptions"
	}
];

const cardsJSON = [
	{
		id: 1,
		categoryId: 1,
		name: "AIDS",
		cards: [
			{
				"title": "Question AIDS",
				"content": "This is the content of the question AIDS"
			},
			{
				"title": "Answer AIDS",
				"content": "This is the content of the answer AIDS"
			}
		]
	},
	{
		id: 2,
		categoryId: 1,
		name: "Cancer",
		cards: [
			{
				"title": "Question Cancer",
				"content": "This is the content of the question Cancer"
			},
			{
				"title": "Answer Cancer",
				"content": "This is the content of the answer Cancer"
			}
		]
	},
	{
		id: 3,
		categoryId: 1,
		name: "Diabetes",
		cards: [
			{
				"title": "Question Diabetes",
				"content": "This is the content of the question Diabetes"
			},
			{
				"title": "Answer Diabetes",
				"content": "This is the content of the answer Diabetes"
			}
		]
	},
	{
		id: 4,
		categoryId: 2,
		name: "Pill",
		cards: [
			{
				"title": "Question Pill",
				"content": "This is the content of the question Pill"
			},
			{
				"title": "Answer Pill",
				"content": "This is the content of the answer Pill"
			}
		]
	}
];

export class Memory {

	#container;
	#counterLabel;
	#shuffle;

	#cards;
	#flippedCards = [];
	
	#nbCards;
	#counter = 0;
	#rounds = 0;
	
	constructor(container, counterLabel, shuffle, nbCards = 2) {
		this.#container = container;
		this.#counterLabel = counterLabel;
		this.#shuffle = shuffle;
		this.#shuffle.onclick = () => this.#generateCards();
		
		this.#nbCards = nbCards;

		this.#generateCards();
	}

	#generateCards() {
		this.#cards = this.#selectCards();
		this.#container.replaceChildren(...this.#cards);
		this.#flippedCards = [];
		this.#counter = 0;
		this.#rounds = 0;
		this.#updateUI();
	}

	#createCardElement(category, id, card) {
		const cardElement = document.createElement("card-custom");
		
		cardElement.dataset.id = id;
		cardElement.setAttribute("identity", "assets/images/sida.svg");
		cardElement.setAttribute("type", "assets/images/disease.svg");
		cardElement.setAttribute("title", card.title);
		cardElement.setAttribute("content", card.content);
		
		cardElement.addEventListener("click", () => {
			this.#flipCard(cardElement);
		}, { once: true });
		
		return cardElement;
	}

	#selectCards() {
		const cards = [];
		const indexes = [];

		while (cards.length < this.#nbCards * 2) {
			const i = Math.floor(Math.random() * cardsJSON.length);
			
			if (!indexes.includes(i)) {
				indexes.push(i);
				const card = cardsJSON[i];
				const category = categoriesJSON.find(category => category.id === card.categoryId);
				
				const questionElement = this.#createCardElement(category, card.id, card.cards[0]);
				const answerElement = this.#createCardElement(category, card.id, card.cards[1]);
				
				cards.push(questionElement, answerElement);
			}
		}
		
		return cards;
	}

	#flipCard(card) {
		if (this.#flippedCards.length >= 2) {
			return;
		}

		card.open();

		this.#flippedCards.push(card);

		if (this.#flippedCards.length === 2) {
			this.#rounds++;
			this.#updateUI();

			const firstCard = this.#flippedCards[0];
			const secondCard = this.#flippedCards[1];
			
			if (firstCard.dataset.id === secondCard.dataset.id) {
				this.#flippedCards = [];
				this.#counter++;

				if (this.#hasWon()) {
					this.#win();
				}
			} else {
				setTimeout(() => {
					firstCard.close();
					firstCard.addEventListener("click", () => {
						this.#flipCard(firstCard);
					}, { once: true });
					
					secondCard.close();
					secondCard.addEventListener("click", () => {
						this.#flipCard(secondCard);
					}, { once: true });

					this.#flippedCards = [];
				}, 1000);
			}
		} else {
			card.addEventListener("click", () => {
				this.#flipCard(card);
			}, { once: true });
		}
	}

	#updateUI() {
		this.#counterLabel.textContent = `Round: ${this.#rounds}`;
	}
	
	#hasWon() {
		return this.#counter === this.#nbCards;
	}

	#win() {
		alert(`You won in ${this.#rounds} rounds!`);
	}
	
}