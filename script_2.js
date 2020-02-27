let number = prompt('De quel nombre veux-tu calculer la factorielle ?');
let result = 1;
if (number > 0){
	for(let n=1; n <= number; n++){
		result *= n;
	};
	console.log(`Le résultat est : ${result}`);
}else if(number == 0){
	console.log(`Le résultat est : ${result}`);
}else{
	console.log('Tu dois saisir un nombre positif !');
};
