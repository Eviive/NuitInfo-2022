const display = root => {
	const content = document.createDocumentFragment();
	
	const h1 = document.createElement("h1");
	h1.textContent = "Je suis la page du memory";
	content.appendChild(h1);
	
	root.replaceChildren(content);
};

export const memory = {
	name: "memory",
	path: ["/memory"],
	display
};