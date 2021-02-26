const alphabet = {  
    "0":"-----",
    "1":".----",
    "2":"..---",
    "3":"...--",
    "4":"....-",
    "5":".....",
    "6":"-....",
    "7":"--...",
    "8":"---..",
    "9":"----.",
    "a":".-",
    "b":"-...",
    "c":"-.-.",
    "d":"-..",
    "e":".",
    "f":"..-.",
    "g":"--.",
    "h":"....",
    "i":"..",
    "j":".---",
    "k":"-.-",
    "l":".-..",
    "m":"--",
    "n":"-.",
    "o":"---",
    "p":".--.",
    "q":"--.-",
    "r":".-.",
    "s":"...",
    "t":"-",
    "u":"..-",
    "v":"...-",
    "w":".--",
    "x":"-..-",
    "y":"-.--",
    "z":"--..",
    " ":"/",
    "!":"-·-·--",
    ".":"·-·-·-",
    ",":"--··--"
};

const morse = {
    "-----": "0",
    ".----": "1",
    "..---": "2",
    "...--": "3",
    "....-": "4",
    ".....": "5",
    "-....": "6",
    "--...": "7",
    "---..": "8",
    "----.": "9",
    ".-": "a",
    "-...": "b",
    "-.-.": "c",
    "-..": "d",
    ".": "e",
    "..-.": "f",
    "--.": "g",
    "....": "h",
    "..": "i",
    ".---": "j",
    "-.-": "k",
    ".-..": "l",
    "--": "m",
    "-.": "n",
    "---": "o",
    ".--.": "p",
    "--.-": "q",
    ".-.": "r",
    "...": "s",
    "-": "t",
    "..-": "u",
    "...-": "v",
    ".--": "w",
    "-..-": "x",
    "-.--": "y",
    "--..": "z",
    "/": " ",
    "-·-·--": "!",
    "·-·-·-": ".",
    "--··--": ",",
};

const hideTitlePage = () => {

  const titlePage = document.getElementById("titlePage");
  if (titlePage.style.display === "none") {
    titlePage.style.display = "block";
  } else {
    titlePage.style.display = "none";
  }
}

const alphabetToMorse = () => {

  const userInput = document.getElementById("alphabetInput").value; 
	const lowerCase = userInput.toLowerCase().split(''); 
	const mappedLetters = lowerCase.map((morse) => {  
	return alphabet[morse];
})
	const result = mappedLetters.join(' '); 
	document.getElementById("morseOutput").innerHTML = result; 
  document.getElementById("alphabetOutput").innerHTML = "";
  document.getElementById("alphabetInput").value = "";
}

const morseToAlphabet = () => {

  const userInput = document.getElementById("morseInput").value;  
	const splitMorse = userInput.split(' '); 
	const mappedMorse = splitMorse.map((alphabet) => { 
	return morse[alphabet];
})
	const result = mappedMorse.join(''); 
  document.getElementById("morseOutput").innerHTML = "";
	document.getElementById("alphabetOutput").innerHTML = result;
  document.getElementById("morseInput").value = "";
}

const reset = () => {
	document.getElementById("alphabetInput").value = "";
	document.getElementById("alphabetOutput").innerHTML = "";
  document.getElementById("morseInput").value = "";
	document.getElementById("morseOutput").innerHTML = "";
}
