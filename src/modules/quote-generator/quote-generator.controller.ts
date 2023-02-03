import { Controller, Get } from '@nestjs/common';
import { QuoteGeneratorService } from './quote-generator.service';

@Controller('quote-generator')
export class QuoteGeneratorController {
  constructor(private readonly quoteGeneratorService: QuoteGeneratorService) {}

  @Get()
  get() {
    return this.quoteGeneratorService.getRandomQuote();
  }
}
