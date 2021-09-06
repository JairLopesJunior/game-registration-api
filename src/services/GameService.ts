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

    async create( game: Game ) {
        const gameCreated = await this.gameRepository.save(game);
        return gameCreated;
    }

    async delete( id: number ) {
        const gameDeleted = await this.gameRepository.delete( {id} );
        return gameDeleted.affected === 1 ? true : false ;
    }

    async findById( id: number ) {
        return this.gameRepository.findOne(id);
    }
}

