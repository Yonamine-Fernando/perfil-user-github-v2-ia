const inputSearch = document.getElementById('input-search');
const btnSearch = document.getElementById('btn-search');
const profileResults = document.querySelector('.profile-data');
const loadingElement = document.querySelector('.loading');

const BASE_URL = 'https://api.github.com';

async function getUser(userName) {
    if (!userName) {
        alert('Por favor, digite um nome de usuário do GitHub.');
        return;
    }

    loadingElement.classList.add('show');

    try {
        const response = await fetch(`${BASE_URL}/users/${userName}`);

        if (!response.ok) {
            alert('Usuario não encontrado. Por favor verifique o nome do usuário e tente novamente.');
            return;
        }
        const userData = await response.json();
        console.log(userData);

        profileResults.innerHTML = `
        <div class="profile-card">
            <img src="${userData.avatar_url}" alt="Avatar de ${userData.name}" class="profile-avatar">
            <div class="profile-info">
                <h2>${userData.name}</h2>
                <p>${userData.bio || "Sem biografia disponível...😕"}</p>
            </div>
        </div>`;

    } catch (error) {
        console.error('Erro ao buscar o perfil do uuário:', error);
        alert('Ocorreu um erro ao buscar o perfil do usuário. Por favor verifique o nome do usuário e tente novamente mais tarde.');
    } finally {
        loadingElement.classList.remove('show');
    }
}

btnSearch.addEventListener('click', () => {
    const userName = inputSearch.value;
    getUser(userName);
});

