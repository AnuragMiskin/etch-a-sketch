// Prompt the user for the grid size
let given = prompt("Enter the grid size");

// Convert the input to a number (assuming the user enters a valid number)
given = parseInt(given);

// Check if given is a valid number
if (!isNaN(given)) {
    const section = document.querySelector('.section');

    for (let i = 1; i <= given; i++) {
        const container = document.createElement("div");
        container.setAttribute("class", "container");
        section.appendChild(container);

        for (let j = 1; j <= given; j++) {
            const box = document.createElement('div');
            box.setAttribute("class", "box");
            container.appendChild(box);
        }
    }
} else {
    alert("Invalid input. Please enter a valid number for the grid size.");
}
