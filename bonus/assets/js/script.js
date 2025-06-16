const endpoint = 'https://flynn.boolean.careers/exercises/api/random/mail';
const ulEl = document.getElementById('mail-list');

for (let i = 10; i > 0; i--) {
    fetch(endpoint)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        let emailMarkup = `
            <li>
                ${data.response}
            </li>
        `;
        ulEl.insertAdjacentHTML('beforeend', emailMarkup);
    });
};
