import { Injectable } from '@nestjs/common';
import { QuoteGeneratorDataService } from './quote-generator-data.service';
import { QuoteModel } from './data-models/QuoteModel';
import { groupBy, orderBy } from 'lodash';
import { MostActiveCharacterDto } from './DTO/MostActiveCharacterDto';

@Injectable()
export class QuoteGeneratorService {
  constructor(private readonly dataService: QuoteGeneratorDataService) {}

  async getRandomQuote(): Promise<QuoteModel> {
    const quotes = await this.dataService.getQuotes();
    if (!quotes || quotes.length === 0) {
      return {} as QuoteModel;
    }

    return quotes[Math.floor(Math.random() * quotes.length)];
  }

  async getMostActiveCharacter(): Promise<MostActiveCharacterDto> {
    const groupedQuotes = groupBy(
      await this.dataService.getQuotes(),
      'character',
    );

    const charactersAndQuotes = Object.keys(groupedQuotes).map((character) => ({
      character,
      quotesCount: groupedQuotes[character].length,
    }));

    const sortedByQuotesCount = orderBy(
      charactersAndQuotes,
      'quotesCount',
      'desc',
    );

    return {
      name: sortedByQuotesCount[0].character,
      quotesCount: sortedByQuotesCount[0].quotesCount,
    };
  }
}
