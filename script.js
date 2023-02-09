const diceTrace = document.querySelector(".diceTrace");
const redBtn = document.querySelector(".redBtn");
const blackBtn = document.querySelector(".blackBtn");
const whiteBtn = document.querySelector(".whiteBtn");
const redBtnDef = document.querySelector(".redBtn-def");
const whiteBtnDef = document.querySelector(".whiteBtn-def");
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
	const redDiceNumber = document.createElement("img");
	redDiceNumber.classList.add("whiteAttack");
	redDiceNumber.src = "";
	newRedDice.append(redDiceNumber);

	const rollRedDice = () => {
		let redRoll = [
			(src = "./icons/burst-white.svg"),
			(src = "./icons/burst-white.svg"),
			(src = "./icons/burst-white.svg"),
			(src = "./icons/burst-white.svg"),
			(src = "./icons/burst-white.svg"),
			(src = "./icons/explosion-white.svg"),
			(src = "./icons/lightning-charge-fill-white.svg"),
			(src = ""),
		];
		let random = Math.floor(Math.random() * redRoll.length) + 0;
		redDiceNumber.src = redRoll[random];
	};

	const audioSingle = () => {
		let mySound = new Audio((src = "./sound/dice1-94905.mp3"));
		mySound.play();
	};
	newRedDice.addEventListener("click", rollRedDice);
	rollAll.addEventListener("click", rollRedDice);

	newRedDice.addEventListener("click", audioSingle);
};

// ----------BLACK ATTACK DICE-------------------

const addNewBlackDice = () => {
	let newBlackDice = document.createElement("div");
	newBlackDice.classList.add("blackAttackDice");
	diceTrace.append(newBlackDice);
	blackDicePanel(newBlackDice);
};
const blackDicePanel = (newBlackDice) => {
	const blackDiceNumber = document.createElement("img");
	blackDiceNumber.classList.add("whiteAttack");
	blackDiceNumber.src = "";
	newBlackDice.append(blackDiceNumber);

	const rollBlackDice = () => {
		let blackRoll = [
			"./icons/burst-white.svg",
			"./icons/burst-white.svg",
			"./icons/burst-white.svg",
			"./icons/explosion-white.svg",
			"./icons/lightning-charge-fill-white.svg",
			"",
			"",
			"",
		];
		let random = Math.floor(Math.random() * blackRoll.length) + 0;
		blackDiceNumber.src = blackRoll[random];
	};
	const audioSingle = () => {
		let mySound = new Audio("./sound/dice1-94905.mp3");
		mySound.play();
	};
	newBlackDice.addEventListener("click", rollBlackDice); //TO JEST W CHUJ WAŻNE
	rollAll.addEventListener("click", rollBlackDice);
	newBlackDice.addEventListener("click", audioSingle);
};

// ----------WHITE ATTACK DICE-------------------

const addNewWhiteDice = () => {
	let newWhiteDice = document.createElement("div");
	newWhiteDice.classList.add("whiteAttackDice");
	diceTrace.append(newWhiteDice);
	whiteDicePanel(newWhiteDice);
};

const whiteDicePanel = (newWhiteDice) => {
	const whiteDiceNumber = document.createElement("img");
	whiteDiceNumber.classList.add("redAttack");
	whiteDiceNumber.src = "";
	newWhiteDice.append(whiteDiceNumber);

	const rollWhiteDice = () => {
		let whiteRoll = [
			"./icons/burst-red.svg",
			"./icons/explosion-red.svg",
			"./icons/lightning-charge-fill-red.svg",
			"",
			"",
			"",
			"",
			"",
		];
		let random = Math.floor(Math.random() * whiteRoll.length) + 0;
		whiteDiceNumber.src = whiteRoll[random];
	};
	const audioSingle = () => {
		let mySound = new Audio("./sound/dice1-94905.mp3");
		mySound.play();
	};
	newWhiteDice.addEventListener("click", rollWhiteDice);
	rollAll.addEventListener("click", rollWhiteDice);
	newWhiteDice.addEventListener("click", audioSingle);
};

// ----------RED DEFENCE DICE-------------------

