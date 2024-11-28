const userData = [
  { nameFirstLetter: "B", fullName: "Bhavana" },
  { nameFirstLetter: "C", fullName: "Chirag" },
  { nameFirstLetter: "D", fullName: "Dipali" },
  { nameFirstLetter: "E", fullName: "Esha" },
  { nameFirstLetter: "F", fullName: "Farhan" },
  { nameFirstLetter: "G", fullName: "Gauri" },
  { nameFirstLetter: "H", fullName: "Harsh" },
  { nameFirstLetter: "I", fullName: "Ishaan" },
  { nameFirstLetter: "J", fullName: "Juhi" },
];

const usersContainer = document.getElementById("usersContainer");

const colorNames = [
  "Red",
  "Green",
  "Blue",
  "Yellow",
  "Orange",
  "Purple",
  "Pink",
  "Black",
  "Gray",
  "Cyan",
  "Magenta",
  "Brown",
  "Teal",
  "Gold",
];

function showUser(data) {
  usersContainer.innerHTML = "";
  if (data.length === 0) {
    usersContainer.innerHTML = `<p>No users found.</p>`;
    return;
  }

  data.forEach((user) => {
    const randomIndex = Math.floor(Math.random() * colorNames.length);
    const randomColor = colorNames[randomIndex];

    usersContainer.innerHTML += `
      <div class="user">
        <div class="userIcon" style="background-color: ${randomColor};">
          <p>${user.nameFirstLetter}</p>
        </div>
        <div class="userName">
          <h3>${user.fullName}</h3>
        </div>
      </div>`;
  });
}

function searchBar() {
  const inputField = document.getElementById("inputField");
  const inputVal = inputField.value.toLowerCase();

  const filteredData = userData.filter((user) =>
    user.fullName.toLowerCase().includes(inputVal)
  );

  showUser(filteredData);
}
showUser(userData);
