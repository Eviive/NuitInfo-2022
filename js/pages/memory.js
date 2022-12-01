const display = root => {
	const section = document.createElement("section");
    //add a div to the section
    const divContenu = document.createElement("div");
    section.appendChild(divContenu);

    const MenuButoonLeft = document.createElement("button");
    const divGame = document.createElement("div");
    const AboutUsRight = document.createElement("button");

    MenuButoonLeft.classList.add("MenuButoonLeft");
    divGame.classList.add("divGame");
    AboutUsRight.classList.add("buttonAboutUs");

    divContenu.appendChild(MenuButoonLeft);
    divContenu.appendChild(divGame);
    divContenu.appendChild(AboutUsRight);

    const roundsAndShuffle = document.createElement("div");
    section.appendChild(roundsAndShuffle);

    const divGame1 = document.createElement("div");
    const divGame2 = document.createElement("div");
    const divGame3 = document.createElement("div");
    divGame.appendChild(divGame1);
    divGame.appendChild(divGame2);
    divGame.appendChild(divGame3);

    root.replaceChildren(section);
};

export const memory = {
	name: "memory",
	path: ["/memory"],
	display
};