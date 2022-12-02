class Card extends HTMLElement {

	constructor() {
		super();
	}

	connectedCallback() {

		const background = document.createElement("div");

		const back = document.createElement("img");
		back.src = "/assets/images/card-back.svg";
		background.appendChild(back);

		this.classList.add("flip");

		const front = document.createElement("div");

		background.classList.add("card-background");
		front.classList.add("card-front");

		this.appendChild(front);
		this.appendChild(background);

		const backgoundImage = document.createElement('img');
		backgoundImage.src = this.getAttribute('identity');
		backgoundImage.classList.add('background-image');
		front.appendChild(backgoundImage);
		
		const imgTop = document.createElement('img');
		imgTop.src = this.getAttribute('type');
		imgTop.classList.add('logo-identifier' ,'top');
		front.appendChild(imgTop);

		const title = document.createElement("h1");
		title.textContent = this.getAttribute('title');
		front.appendChild(title);

		const hr = document.createElement("hr");
		front.appendChild(hr);

		const content = document.createElement("p");

		content.textContent = this.getAttribute('content');
		front.appendChild(content);
		
		const imgBottom = document.createElement("img");
		imgBottom.src = this.getAttribute('type');
		imgBottom.classList.add('logo-identifier','bottom');
		front.appendChild(imgBottom);

		/*
		
		Tilt effect

		let cardWidth = this.clientWidth;
		let cardHeight = this.clientHeight;

		-- Uncompatible with rotate effect

		this.addEventListener('mousemove',(e) => {

			const xWidth = e.layerX;
			const yHeight = e.layerY;
			
			const xRotation = 15*((xWidth - cardWidth/2) / cardWidth);
			const yRotation = 15*((yHeight - cardHeight/2) / cardHeight);
			
			let transform = `scale(1.04) rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;

			this.style.transform = transform;
		});

		this.addEventListener('mouseout',() => {
			this.style.transform = 'scale(1) rotateX(0deg) rotateY(0deg)';
		});

		*/
	}

	open() {
		this.classList.remove('flip');
	}

	close() {
		this.classList.add('flip');
	}

}

customElements.define('card-custom', Card);