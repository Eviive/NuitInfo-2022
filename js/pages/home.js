const display = root => {
	root.innerHTML = `<h1>I am Home Page.</h1>`;
};

export const home = {
	name: "home",
	path: ["/", "/index.html"],
	display
};