import {MigrationInterface, QueryRunner} from "typeorm";

export class CarreraPopulate1585841536754 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`
        INSERT INTO "carreras"(id,nombre , "institutoId")
        VALUES(1,'MARKETING', 1);
        
        INSERT INTO "carreras"(id,nombre, "institutoId")
        VALUES(2,'DESARROLLO DE SOFTWARE',2);
        
        INSERT INTO "carreras"(id,nombre, "institutoId")
        VALUES(3,'ANÁLISIS DE SISTEMAS',3);
        
        INSERT INTO "carreras"(id,nombre, "institutoId")
        VALUES(4,'ARTE CULINARIO',3);
        
        INSERT INTO "carreras"(id,nombre, "institutoId")
        VALUES(5,'ELECTRICIDAD',3);
        
        INSERT INTO "carreras"(id,nombre, "institutoId")
        VALUES(6,'ELECTRÓNICA',3);
        
        INSERT INTO "carreras"(id,nombre, "institutoId")
        VALUES (7,'GUIANZA TURÍSTICA',3);
        
        INSERT INTO "carreras"(id,nombre, "institutoId")
        VALUES(8,'GUÍA NACIONAL',3);
        
        INSERT INTO "carreras"(id,nombre, "institutoId")
        VALUES(9,'MARKETING',3);
        
        INSERT INTO "carreras"(id,nombre , "institutoId")
        VALUES(10,'DISEÑO DE MODAS', 4);
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`
            DELETE FROM "carreras" 
            WHERE id IN(1);

            DELETE FROM "carreras" 
            WHERE id IN(2);

            DELETE FROM "carreras" 
            WHERE id IN(3);

            DELETE FROM "carreras" 
            WHERE id IN(4);

            DELETE FROM "carreras" 
            WHERE id IN(5);

            DELETE FROM "carreras" 
            WHERE id IN(6);

            DELETE FROM "carreras" 
            WHERE id IN(7);

            DELETE FROM "carreras" 
            WHERE id IN(8);

            DELETE FROM "carreras" 
            WHERE id IN(9);

            DELETE FROM "carreras" 
            WHERE id IN(10); `);
    }

}
