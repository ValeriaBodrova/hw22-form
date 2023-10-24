/*     let languagesList = '';
    languages.forEach(lang => {
        languagesList += lang.value + ', ';
    });
    languagesList = languagesList.slice(0, -2);  // Видалення останньої коми
 */


const form = document.getElementById('registrationForm');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    // Використовуємо FormData для збору даних з форми
    const formData = new FormData(event.target);

    const userData = {};
    for (let [key, value] of formData) {
        userData[key] = value;
    }
    
    // Виводимо дані в консоль
    console.log(userData);

    // І виводимо дані в таблицю
    displayData(userData);
});

function displayData(data) {
    const name = data.name;
    const surname = data.surname;
    const dob = data.dob;
    const gender = data.gender;
    const city = data.city;
    const address = data.address;
    const languages = data.language;  // тут можуть бути деякі відмінності, залежно від того, як ви зберігаєте мови

    // Інший код вашої функції ...
}

