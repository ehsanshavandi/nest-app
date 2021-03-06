import { Entity, Column, PrimaryGeneratedColumn} from 'typeorm'

@Entity('pokemon')
export class PokemonEntity {
    @PrimaryGeneratedColumn('uuid') id: string

    @Column('varchar', { length: 500, unique: true})
    msg: string
}