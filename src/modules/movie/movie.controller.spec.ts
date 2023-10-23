import { Test } from '@nestjs/testing';
import { Movie } from './interfaces/movie.interface';
import { MovieController } from './movie.controller';
import { MovieService } from './movie.service';

describe('MovieController', () => {
  let movieController: MovieController;
  let movieService: MovieService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [MovieController],
      providers: [MovieService],
    }).compile();

    movieService = moduleRef.get<MovieService>(MovieService);
    movieController = moduleRef.get<MovieController>(MovieController);
  });

  describe('getMovie', () => {
    it('should return a movie', () => {
      const result: Movie = { name: 'Interstellar' };
      jest.spyOn(movieService, 'getMovie').mockImplementation(() => result);

      expect(movieController.getMovie()).toBe(result);
    });
  });
});
