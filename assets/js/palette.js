function HexColor() {
    // Function to generate a random hex color in the format #ff99ff
	function getRandomHex() {
		const hex = Math.floor(Math.random() * 256).toString(16);
        return hex.padStart(2, '0'); // Ensures the value has 2 digits
    }

    const red = getRandomHex();   // Generates a random hex value for red
    const green = getRandomHex(); // Generates a random hex value for green
    const blue = getRandomHex();  // Generates a random hex value for blue

    return `#${red}${green}${blue}`;
}

function RgbColor() {
    // Function to generate a random RGB color
	function getRandomValue() {
        return Math.floor(Math.random() * 256); // Generates a random value between 0 and 255
    }

    const red = getRandomValue();   // Generates a random value for red
    const green = getRandomValue(); // Generates a random value for green
    const blue = getRandomValue();  // Generates a random value for blue

    return `rgb(${red}, ${green}, ${blue})`;
}

function mHslColor(){
    // Function to generate a random HSL color
	function getRandomValue(max) {
        return Math.floor(Math.random() * max); // Generates a random value up to the max
    }

    const hue = getRandomValue(360);    // Generates a random hue value between 0 and 359
    const saturation = getRandomValue(101); // Generates a random saturation value between 0% and 100%
    const lightness = getRandomValue(101);  // Generates a random lightness value between 0% and 100%

    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}

function hexToRgb(hex) {
    // Remove the hash at the start if present
	hex = hex.replace(/^#/, '');

    // Convert hexadecimal color to RGB components
	let r = parseInt(hex.substring(0, 2), 16);
	let g = parseInt(hex.substring(2, 4), 16);
	let b = parseInt(hex.substring(4, 6), 16);

	return `rgb(${r}, ${g}, ${b})`;
}

function hexToHsl(hex) {

    // Remove the hash at the start if present
	hex = hex.replace(/^#/, '');

    // Convert hexadecimal color to RGB components
	let r = parseInt(hex.substring(0, 2), 16) / 255;
	let g = parseInt(hex.substring(2, 4), 16) / 255;
	let b = parseInt(hex.substring(4, 6), 16) / 255;

    // Find the maximum and minimum values of the RGB components
	let max = Math.max(r, g, b);
	let min = Math.min(r, g, b);
	let h, s, l = (max + min) / 2;

	if (max === min) {
        h = s = 0; // Achromatic
    } else {
    	let d = max - min;
    	s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    	switch (max) {
    	case r: h = (g - b) / d + (g < b ? 6 : 0); break;
    	case g: h = (b - r) / d + 2; break;
    	case b: h = (r - g) / d + 4; break;
    	}
    	h /= 6;
    }

    // Convert saturation and lightness to percentages
    s *= 100;
    l *= 100;
    h *= 360;

    return `hsl(${Math.round(h)}, ${Math.round(s)}%, ${Math.round(l)}%)`;
}


function RandomColor(){

	const elements = document.getElementsByClassName('cpg-page-palettes-item');

	for (let i = 0; i < elements.length; i++) {

		const color = HexColor();
		elements[i].style.backgroundColor = color;
		const innerDiv = elements[i].getElementsByTagName('div')[0];

		if (innerDiv) {
			innerDiv.innerHTML = "HEX: " + color + "<br>RGB: " + hexToRgb(color) + "<br>HSL: " + hexToHsl(color);
		}

	}

}

function AddColorItem(){

	const elements = document.getElementsByClassName('cpg-page-palettes-item');

    const lastElement = elements[elements.length - 1]; // Accesses the most recently created element

    if (lastElement) {
        const color = HexColor();
        lastElement.style.backgroundColor = color;
        const innerDiv = lastElement.getElementsByTagName('div')[0];

        if (innerDiv) {
            innerDiv.innerHTML = "HEX: " + color + "<br>RGB: " + hexToRgb(color) + "<br>HSL: " + hexToHsl(color);
        }
    }

}


function addPaletteItem() {

	const palettesContainer = document.querySelector(".cpg-page-palettes");

	const newPaletteItem = document.createElement("div");
    newPaletteItem.className = "cpg-page-palettes-item";

    const newPaletteColor = document.createElement("div");
    newPaletteColor.className = "cpg-page-palettes-color"; 
    
    newPaletteColor.textContent = "?";  
    newPaletteItem.appendChild(newPaletteColor);
    palettesContainer.appendChild(newPaletteItem);
    
    AddColorItem();

}

function removePaletteItem(){

	const palettesContainer = document.querySelector(".cpg-page-palettes");

	if (palettesContainer.lastElementChild) {
		palettesContainer.removeChild(palettesContainer.lastElementChild);
	}

}

document.querySelector("#generate-palette").addEventListener("click", () => {
	RandomColor();
});

document.querySelector("#add-palette").addEventListener("click", () => {
	addPaletteItem();
});

document.querySelector("#remove-palette").addEventListener("click", () => {
	removePaletteItem();
});

RandomColor();