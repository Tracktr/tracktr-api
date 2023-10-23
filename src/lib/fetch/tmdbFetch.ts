interface FetchFromTMDB {
    type: "movie",
    settings: string;
}

// TODO: Implement generics to determine return type based on FetchFromTMDB.type
// TODO: TMDB returns generic error when no data has been found, this needs to be catched and handled by us
export function fetchFromTMDB({type, settings}: FetchFromTMDB): Promise<any> {
    const apiUrl = `https://api.themoviedb.org/3/${type}/${settings}`;
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${process.env.TMDB_AUTHORIZATION_TOKEN || process.env.TMDB_API_KEY}`
        }
    };

    return fetch(apiUrl, options)
        .then(res => res.json())
        .catch((err) => console.log(err));
}