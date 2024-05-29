import { Injectable } from '@nestjs/common';
import { Article } from './entities/article.entity';

@Injectable()
export class AppService {
  getExampleString(): string {
    return `Hello World! (${new Date()})`;
  }

  getExampleArticle(): Article {
    const randomNumber = Math.floor(Math.random() * 1000);
    return {
      id: randomNumber,
      title: `Example article ${randomNumber}`,
      updatedAt: new Date(),
    };
  }
}
