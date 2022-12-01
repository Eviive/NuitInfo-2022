import { home, about } from "../pages/index.js";

const routes = {
	home,
	about
};

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

const addLinkEvents = () => {
	const links = document.querySelectorAll("a");
	
	for (const l of links) {
		l.addEventListener("click", e => {
			e.preventDefault();

			const { pathname } = e.target;
			
			window.history.pushState(
				{},
				pathname,
				window.location.origin + pathname
			);

			displayPage(pathname);
		});
	}
};

export const router = () => {
	addLinkEvents();
	
	displayPage(window.location.pathname);
	
	window.onpopstate = e => {
		console.log(e);

		displayPage(window.location.pathname);
	};
};