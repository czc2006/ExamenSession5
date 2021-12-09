import { Logger } from "@nestjs/common";
import { EntityRepository, Repository } from "typeorm";
import { articulo } from "./Articulo";

@EntityRepository(articulo)

export class Articulo extends Repository<articulo>{
    private logger = new Logger('');

}