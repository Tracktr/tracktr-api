import { Test } from '@nestjs/testing';
import { MovieController } from './movie.controller';
import { MovieService } from './movie.service';
import { Movie } from './interface/movie.interface';

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

  describe('root', () => {
    it('should return "Interstellar"', () => {
      const result: Movie = {
        name: 'Interstellar',
      };
      jest.spyOn(movieService, 'getMovie').mockImplementation(() => result);

      expect(movieController.getMovie()).toBe(result);
    });
  });
});
