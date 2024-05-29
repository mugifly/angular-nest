import { ApiProperty } from '@nestjs/swagger';

export class Article {
  @ApiProperty({
    example: 1,
    description: 'The ID of the article',
  })
  id: number;

  @ApiProperty({
    example: 'Example article 1',
    description: 'The title of the article',
  })
  title: string;

  @ApiProperty({
    description: 'The updated date of the article',
  })
  updatedAt: Date;
}
