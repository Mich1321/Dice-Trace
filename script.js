const diceTrace = document.querySelector(".diceTrace");
const addRedDice = document.querySelector(".addRedDice");
const addBlackDice = document.querySelector(".addBlackDice");
const addWhiteDice = document.querySelector(".addWhiteDice");
const addRedDiceDef = document.querySelector(".addRedDice-def");
const addWhiteDiceDef = document.querySelector(".addWhiteDice-def");
const removeRedDice = document.querySelector(".removeRedDice");
const deleteAll = document.querySelector(".deleteAll");
const rollAll = document.querySelector(".rollAll");

// ----------RED ATTACK DICE-------------------

const addNewRedDice = () => {
	let newRedDice = document.createElement("div");
	newRedDice.classList.add("redAttackDice");
	diceTrace.append(newRedDice);
	redDicePanel(newRedDice);
};

const redDicePanel = (newRedDice) => {
	const redDiceNumber = document.createElement("p");
	redDiceNumber.classList.add("whiteAttack");
	redDiceNumber.textContent = "?";
	newRedDice.append(redDiceNumber);

	//
	const rollRedDice = () => {
		let redRoll = [
			"Hit!",
			"Hit!",
			"Hit!",
			"Hit!",
			"Hit!",
			"Crit!",
			"Surge",
			"",
		];
		let random = Math.floor(Math.random() * redRoll.length) + 0;
		redDiceNumber.textContent = redRoll[random];
	};
	rollAll.addEventListener("click", rollRedDice);
};

// ----------BLACK ATTACK DICE-------------------

const addNewBlackDice = () => {
	let newBlackDice = document.createElement("div");
	newBlackDice.classList.add("blackAttackDice");
	diceTrace.append(newBlackDice);
	blackDicePanel(newBlackDice);
};
const blackDicePanel = (newBlackDice) => {
	const blackDiceNumber = document.createElement("p");
	blackDiceNumber.classList.add("whiteAttack");
	blackDiceNumber.textContent = "?";
	newBlackDice.append(blackDiceNumber);

	const rollBlackDice = () => {
		let blackRoll = ["Hit!", "Hit!", "Hit!", "Crit!", "Surge", "", "", ""];
		let random = Math.floor(Math.random() * blackRoll.length) + 0;
		blackDiceNumber.textContent = blackRoll[random];
	};
	rollAll.addEventListener("click", rollBlackDice);
};

// ----------WHITE ATTACK DICE-------------------

const addNewWhiteDice = () => {
	let newWhiteDice = document.createElement("div");
	newWhiteDice.classList.add("whiteAttackDice");
	diceTrace.append(newWhiteDice);
	whiteDicePanel(newWhiteDice);
};

const whiteDicePanel = (newWhiteDice) => {
	const whiteDiceNumber = document.createElement("p");
	whiteDiceNumber.classList.add("redAttack");
	whiteDiceNumber.textContent = "?";
	newWhiteDice.append(whiteDiceNumber);

	const rollWhiteDice = () => {
		let whiteRoll = ["Hit!", "Crit!", "Surge", "", "", "", "", ""];
		let random = Math.floor(Math.random() * whiteRoll.length) + 0;
		whiteDiceNumber.textContent = whiteRoll[random];
	};
	rollAll.addEventListener("click", rollWhiteDice);
};

// ----------RED DEFENCE DICE-------------------

const addNewRedDefDice = () => {
	let newRedDefDice = document.createElement("div");
	newRedDefDice.classList.add("redDice");
	diceTrace.append(newRedDefDice);
	redDefDicePanel(newRedDefDice);
};

const redDefDicePanel = (newRedDefDice) => {
	const redDefDiceNumber = document.createElement("p");
	redDefDiceNumber.classList.add("white");
	redDefDiceNumber.textContent = "?";
	newRedDefDice.append(redDefDiceNumber);

	const rollRedDefDice = () => {
		let redDefRoll = ["Block!", "Block!", "Block!", "Surge", "", ""];
		let random = Math.floor(Math.random() * redDefRoll.length) + 0;
		redDefDiceNumber.textContent = redDefRoll[random];
	};
	rollAll.addEventListener("click", rollRedDefDice);
};

// ----------WHITE DEFENCE DICE-------------------

const addNewWhiteDefDice = () => {
	let newWhiteDefDice = document.createElement("div");
	newWhiteDefDice.classList.add("whiteDice");
	diceTrace.append(newWhiteDefDice);
	whiteDefDicePanel(newWhiteDefDice);
};

const whiteDefDicePanel = (newWhiteDefDice) => {
	const whiteDefDiceNumber = document.createElement("p");
	whiteDefDiceNumber.classList.add("red");
	whiteDefDiceNumber.textContent = "?";
	newWhiteDefDice.append(whiteDefDiceNumber);

	const rollWhiteDefDice = () => {
		let whiteDefRoll = ["Block!", "Surge", "", "", "", ""];
		let random = Math.floor(Math.random() * whiteDefRoll.length) + 0;
		whiteDefDiceNumber.textContent = whiteDefRoll[random];
	};
	rollAll.addEventListener("click", rollWhiteDefDice);
};

// -----------------PRZECISK USUŃ KOŚCI---------------------

const deleteDices = () => {
	let element = diceTrace;
	while (element.firstChild) {
		element.removeChild(element.firstChild);
	}
};

addRedDice.addEventListener("click", addNewRedDice);
addBlackDice.addEventListener("click", addNewBlackDice);
addWhiteDice.addEventListener("click", addNewWhiteDice);
addRedDiceDef.addEventListener("click", addNewRedDefDice);
addWhiteDiceDef.addEventListener("click", addNewWhiteDefDice);
deleteAll.addEventListener("click", deleteDices);

// const rollRedDice = () => {
// 	let redRoll = [
// 		"1",
// 		"2",
// 		"3",
// 		// <i class="fa-solid fa-star"></i>,
// 		// <i class="fa-solid fa-star"></i>,
// 		// <i class="fa-solid fa-star"></i>,
// 		// <i class="fa-solid fa-star"></i>,
// 		// <i class="fa-solid fa-star"></i>,
// 		// <i class="fa-regular fa-star"></i>,
// 		// <i class="fa-solid fa-square-bolt"></i>,
// 		// <i></i>
// 	];
// 	let random = Math.floor(Math.random() * redRoll.length) + 0;
// 	// redDiceNumber.textContent = redRoll[random];
// 	console.log(random);
// };
