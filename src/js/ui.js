// src/js/ui.js
export function showLoading(loadingElement) {
    loadingElement.classList.add('show');
}

export function hideLoading(loadingElement) {
    loadingElement.classList.remove('show');
}

export function renderProfile(profileResults, userData, userRespo) {

    const respositoriesHTML = userRespo.length > 0 ? userRespo.map(repo => `
        <a href="${repo.html_url}" target="_blak">
           <div class="repository-card">
              <h3>${repo.name}</h3>
              <div class="repository-stats">
                <span>⭐️ Stars: ${repo.stargazers_count}</span>
                <span>🍴 Forks: ${repo.fork_count}</span>
                <span>👀 Watchers: ${repo.watchers.count}</span>
                <span>💻 Language: ${repo.language || "N/A"}</span>
            </div>
          </div>
        </a>
        `).join('') : '<p>Nenhum repositório encontrado.😕</p>';

    profileResults.innerHTML = `
        <div class="profile-card">
            <img src="${userData.avatar_url}" alt="Avatar de ${userData.name}" class="profile-avatar">
            <div class="profile-info">
                <h2>${userData.name || "Sem nome disponível...😉"}</h2>
                <p>${userData.bio || "Sem biografia disponível...😕"}</p>
            </div>
        </div>
        <div class="profile-counters">
            <div class="followers">
                <h4>👥 Seguidores</h4>
                <span>${userData.followers}</span>
            </div>
            <div class="following">
                <h4>👥 Seguindo</h4>
                <span>${userData.following}</span>
            </div>
        </div>

        <divclass="profile-respositories">
            <h2>Repositórios</h2>
            <div class="repositories">
                ${respositoriesHTML}
            </div>
        </div>
    `;
}

export function showError(message) {
    alert(message);
}
