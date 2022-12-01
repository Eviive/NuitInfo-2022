const display = root => {
	const content = document.createDocumentFragment();
	
	const h1 = document.createElement("h1");
	h1.textContent = "Je suis la page d'accueil";
	content.appendChild(h1);
	
	root.replaceChildren(content);
};

export const home = {
	name: "home",
	path: ["/", "/index.html"],
	display
};