const addNewRedDefDice = () => {
	let newRedDefDice = document.createElement("div");
	newRedDefDice.classList.add("redDice");
	diceTrace.append(newRedDefDice);
	redDefDicePanel(newRedDefDice);
};

const redDefDicePanel = (newRedDefDice) => {
	const redDefDiceNumber = document.createElement("img");
	redDefDiceNumber.classList.add("white");
	redDefDiceNumber.src = "";
	newRedDefDice.append(redDefDiceNumber);

	const rollRedDefDice = () => {
		let redDefRoll = [
			"./icons/shield-fill-white.svg",
			"./icons/shield-fill-white.svg",
			"./icons/shield-fill-white.svg",
			"./icons/lightning-charge-fill-white.svg",
			"",
			"",
		];
		let random = Math.floor(Math.random() * redDefRoll.length) + 0;
		redDefDiceNumber.src = redDefRoll[random];
	};
	const audioSingle = () => {
		let mySound = new Audio("./sound/dice1-94905.mp3");
		mySound.play();
	};
	newRedDefDice.addEventListener("click", rollRedDefDice);
	rollAll.addEventListener("click", rollRedDefDice);
	newRedDefDice.addEventListener("click", audioSingle);
};

// ----------WHITE DEFENCE DICE-------------------

const addNewWhiteDefDice = () => {
	let newWhiteDefDice = document.createElement("div");
	newWhiteDefDice.classList.add("whiteDice");
	diceTrace.append(newWhiteDefDice);
	whiteDefDicePanel(newWhiteDefDice);
};

const whiteDefDicePanel = (newWhiteDefDice) => {
	const whiteDefDiceNumber = document.createElement("img");
	whiteDefDiceNumber.classList.add("red");
	whiteDefDiceNumber.src = "";
	newWhiteDefDice.append(whiteDefDiceNumber);

	const rollWhiteDefDice = () => {
		let whiteDefRoll = [
			"./icons/shield-fill-red.svg",
			"./icons/lightning-charge-fill-red.svg",
			"",
			"",
			"",
			"",
		];
		let random = Math.floor(Math.random() * whiteDefRoll.length) + 0;
		whiteDefDiceNumber.src = whiteDefRoll[random];
	};
	const audioSingle = () => {
		let mySound = new Audio("./sound/dice1-94905.mp3");
		mySound.play();
	};
	newWhiteDefDice.addEventListener("click", rollWhiteDefDice);
	rollAll.addEventListener("click", rollWhiteDefDice);
	newWhiteDefDice.addEventListener("click", audioSingle);
};

// -----------------PRZECISK USUŃ KOŚCI---------------------

const deleteDices = () => {
	let element = diceTrace;
	while (element.firstChild) {
		element.removeChild(element.firstChild);
	}
};
const audioDel = () => {
	let mySound = new Audio("./sound/lightsaber-clash-88733.mp3");
	mySound.play();
};
const audio = () => {
	let mySound = new Audio("./sound/rolling-dice-2-102706.mp3");
	mySound.play();
};
const audioAddDice = () => {
	let mySound = new Audio("./sound/robot_01-47250.mp3");
	mySound.play();
};

const audioOpen = () => {
	let mySound = new Audio("./sound/fx4.mp3");
	mySound.play();
};
document.addEventListener("loadeddata", audioOpen);
redBtn.addEventListener("click", addNewRedDice);
redBtn.addEventListener("click", audioAddDice);
blackBtn.addEventListener("click", addNewBlackDice);
blackBtn.addEventListener("click", audioAddDice);
whiteBtn.addEventListener("click", addNewWhiteDice);
whiteBtn.addEventListener("click", audioAddDice);
redBtnDef.addEventListener("click", addNewRedDefDice);
redBtnDef.addEventListener("click", audioAddDice);
whiteBtnDef.addEventListener("click", addNewWhiteDefDice);
whiteBtnDef.addEventListener("click", audioAddDice);
deleteAll.addEventListener("click", deleteDices);
deleteAll.addEventListener("click", audioDel);
rollAll.addEventListener("click", audio);
