import { Module } from '@nestjs/common';
import { MovieModule } from './modules/movie/movie.module';

@Module({
  imports: [MovieModule],
})
export class AppModule {}
