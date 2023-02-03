import { Injectable } from '@nestjs/common';
import { QuoteModel, QuotesModel } from './data-models/QuoteModel';
import { promises as fs } from 'fs';

// this services is needed to have an abstraction above the source of data
// now we have JSON, later one it can be a real database

@Injectable()
export class QuoteGeneratorDataService {
  private quotes: QuotesModel;
  private dataRead = false;

  private async initializeData() {
    if (this.dataRead) {
      return;
    }

    this.dataRead = true;
    const jsonStr = await fs.readFile('./src/data/office_quotes.json', 'utf-8');
    console.log(`QuoteGeneratorDataService:initializeData#`, jsonStr);
    this.quotes = JSON.parse(jsonStr) as QuotesModel;
  }

  async getRandomQuote(): Promise<QuoteModel> {
    await this.initializeData();

    return this.quotes[Math.floor(Math.random() * this.quotes.length)];
  }
}
