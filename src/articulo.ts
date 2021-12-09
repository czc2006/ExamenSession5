import { BaseEntity, Entity, Column, ObjectIdColumn, ObjectID } from "typeorm";
/**
 * Entity
 */
@Entity()
export class articulo extends BaseEntity{
    //
    @ObjectIdColumn()
    _id: string;
    //
    @Column()
    NombreProducto: string;
    @Column()
    Descripcion: string;
    @Column()
    precio: number;
    @Column()
    LugarCompra: string;    
    @Column()
    FechaCreacion: string;
    //
}