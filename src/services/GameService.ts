import { Injectable, Inject } from "@nestjs/common";
import { Repository } from 'typeorm';
import { Game } from '../models/game.entity';

@Injectable()
export class GameService{
    constructor(
        @Inject('GAME_REPOSITORY')
        private gameRepository: Repository<Game>,
    ) {}

    async findAll(): Promise<Game[]> {
        return this.gameRepository.find();
    }
}

