import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Game{

    @PrimaryGeneratedColumn()
    id: number;

    @Column('int')
    preco: number;

    @Column({ length: 20 })
    subModelo: string;

    @Column({ length: 40 })
    cor: string;

    @Column({ length: 20 })
    capacidade: string;

    @Column({ length: 20 })
    tipoMemoria: string;

    @Column()
    isWiFi: boolean;

    @Column()
    isHDMI: boolean;

    @Column()
    isUSB: boolean;

    @Column({ length: 20 })
    standart: string;

    @Column("text")
    descricao: string;
}