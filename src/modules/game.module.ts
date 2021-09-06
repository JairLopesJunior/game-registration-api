import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { gameProviders } from '../models/game.providers';
import { GameService } from 'src/services/GameService';
import { GameController } from 'src/controllers/game.controller';

@Module({
    imports: [DatabaseModule],
    controllers: [GameController],
    providers: [
        ...gameProviders,
        GameService,
    ],
})
export class GameModule {}