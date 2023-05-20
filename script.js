let lowercaseAlphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

let uppercaseAlphabets = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

let specialSymbols = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '[', ']', '{', '}', ';', ':', '<', '>', '?', '/', '|', '~'];

function generatePassword() {
  let password = '';
  let length = Math.floor(Math.random() * (16 - 8 + 1)) + 8;

  password += lowercaseAlphabets[Math.floor(Math.random() * lowercaseAlphabets.length)];
  password += uppercaseAlphabets[Math.floor(Math.random() * uppercaseAlphabets.length)];
  password += specialSymbols[Math.floor(Math.random() * specialSymbols.length)];

  let remainingLength = length - 3;

  for (let i = 0; i < remainingLength; i++) {
    let randomChar = lowercaseAlphabets[Math.floor(Math.random() * lowercaseAlphabets.length)];
    password += randomChar;
  }

  password = shuffleString(password); // Shuffle the password

  const passwordSection = document.getElementById("passwordSection");
  const generatedPassword = document.getElementById("generated_password");

  generatedPassword.innerText = password; // Set the generated password
  passwordSection.style.display = "block"; // Show the password section

  return password;
}


function shuffleString(string) {
  let array = string.split('');
  let currentIndex = array.length, temporaryValue, randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array.join('');
}

document.getElementById("generateButton").addEventListener("click", generatePassword);

function CopyPassword() {
  const generated_passwords = document.getElementById("generated_password")
  const copied_password = generated_passwords.innerText

  navigator.clipboard.writeText(copied_password)
    .then(() => {
      alert(`${copied_password} As A Password Copied Successfully...`)
    })
    .catch(() => {
      alert("Oops Some Error Occured...")
    });
}

// Rest of the code...

document.getElementById("copyButton").addEventListener("click", CopyPassword);
