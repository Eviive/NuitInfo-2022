const display = root => {
	root.innerHTML = `<h1>I am About Page.</h1>`;
};

export const about = {
	name: "about",
	path: ["/about"],
	display
};