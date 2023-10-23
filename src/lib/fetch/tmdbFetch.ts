import {BadRequestException} from "@nestjs/common";
import {Movie} from "../../modules/tmdb/interfaces/movie.interface";

type contentType = "movie"
type possibleTypes = Movie;

// TODO: Error when wrong data is received (e.g on tmdb connection error)
// TODO: Improve generics implementation
export async function fetchFromTMDB<T extends possibleTypes>(type: contentType, settingsString: string): Promise<T> {
    const apiUrl = `https://api.themoviedb.org/3/${type}/${settingsString}`;
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${process.env.TMDB_AUTHORIZATION_TOKEN || process.env.TMDB_API_KEY}`
        }
    };

    const response = await fetch(apiUrl, options);
    return await response.json() as Promise<T>;
}