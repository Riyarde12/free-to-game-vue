import { storageService } from './async-storage-service.js';
import axios from 'axios';

const GAMES_KEY = 'games';
const GAME_KEY = 'game';

export const freeGamesService = {
    query,
    getGameById,
};

async function query() {
    try {
        let games = storageService.query(GAMES_KEY);
        if (!games.length || !games) {
            const options = {
                method: 'GET',
                url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
                headers: {
                    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
                    'X-RapidAPI-Key': 'd7a3b5790dmsh87ba1cbbe6aee82p1d7879jsn7f1252e38a68'
                }
            };
            const res = await axios.request(options);
            console.log('res.data', res.data);
            games = res.data.splice(0, 20);
            storageService.save(GAMES_KEY, games);

            return games;

        } else return games;
    } catch (err) {
        console.log('Cannot get API req', err);
    }
}



async function getGameById(gameId) {
    try {
        let game = await storageService.query(GAME_KEY);
        if (game.id !== +gameId) {
            const options = {
                method: 'GET',
                url: 'https://free-to-play-games-database.p.rapidapi.com/api/game',
                params: { id: `${gameId}` },
                headers: {
                    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
                    'X-RapidAPI-Key': 'd7a3b5790dmsh87ba1cbbe6aee82p1d7879jsn7f1252e38a68'
                }
            };
            const res = await axios.request(options);
            game = res.data;
            storageService.save(GAME_KEY, game);
            console.log('game', game);
            return game;
        } else {
            const game = storageService.get(GAMES_KEY, gameId);
            console.log('game', game);
            return game;

        }
    } catch (err) {
        console.log('Cannot get game', err);
    }
}

