import { Test, TestingModule } from '@nestjs/testing';
import { QuoteGeneratorController } from './quote-generator.controller';
import { QuoteGeneratorService } from './quote-generator.service';
import { QuoteGeneratorDataService } from './quote-generator-data.service';
import { INestApplication } from '@nestjs/common';
import { QuoteGeneratorModule } from './quote-generator.module';
import * as request from 'supertest';

describe('QuoteGeneratorController', () => {
  let controller: QuoteGeneratorController;
  let app: INestApplication;
  const quotesServices = {
    getRandomQuote: () => ({
      quote: 'Some quote',
      character: 'Frank',
    }),
  };

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [QuoteGeneratorModule],
    })
      .overrideProvider(QuoteGeneratorService)
      .useValue(quotesServices)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

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

  it('/GET random quote', () => {
    return request(app.getHttpServer())
      .get('/quote-generator')
      .expect(200)
      .expect(quotesServices.getRandomQuote());
  });
});
