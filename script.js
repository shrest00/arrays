const eternalsData = [
    {
        name: "Ikaris",
        age: 5000,
        skills: ["laser", "strength", "fight"],
        pic: "ika.jpeg"
    },
    {
        name: "Sersi",
        age: 7000,
        skills: ["matter manipulation", "immortality", "healing"],
        pic: "sersi.jpeg"
    },
    {
        name: "Huma",
        age: 6000,
        skills: ["sword fighting", "weapons mastery", "super agility"],
        pic: "huma.jpeg"
    },
    {
        name: "King",
        age: 8000,
        skills: ["energy projection", "sword", "hand-to-hand combat"],
        pic: "king.jpeg"
    },
    {
        name: "Pepi",
        age: 5000,
        skills: ["super speed", "invention", "mortal"],
        pic: "pepi.jpeg"
    }
];

// Create a list to display the Eternals
const eternalsList = document.querySelector(".eternalsList");
const listElement = document.createElement("ul");
eternalsList.appendChild(listElement); 

// List each character's name
eternalsData.forEach(eternal => {
    let listItem = document.createElement("li");
    listItem.textContent = eternal.name; 
    listElement.appendChild(listItem); 
});

// Function to find Eternals by skill
function findBySkill() {
    const inputSkill = document.querySelector("#skillInput").value.toLowerCase(); // Convert input to lowercase
    const searchResult = document.querySelector(".results");
    const characterPic = document.querySelector(".selectedPic");

    // Clear previous search result
    searchResult.textContent = '';
    characterPic.src = ''; 
    characterPic.style.display = "none"; 

    // Filter Eternals based on the input skill
    const foundEternals = eternalsData.filter(eternal => eternal.skills.includes(inputSkill));

    // Check if any Eternal has the entered skill and display result
    if (foundEternals.length > 0) {
        foundEternals.forEach(eternal => {
            const resultText = `${eternal.name} has a skill in ${inputSkill}.`;
            searchResult.textContent += resultText + ' ';
            characterPic.src = eternal.pic; 
            characterPic.style.display = "block"; 
        });
    } else {
        searchResult.textContent = "No Eternals with that skill found.";
    }
}

const allSkills = [...new Set(eternalsData.flatMap(eternal => eternal.skills))]; // Get unique skills
document.querySelector(".skillsDisplay").innerHTML = allSkills.join(", "); // Display skills
