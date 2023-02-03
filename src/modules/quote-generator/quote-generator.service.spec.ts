import { Test, TestingModule } from '@nestjs/testing';
import { QuoteGeneratorService } from './quote-generator.service';

describe('QuoteGeneratorService', () => {
  let service: QuoteGeneratorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QuoteGeneratorService],
    }).compile();

    service = module.get<QuoteGeneratorService>(QuoteGeneratorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
