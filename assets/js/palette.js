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

function mHslColor() {
    // Function to generate a random HSL color
    function getRandomValue(max) {
        return Math.floor(Math.random() * max); // Generates a random value up to the max
    }

    const hue = getRandomValue(360);    // Generates a random hue value between 0 and 359
    const saturation = getRandomValue(101); // Generates a random saturation value between 0% and 100%
    const lightness = getRandomValue(101);  // Generates a random lightness value between 0% and 100%

    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}