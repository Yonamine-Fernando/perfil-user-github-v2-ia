// src/js/ui.js
export function showLoading(loadingElement) {
    loadingElement.classList.add('show');
}

export function hideLoading(loadingElement) {
    loadingElement.classList.remove('show');
}

export function renderProfile(profileResults, userData) {
    profileResults.innerHTML = `
        <div class="profile-card">
            <img src="${userData.avatar_url}" alt="Avatar de ${userData.name}" class="profile-avatar">
            <div class="profile-info">
                <h2>${userData.name}</h2>
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
    `;
}

export function showError(message) {
    alert(message);
}
