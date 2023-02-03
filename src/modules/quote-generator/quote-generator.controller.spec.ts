import { Test, TestingModule } from '@nestjs/testing';
import { QuoteGeneratorController } from './quote-generator.controller';
import { QuoteGeneratorService } from './quote-generator.service';
import { QuoteGeneratorDataService } from './quote-generator-data.service';

describe('QuoteGeneratorController', () => {
  let controller: QuoteGeneratorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [QuoteGeneratorController],
      providers: [
        QuoteGeneratorService,
        {
          provide: QuoteGeneratorDataService,
          useValue: {
            getRandomQuote: () => ({}),
            getQuotes: () => [],
          },
        },
      ],
    }).compile();

    controller = module.get<QuoteGeneratorController>(QuoteGeneratorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
