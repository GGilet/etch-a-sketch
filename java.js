//To add, error handling and serialization

let input = 16;
const button = document.querySelector('#resetButton');
let container = document.querySelector('#container');

function GenerateGrid(input) {
	const parent = document.getElementById('container');
	while (parent.firstChild) {
		parent.firstChild.remove();
	}
	for (let i = 0; i < input; i++) {
		const divRow = document.createElement('div');
		divRow.classList.add('gridRow');
		container.appendChild(divRow);
		for (let j = 0; j < input; j++) {
			const divGrid = document.createElement('div');
			divGrid.classList.add('gridItem');
			divRow.appendChild(divGrid);
		}
	}
	onHover();
}

function resetGrid() {
	let container = document.querySelector('#container');
	for (let i = 0; i < input; i++) {
		container.removeChild(divGrid);
		for (let j = 0; j < input; j++) {
			container.removeChild(divRow);
		}
	}
}
GenerateGrid(input);

function onHover() {
	let grid = document.querySelectorAll('.gridItem');
	grid.forEach((gridItem) => {
		gridItem.addEventListener('mouseover', () => {
			gridItem.setAttribute('class', 'grid-item-hoverState');
		});
	});
}

function getGridSize() {
	input = prompt('What grid size would you like?');
	return input;
}

button.addEventListener('click', () => {
	let grid = document.querySelectorAll('.grid-item-hoverState');
	grid.forEach((gridItem) => {
		gridItem.setAttribute('class', 'gridItem');
	});
	getGridSize();
	GenerateGrid(input);
});
