import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiOperation, ApiProduces, ApiResponse } from '@nestjs/swagger';
import { Article } from './entities/article.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // /api/text
  @Get('text')
  @ApiOperation({ summary: 'Get example text (string)' })
  @ApiResponse({
    type: String, // Tells Angular that this method returns a string
  })
  @ApiProduces('text/plain') // Tells Angular to treat the response as plain text (Don't parse it as JSON)
  getExampleText(): string {
    return this.appService.getExampleString();
  }

  // /api/article
  @Get('article')
  @ApiOperation({ summary: 'Get example article (object)' })
  @ApiResponse({
    type: Article, // Tells Angular that this method returns an Article object
  })
  getExampleArticle(): Article {
    return this.appService.getExampleArticle();
  }
}
