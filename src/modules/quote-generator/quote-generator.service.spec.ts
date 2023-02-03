import { Test, TestingModule } from '@nestjs/testing';
import { QuoteGeneratorService } from './quote-generator.service';
import { QuoteGeneratorDataService } from './quote-generator-data.service';
import { createMock, DeepMocked } from '@golevelup/ts-jest';

describe('QuoteGeneratorService', () => {
  let service: QuoteGeneratorService;
  let dataService: DeepMocked<QuoteGeneratorDataService>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        QuoteGeneratorService,
        {
          provide: QuoteGeneratorDataService,
          useValue: createMock<QuoteGeneratorDataService>(),
        },
      ],
    }).compile();

    service = module.get<QuoteGeneratorService>(QuoteGeneratorService);
    dataService = module.get(QuoteGeneratorDataService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return empty quote when no quotes are available', async () => {
    const quote = await service.getRandomQuote();
    expect(quote.character).toBeFalsy();
  });

  it('should return valid quote when quotes are available', async () => {
    dataService.getQuotes.mockResolvedValueOnce([
      {
        quote_id: 1,
        quote: 'Some quote',
        character: 'Frank',
      },
    ]);

    const quote = await service.getRandomQuote();
    expect(quote.character).toBe('Frank');
  });

  it('should return the correct most active character', async () => {
    dataService.getQuotes.mockResolvedValueOnce([
      {
        quote_id: 1,
        quote: 'Some quote',
        character: 'Frank',
      },
      {
        quote_id: 2,
        quote: 'Some quote1',
        character: 'Ed',
      },
      {
        quote_id: 3,
        quote: 'Some quote2',
        character: 'Tim',
      },
      {
        quote_id: 4,
        quote: 'Some quote4',
        character: 'Ed',
      },
    ]);

    const mostActiveCharacter = await service.getMostActiveCharacter();
    expect(mostActiveCharacter.name).toBe('Ed');
  });
});
