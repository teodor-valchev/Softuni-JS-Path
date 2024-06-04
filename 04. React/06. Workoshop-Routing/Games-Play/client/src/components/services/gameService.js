const base_url = "http://localhost:3030/jsonstore/games";

export const createGame = async (gameData) => {
    const game = await fetch(base_url, {
        method: 'POST',
        body: JSON.stringify(gameData)
    })

    if (!game.ok) {
        throw new Error('Invalid data!')
    }
    return game
}

export const getAll = async () => {
    const response = await fetch(base_url)
    const games = await response.json()

    return Object.values(games)
}

export const getOne = async (id) => {
    const response = await fetch(base_url + `/${id}`)
    const game = await response.json();

    return game
}