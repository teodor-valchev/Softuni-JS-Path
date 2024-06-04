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