// Get all needed Dom elements
const form = document.getElementById("checkInForm");
const nameInput = document.getElementById("attendeeName");
const teamSelect = document.getElementById("teamSelect");

//Track attendance
let count = 0;
const maxCount = 50;

//Handle for submission
form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Get form values
  const name = nameInput.value;
  const team = teamSelect.value;
  const teamName = teamSelect.selectedOptions[0].text;

  console.log(name, team, teamName);

  //Increment count
  // Stop check-in if maxCount reached
  if (count >= maxCount) {
    alert(`Check-in is closed. Maximum of ${maxCount} reached.`);
    return;
  }
  count++;
  console.log("Total check-ins: ", count);

  //update progress bar
  const percentage = Math.round((count / maxCount) * 100) + "%";
  console.log(`progress: ${percentage}`);

  const teamCounter = document.getElementById(team + "Count");
  teamCounter.textContent = parseInt(teamCounter.textContent) + 1;

  const attendeeCounter = document.getElementById("attendeeCount");
  attendeeCounter.textContent = count;

  //Show welcome message
  const message = `welcome, ${name} from ${teamName}!`;
  console.log(message);

  form.reset();
});
