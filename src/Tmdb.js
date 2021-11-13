/* eslint-disable import/no-anonymous-default-export */
const API_KEY = 'e661a6901b0260ee05bbc047b8992e2c';
const API_BASE = 'https://api.themoviedb.org/3';

/*
Items that we will need:
    -Netflix originals
    -Top Rated
    -Trending
    -Action, Comedy, Terror, Romance and Docs
*/

const basicFetch = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json;
}

export default {
    getHomeList: async () => {
        return [
            {
                slug: 'originals',
                title: 'Originals',
                items: await basicFetch(`/discover/tv?with_network=213&language=en-US&api_key=${API_KEY}`)
            },
            {
                slug: 'trending',
                title: 'Trending',
                items: await basicFetch(`/trending/all/week?language=en-US&api_key=${API_KEY}`)
            },
            {
                slug: 'toprated',
                title: 'Top Rated',
                items: await basicFetch(`/movie/top_rated?language=en-US&api_key=${API_KEY}`)
            },
            {
                slug: 'action',
                title: 'Action',
                items: await basicFetch(`/discover/movie?with_genres=28&language=en-US&api_key=${API_KEY}`)
            },
            {
                slug: 'comedy',
                title: 'Comedy',
                items: await basicFetch(`/discover/movie?with_genres=35&language=en-US&api_key=${API_KEY}`)
            },
            {
                slug: 'terror',
                title: 'Terror',
                items: await basicFetch(`/discover/movie?with_genres=27&language=en-US&api_key=${API_KEY}`)
            },
            {
                slug: 'romance',
                title: 'Romance',
                items: await basicFetch(`/discover/movie?with_genres=10749&language=en-US&api_key=${API_KEY}`)
            },
            {
                slug: 'documentary',
                title: 'Documentary',
                items: await basicFetch(`/discover/movie?with_genres=99&language=en-US&api_key=${API_KEY}`)
            },
        ];
    },
    getMovieInfo: async (movieId, type) => {
        let info = {};
        
        if(movieId) {
            switch(type) {
                case 'movie':
                    info = await basicFetch(`/movie/${movieId}?api_key=${API_KEY}`);
                break;
                case 'tv':
                    info = await basicFetch(`/tv/${movieId}?api_key=${API_KEY}`);
                break;
                default:
                    info = null;
                break;    
            }
        }
        return info;

    } 

}