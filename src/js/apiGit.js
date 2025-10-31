// src/js/api.js
export const BASE_URL = 'https://api.github.com';

export async function fetchUser(userName) {
    const response = await fetch(`${BASE_URL}/users/${userName}`);
    if (!response.ok) {
        throw new Error('Usuário não encontrado');
    }
    return response.json();
}
