import { Controller, Get } from '@nestjs/common';
import { QuoteGeneratorService } from './quote-generator.service';
import { QuoteModel } from './data-models/QuoteModel';
import { MostActiveCharacterDto } from './DTO/MostActiveCharacterDto';

@Controller('quote-generator')
export class QuoteGeneratorController {
  constructor(private readonly quoteGeneratorService: QuoteGeneratorService) {}

  @Get()
  get(): Promise<QuoteModel> {
    return this.quoteGeneratorService.getRandomQuote();
  }

  @Get('most-active-character')
  mostActiveCharacter(): Promise<MostActiveCharacterDto> {
    return this.quoteGeneratorService.getMostActiveCharacter();
  }
}
