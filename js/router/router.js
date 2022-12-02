import routes from "./routes/index.js";

const displayPage = pathname => {
	const root = document.querySelector("#root");

	const pageTransition = (display, className) => {
		const animation = root.animate([
			{ opacity: 1 },
			{ opacity: 0 }
		], {
			duration: 300,
			easing: "ease",
			fill: "forwards"
		});

		animation.onfinish = () => {
			animation.onfinish = null;
			animation.reverse();
			
			root.className = className;
			display(root);
		};
	};
	
	for (const r of Object.values(routes)) {
		if (r.path.includes(pathname)) {
			pageTransition(r.display, r.name);
			return;
		}
	}

	pageTransition(routes.home.display);
};

const addLinks = () => {
	const links = document.querySelectorAll("a");

	for (const link of links) {
		const pathname = link.pathname;
		
		link.onclick = e => {
			e.preventDefault();
			
			window.history.pushState(
				{},
				pathname,
				window.location.origin + pathname
			);

			displayPage(pathname);
		};
	}
};

export const router = () => {
	addLinks();
	
	displayPage(window.location.pathname);
	
	window.onpopstate = () => {
		displayPage(window.location.pathname);
	};
};