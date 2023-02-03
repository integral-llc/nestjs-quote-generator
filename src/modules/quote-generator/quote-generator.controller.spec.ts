import { Test, TestingModule } from '@nestjs/testing';
import { QuoteGeneratorController } from './quote-generator.controller';

describe('QuoteGeneratorController', () => {
  let controller: QuoteGeneratorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [QuoteGeneratorController],
    }).compile();

    controller = module.get<QuoteGeneratorController>(QuoteGeneratorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
