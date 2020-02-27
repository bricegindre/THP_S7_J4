let number = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");
for(let n = 1; n <= number; n++){
	console.log(" ".repeat(number- n) + "#".repeat(n));
};
