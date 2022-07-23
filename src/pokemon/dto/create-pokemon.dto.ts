import { IsString, MinLength, IsNumber } from "class-validator";


export class CreatePokemonDto {
  @IsString()
  @MinLength(1)
  name: string;

  @IsNumber()
  no: number;
}
