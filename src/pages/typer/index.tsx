import { useEffect, useRef, useState } from "react";
import { Button, Header } from "~/components";
import {
	Container,
	Timer,
	TextPreview,
	TextInput,
	GameContainer,
	TextWrapper,
	ActualText,
	Char,
} from "./styles";
import { useStopwatch } from "react-timer-hook";
import { Typer as TyperGame } from "~/games/typer";
const WORDS = [
	"Os espelhos permitem-nos ver objectos que não conseguimos ver directamente.",
	"Note que a vulnerabilidade é no processo de geração de chaves.",
	"A paz mundial não é somente possível, mas inevitável.",
	"Uma pequena relíquia descoberta incrível e misteriosamente intacta.",
	"Ele irá reduzir o tempo necessário para o nosso programa na inicialização.",
];

const Typer = () => {
	const { targetText, reset, paraphrazedText, updateText } = TyperGame(
		WORDS[Math.floor(Math.random() * 4)]
	);
	const {
		minutes,
		seconds,
		start: startTimer,
		reset: resetTimer,
		pause: pauseTimer,
		isRunning,
	} = useStopwatch({ autoStart: false });
	const textInputRef = useRef<HTMLInputElement>(null);

	return (
		<Container>
			<Header gameName="Typer" />
			<GameContainer>
				<Timer>
					{String(minutes).padStart(2, "0")}:
					{String(seconds).padStart(2, "0")}
				</Timer>
				<TextWrapper>
					<ActualText>
						{paraphrazedText.map((phrase, indexPhrase) => (
							<div key={`phrase_${indexPhrase}`}>
								{phrase.map((char, indexChar) => (
									<Char
										status={char.status}
										key={`${char.char}_${indexPhrase}_${indexChar}`}
									>
										{char.char}
									</Char>
								))}
							</div>
						))}
					</ActualText>
					<TextPreview onClick={() => textInputRef.current?.focus()}>
						{targetText}
					</TextPreview>
				</TextWrapper>
				<TextInput
					onChange={(e) => {
						updateText(e.target.value, () => {
							pauseTimer;
							// e.target.disabled = true;
						});
						if (!isRunning) startTimer();
					}}
					ref={textInputRef}
				/>
				<Button
					onClick={() => {
						reset(WORDS[Math.floor(Math.random() * 4)]);
						resetTimer(undefined, false);
						textInputRef.current!.value = "";
						// textInputRef.current!.disabled = false;
					}}
				>
					Resetar
				</Button>
			</GameContainer>
		</Container>
	);
};

export default Typer;

// const Typer = () => {
// 	const [game, setGame] = useState(
// 		new TyperClass(
// 			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, cum? Alias modi, eligendi aperiam atque voluptas odit laborum. Molestiae soluta error rem minus reiciendis ipsum modi aut praesentium dolore vel."
// 		)
// 	);
// 	const [targetText, setTargetText] = useState<string>("");
// 	const {
// 		minutes,
// 		seconds,
// 		start: startTimer,
// 		reset: resetTimer,
// 		isRunning,
// 	} = useStopwatch({ autoStart: false });
// 	const textInputRef = useRef<HTMLInputElement>(null);

// 	return (
// 		<Container>
// 			<Header gameName="Typer" />
// 			<GameContainer>
// 				<Timer>
// 					{String(minutes).padStart(2, "0")}:
// 					{String(seconds).padStart(2, "0")}
// 				</Timer>
// 				<TextWrapper>
// 					<ActualText>
// 						{game.paraphrazedText.map((phrase, indexPhrase) => (
// 							<div key={`phrase_${indexPhrase}`}>
// 								{phrase.map((char, indexChar) => (
// 									<Char
// 										status={char.status}
// 										key={`${char.char}_${indexPhrase}_${indexChar}`}
// 									>
// 										{char.char}
// 									</Char>
// 								))}
// 							</div>
// 						))}
// 					</ActualText>
// 					<TextPreview onClick={() => textInputRef.current?.focus()}>
// 						{game.targetText}
// 					</TextPreview>
// 				</TextWrapper>
// 				<TextInput
// 					// value={text.map((char) => char.char).join("")}
// 					onChange={(e) => {
// 						// setText(e.target.value);
// 						if (e.target.value.length < game.actualText.length)
// 							game.removeChar();
// 						if (e.target.value.length > game.actualText.length)
// 							game.addChar(
// 								e.target.value[e.target.value.length - 1]
// 							);
// 						if (!isRunning) startTimer();
// 					}}
// 					ref={textInputRef}
// 				/>
// 				<Button
// 					onClick={() => {
// 						game.reset(
// 							"Ele irá reduzir o tempo necessário para o nosso programa na inicialização."
// 						);
// 						resetTimer(undefined, false);
// 					}}
// 				>
// 					Resetar
// 				</Button>
// 			</GameContainer>
// 		</Container>
// 	);
// };
