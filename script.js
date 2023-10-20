function displayData() {
    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const dob = document.getElementById('dob').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const city = document.getElementById('city').value;
    const address = document.getElementById('address').value;
    const languages = document.querySelectorAll('input[name="language"]:checked');

    let languagesList = '';
    languages.forEach(lang => {
        languagesList += lang.value + ', ';
    });
    languagesList = languagesList.slice(0, -2);  // Видалення останньої коми

    const tableHTML = `
        <table class="table table-bordered">
            <tr scope="row"><td>Ім'я</td><td>${name}</td></tr>
            <tr scope="row"><td>Прізвище</td><td>${surname}</td></tr>
            <tr scope="row"><td>Дата народження</td><td>${dob}</td></tr>
            <tr scope="row"><td>Стать</td><td>${gender}</td></tr>
            <tr scope="row"><td>Місто</td><td>${city}</td></tr>
            <tr scope="row"><td>Адреса</td><td>${address}</td></tr>
            <tr scope="row"><td>Мови</td><td>${languagesList}</td></tr>
        </table>
    `;

    document.getElementById('outputTable').innerHTML = tableHTML;
    document.getElementById('registrationForm').style.display = 'none';
}
