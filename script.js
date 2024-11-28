const userData = [
  { nameFirstLetter: "A", fullName: "Aniket" },
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

userData.forEach((user) => {
  usersContainer.innerHTML += `
      <div class="user">
        <div class="userIcon">
          <p>${user.nameFirstLetter}</p>
        </div>
        <div class="userName">
          <h3>${user.fullName}</h3>
        </div>
      </div>`;
});
