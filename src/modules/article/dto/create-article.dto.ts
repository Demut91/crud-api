import { IsString, IsDateString, IsNotEmpty, Length, IsOptional } from 'class-validator';

export class CreateArticleDto {
  @IsString()
  @IsNotEmpty()
  @Length(5, 50)
  title: string;

  @IsString()
  @IsNotEmpty()
  @Length(20, 1500)
  description: string;
}
