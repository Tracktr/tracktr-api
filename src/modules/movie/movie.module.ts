import { Module } from '@nestjs/common';
import { MovieController } from './movie.controller';
import { MovieService } from './movie.service';
import { TMDBModule } from '../tmdb/tmdb.module';

@Module({
  controllers: [MovieController],
  providers: [MovieService],
  imports: [TMDBModule],
})
export class MovieModule {}
