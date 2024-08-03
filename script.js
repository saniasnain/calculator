let digits = document.querySelectorAll(".digit");
let display = document.querySelector("input");


let string = "";
let arr = Array.from(digits);

arr.forEach(digit =>{
	digit.addEventListener('click',(e)=>{
		if(e.target.innerHTML == "="){
			string = eval(string);
			display.value = string;
		}
		else if (e.target.innerText === "AC") {
			console.log("erase");
			string = "";
			display.value= string;
		}
		else if (e.target.innerText === 'DEL') {
			string = string.substring(0, string.length-1);
			display.value= string;
		}
		else{
			string += e.target.innerText;
			display.value = string;	
		}
		
	})
});



