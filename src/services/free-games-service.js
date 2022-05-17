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
            return axios.request(options).then(function (response) {
                games = response.data.splice(0, 20);
                storageService.save(GAMES_KEY, games);
                console.log(games);
                return games;
            }).catch(function (error) {
                console.error(error);
            });
        } else return games;
    } catch (err) {
        console.log('Cannot get API req', err);
        throw err;
    }
}

async function getGameById(gameId) {
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
        return axios.request(options).then(function (response) {
            game = response.data;
            storageService.save(GAME_KEY, game);
            return response.data;
        }).catch(function (error) {
            console.error(error);
        });
    } else return storageService.get(GAMES_KEY, gameId);
}

