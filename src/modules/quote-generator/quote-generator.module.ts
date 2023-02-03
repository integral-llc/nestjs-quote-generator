import { Module } from '@nestjs/common';
import { QuoteGeneratorService } from './quote-generator.service';
import { QuoteGeneratorController } from './quote-generator.controller';
import { QuoteGeneratorDataService } from './quote-generator-data.service';

@Module({
  providers: [QuoteGeneratorService, QuoteGeneratorDataService],
  controllers: [QuoteGeneratorController],
})
export class QuoteGeneratorModule {}
