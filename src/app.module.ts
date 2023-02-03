import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuoteGeneratorModule } from './modules/quote-generator/quote-generator.module';

@Module({
  imports: [QuoteGeneratorModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
