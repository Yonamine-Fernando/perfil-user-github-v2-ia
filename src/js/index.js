
import { fetchUser } from './apiGit.js';
import { showLoading, hideLoading, renderProfile, showError } from './ui.js';

const inputSearch = document.getElementById('input-search');
const btnSearch = document.getElementById('btn-search');
const profileResults = document.querySelector('.profile-data');
const loadingElement = document.querySelector('.loading');

async function handleSearch() {
    const userName = inputSearch.value;
    if (!userName) {
        showError('Por favor, digite um nome de usuário do GitHub.');
        return;
    }
    showLoading(loadingElement);
    try {
        const userData = await fetchUser(userName);
        renderProfile(profileResults, userData);
    } catch (error) {
        showError('Usuário não encontrado. Por favor verifique o nome do usuário e tente novamente.');
    } finally {
        hideLoading(loadingElement);
    }
}

btnSearch.addEventListener('click', handleSearch);

