const eternalsData = [
    {
        name: "Ikaris",
        age: 5000, 
        skills: ["laser", "strength", "fight"],
        pic: "img/ika.jpeg"
    },
    {
        name: "Sersi",
        age: 7000,
        skills: ["matter manipulation", "immortality", "healing"],
        pic: "img/sersi.jpeg"
    }, 
    {
        name: "Huma",
        age: 6000,
        skills: ["sword fighting", "weapons mastery", "super agility"],
        pic: "img/huma.jpeg"
    },
    { 
        name: "King",
        age: 8000,
        skills: ["energy projection", "sword", "hand-to-hand combat"],
        pic: "img/king.jpeg"
    },
    {
        name: "Pepi",
        age: 5000,
        skills: ["super speed", "sword", "mortality"],
        pic: "img/pepi.jpeg"
    }
];

// Create a list to display the Eternals
const eternalsList = document.querySelector(".eternalsList");
const listElement = document.createElement("ul");
eternalsList.appendChild(listElement); // Append the list to the eternalsList div

// List each character's name
eternalsData.forEach(eternal => {
    let listItem = document.createElement("li");
    listItem.textContent = eternal.name; // Only display the name
    listElement.appendChild(listItem); // Append the list item to the list
});

// Create skill buttons
const skillsButtonsDiv = document.querySelector(".skillsButtons");
const allSkills = new Set(); // Use a Set to collect unique skills

// Collect unique skills
eternalsData.forEach(eternal => {
    eternal.skills.forEach(skill => allSkills.add(skill));
});

// Create buttons for each skill
allSkills.forEach(skill => {
    const button = document.createElement("button");
    button.textContent = skill;
    button.classList.add("skill-button");
    button.onclick = function() {
        document.querySelector("#skillInput").value = skill; // Set input value to skill
        findBySkill(); // Call findBySkill function
    };
    skillsButtonsDiv.appendChild(button); // Append button to the skillsButtons div
});

// Function to find Eternals by skill
function findBySkill() {
    const inputSkill = document.querySelector("#skillInput").value.toLowerCase();
    const searchResult = document.querySelector(".results");
    const characterPic = document.querySelector(".selectedPic");

    // Find Eternals with the input skill using filter to allow multiple matches
    const foundEternals = eternalsData.filter(eternal => eternal.skills.includes(inputSkill));

    // Clear previous search result
    searchResult.textContent = '';
    characterPic.src = ''; // Clear the previous image
    characterPic.style.display = "none"; // Hide image initially

    // Check if any Eternal has the entered skill and display result
    if (foundEternals.length > 0) {
        foundEternals.forEach(eternal => {
            const resultText = `${eternal.name} has a skill in ${inputSkill}.`;
            searchResult.textContent += resultText + ' ';
            characterPic.src = eternal.pic; // Set the image source to the character's picture
            characterPic.style.display = "block"; // Show the image
        });
    } else {
        searchResult.textContent = "No Eternals with that skill found.";
    }
}
