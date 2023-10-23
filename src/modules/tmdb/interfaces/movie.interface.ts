export interface Movie {
    adult: boolean;
    backdrop_path: string;
    belongs_to_collection: unknown;
    budget: number;
    genres: Genres[];
    homepage: string;
    id: number;
    imdb_id: string;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    production_companies: ProductionCompanies[];
    production_countries: ProductionCountries[];
    release_date: string; // TODO: Can possibly be date
    revenue: number;
    runtime: number;
    spoken_languages: SpokenLanguages[];
    status: string;
    tagline: string;
    title: string;
    video: boolean;
    vote_average: string;
    vote_count: number;

    success?: boolean;
    status_code?: string;
    status_message?: string;
}

interface Genres {
    id: number;
    name: string;
}

interface ProductionCompanies {
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
}

interface ProductionCountries {
    iso_3166_1: string;
    name: string;
}

interface SpokenLanguages {
    english_name: string;
    iso_639_1: string;
    name: string;
}