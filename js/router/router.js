import routes from "./routes/index.js";

const displayPage = (pathname) => {
	const root = document.querySelector("#root");

	const pageTransition = display => {
		const animation = document.body.animate([
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

			display(root);
		};
	};
	
	for (const r of Object.values(routes)) {
		if (r.path.includes(pathname)) {
			root.className = r.name;
			pageTransition(r.display);
			return;
		}
	}

	pageTransition(routes.home.display);
};

const addLinks = () => {
	const links = document.querySelectorAll("a");

	for (const link of links) {
		link.onclick = e => {
			e.preventDefault();

			const { pathname } = e.target;
			
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
	
	window.onpopstate = e => {
		console.log(e);

		displayPage(window.location.pathname);
	};
};