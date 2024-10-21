const passwordLengthInput = document.getElementById('passwordLength');
const includeUppercaseInput = document.getElementById('includeUppercase');
const includeLowercaseInput = document.getElementById('includeLowercase');
const includeNumbersInput = document.getElementById('includeNumbers');
const includeSpecialCharsInput = document.getElementById('includeSpecialChars');
const generateButton = document.getElementById('generateButton');
const passwordOutput = document.getElementById('passwordOutput');
const copyButton = document.getElementById('copyButton');

function generatePassword() {
    const passwordLength = parseInt(passwordLengthInput.value);
    if (isNaN(passwordLength) || passwordLength < 8) {
      alert('Palun pane parooli pikkuseks vähemalt 8 tähemärki.');
      return;
    }
  
    const charset = [];
    if (includeUppercaseInput.checked) {
      charset.push('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    }
    if (includeLowercaseInput.checked) {
      charset.push('abcdefghijklmnopqrstuvwxyz');
    }
    if (includeNumbersInput.checked) {
      charset.push('0123456789');
    }
    if (includeSpecialCharsInput.checked) {
      charset.push('!@#$%^&*');
    }
  
    if (charset.length === 0) {
      alert('Palun vali vähemalt üks kategooria, millega parooli genereerida.');
      return;
    }
  
    let password = '';
    for (let i = 0; i < passwordLength; i++) {
      const randomCharSet = charset[Math.floor(Math.random() * charset.length)];
      password += randomCharSet.charAt(Math.floor(Math.random() * randomCharSet.length));
    }
  
    passwordOutput.textContent = password;
  }
  
  generateButton.addEventListener('click', generatePassword);

  copyButton.addEventListener('click', () => {
    navigator.clipboard.writeText(passwordOutput.textContent);
    alert('Password copied to clipboard!');
  });