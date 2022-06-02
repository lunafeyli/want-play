import { useState } from "react";

export type Char = {
	status: "wrong" | "right";
	char: string;
};

export function Typer(initialTargetText: string) {
	const [targetText, setTargetText] = useState<string>(initialTargetText);
	const [actualText, setActualText] = useState<Char[]>([]);
	const [paraphrazedText, setParaphrazedText] = useState<Char[][]>([]);

	function updateText(text: string, winCallback: () => void) {
		let newText: Char[] = text.split("").map((char, index) => ({
			status: targetText[index] === char ? "right" : "wrong",
			char,
		}));

		setActualText(newText);
		paraphrazeText(newText);

		if (text === targetText) {
			winCallback();
		}
	}

	function addChar(char: string) {
		const charIndex = actualText.length;
		const status = targetText[charIndex] === char ? "right" : "wrong";

		let newActualText: Char[] = [...actualText, { status, char: char }];

		setActualText(newActualText);

		paraphrazeText(newActualText);
	}

	function removeChar() {
		let newActualText: Char[] = actualText.slice(0, actualText.length - 1);

		setActualText(newActualText);

		paraphrazeText(newActualText);
	}

	function paraphrazeText(textToParaphraze: Char[]) {
		let paraphrazed: Char[][] = [[]];

		textToParaphraze.forEach((item) => {
			if (item.char === " ") {
				paraphrazed.push([item]);

				return paraphrazed.push([]);
			}

			return paraphrazed[paraphrazed.length - 1].push(item);
		});

		setParaphrazedText(paraphrazed);
	}

	function reset(newTargetText: string) {
		setActualText([]);
		setParaphrazedText([]);
		setTargetText(newTargetText);
	}

	return {
		targetText,
		actualText,
		paraphrazedText,
		addChar,
		removeChar,
		reset,
		updateText,
	};
}
