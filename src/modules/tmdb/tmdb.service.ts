import {BadRequestException, Get, Injectable, Param} from '@nestjs/common';
import {Movie} from "./interfaces/movie.interface";
import {fetchFromTMDB} from "../../lib/fetch/tmdbFetch";

@Injectable()
export class TMDBService {
  @Get('id/:id')
  async getMovieById(@Param('id') id: string): Promise<Movie> {
    const data = fetchFromTMDB({
      type: 'movie',
      settings: `${id}?language=en-US`
    });

    if(data){
      return data
    } else {
      throw new BadRequestException();
    }
  }
}
