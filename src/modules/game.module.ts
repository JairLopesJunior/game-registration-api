import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { gameProviders } from '../models/game.providers';
import { GameService } from 'src/services/GameService';

@Module({
    imports: [DatabaseModule],
    providers: [
        ...gameProviders,
        GameService,
    ],
})
export class GameModule {}