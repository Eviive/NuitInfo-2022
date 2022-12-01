import routes from "./routes/index.js";

const displayPage = (pathname) => {
	const root = document.querySelector("#root");
	
	for (const r of Object.values(routes)) {
		if (r.path.includes(pathname)) {
			root.className = r.name;
			r.display(root);
			return;
		}
	}

	routes.home.display(root);
};

const addLinks = () => {
	const links = document.createDocumentFragment();

	for (const r of Object.values(routes)) {
		const a = document.createElement("a");

		a.href = r.path[0];

		const { name } = r;
		a.textContent = name.charAt(0).toUpperCase() + name.slice(1);

		a.onclick = e => {
			e.preventDefault();
	
			const { pathname } = e.target;
			
			window.history.pushState(
				{},
				pathname,
				window.location.origin + pathname
			);

			displayPage(pathname);
		};

		const li = document.createElement("li");
		li.appendChild(a);

		links.appendChild(li);
	}

	const nav = document.querySelector("#nav-links");
	
	nav?.replaceChildren(links);
};

export const router = () => {
	addLinks();
	
	displayPage(window.location.pathname);
	
	window.onpopstate = e => {
		console.log(e);

		displayPage(window.location.pathname);
	};
};