function sumTo(n) {
	if (typeof n !== "number" || n <= 0 || !Number.isInteger(n)) {
		return "Error, N is not valid number"
	}
	let sum = 0;
	for (let i = 1; i <=n; i++) {
		sum = sum + i
	}
	return sum
}

function displaySum() {
	let sum = sumTo(Number(input.value));
	result.innerHTML = `Result: ${sum}`	
}
const input = document.querySelector("#n-input")
const button = document.querySelector(".btn")
const result = document.querySelector(".result")

button.addEventListener("click", function (e) {
	displaySum()
})

document.addEventListener("keypress", function(e) {
	if (e.key === "Enter") {
		displaySum()
	}
})

