export const BASE_URL = 'https://api.github.com';

export async function fetchUser(userName) {
    const response = await fetch(`${BASE_URL}/users/${userName}`);
    if (!response.ok) {
        throw new Error('Usuário não encontrado');
    }
    return response.json();
}

export async function fetchRespo(userName) {
    const response = await fetch(`${BASE_URL}/users/${userName}/repos?per_page=10&sort=created`);
    if (!response.ok) {
        throw new Error("Repositório não encontrado ‼️");
    }
    return await response.json();
}
