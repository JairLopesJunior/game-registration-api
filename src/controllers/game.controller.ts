import { Controller, Get, HttpStatus, Post, Body, Param, Delete } from '@nestjs/common';
import { Game } from '../models/game.entity';
import { GameService } from 'src/services/GameService';

@Controller('api')
export class GameController{
    
    constructor(private readonly gameService: GameService) {}

    @Get('games')
    async listar(): Promise<Game[]>{
        return this.gameService.findAll();
    }

    @Post()
    async add( @Body() game: Game) {
        const gameCreated = await this.gameService.create(game);
        return {
            statusCode: HttpStatus.OK,
            message: 'Game criado com sucesso!',
            gameCreated
        };
    }

    @Delete(':id')
    async remove( @Param('id') id: number ) {
        const gameDeleted = await this.gameService.delete(id);
        
        if(!gameDeleted){
            return {
                statusCode: HttpStatus.NOT_FOUND,
                message: 'Game não encontrado',
            };
        } 

        return {
            statusCode: HttpStatus.OK,
            message: 'Game deletado com sucesso',
        };
    }



}