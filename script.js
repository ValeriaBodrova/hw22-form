
const form = document.getElementById('registrationForm');

form.addEventListener('submit', function(event) {
    event.preventDefault();


const formData = new FormData(event.target);
const userData = {};

formData.forEach((value, key) => {
    if (userData[key]) {
        if (Array.isArray(userData[key])) {
            userData[key].push(value);
        } else {
            userData[key] = [userData[key], value];
        }
        } else {
            userData[key] = value;
        }
    });
  
    console.log(userData);

    displayData(userData);
});

function displayData(data) {
    const name = data.name;
    const surname = data.surname;
    const dob = data.dob;
    const gender = data.gender;
    const city = data.city;
    const address = data.address;
    const languages = Array.isArray(data.language) ? data.language.join(", ") : data.language;

    const tableHTML = `
        <table class="table table-bordered">
            <tr><td>Ім'я</td><td>${name}</td></tr>
            <tr><td>Прізвище</td><td>${surname}</td></tr>
            <tr><td>Дата народження</td><td>${dob}</td></tr>
            <tr><td>Стать</td><td>${gender}</td></tr>
            <tr><td>Місто</td><td>${city}</td></tr>
            <tr><td>Адреса</td><td>${address}</td></tr>
            <tr><td>Мови</td><td>${languages}</td></tr>
        </table>    `;

    document.getElementById('outputTable').innerHTML = tableHTML;
    document.getElementById('registrationForm').style.display = 'none';
}

