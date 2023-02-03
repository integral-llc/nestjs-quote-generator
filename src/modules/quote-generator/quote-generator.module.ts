import { Module } from '@nestjs/common';
import { QuoteGeneratorService } from './quote-generator.service';
import { QuoteGeneratorController } from './quote-generator.controller';

@Module({
  providers: [QuoteGeneratorService],
  controllers: [QuoteGeneratorController],
})
export class QuoteGeneratorModule {}
