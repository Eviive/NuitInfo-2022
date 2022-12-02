import categoriesData from "../../assets/json/categories.json" assert { type: "json" };
import cardsData from "../../assets/json/cards.json" assert { type: "json" };

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
		
		const randomCards = this.#cards.sort(() => Math.random() - 0.5);
		this.#container.replaceChildren(...randomCards);

		this.#flippedCards = [];
		this.#counter = 0;
		this.#rounds = 0;
		this.#updateUI();
	}

	#createCardElement(category, card, cardContent) {
		const cardElement = document.createElement("card-custom");
		
		cardElement.dataset.id = card.id;
		cardElement.setAttribute("identity", card.icon);
		cardElement.setAttribute("type", category.icon);
		cardElement.setAttribute("title", cardContent.title);
		cardElement.setAttribute("content", cardContent.content);
		
		cardElement.addEventListener("click", () => {
			this.#flipCard(cardElement);
		}, { once: true });
		
		return cardElement;
	}

	#selectCards() {
		const cards = [];
		const indexes = [];

		while (cards.length < this.#nbCards * 2) {
			const i = Math.floor(Math.random() * cardsData.length);
			
			if (!indexes.includes(i)) {
				indexes.push(i);
				const card = cardsData[i];
				const category = categoriesData.find(category => category.id === card.category);
				
				const questionElement = this.#createCardElement(category, card, card.cards[0]);
				const answerElement = this.#createCardElement(category, card, card.cards[1]);
				
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