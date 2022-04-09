import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PokemonModule } from './pokemon/pokemon.module';
import { TypeOrmModule } from '@nestjs/typeorm'

@Module({
  imports: [ TypeOrmModule.forRoot(), PokemonModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
