import { Injectable } from '@nestjs/common';
import { QuoteGeneratorDataService } from './quote-generator-data.service';
import { QuoteModel } from './data-models/QuoteModel';

@Injectable()
export class QuoteGeneratorService {
  constructor(private readonly dataService: QuoteGeneratorDataService) {}

  getRandomQuote(): Promise<QuoteModel> {
    return this.dataService.getRandomQuote();
  }
}
