import {MigrationInterface, QueryRunner} from "typeorm";

export class MallaPopulate1585841596683 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`
            INSERT INTO "mallas"(id, nombre, "carreraId") 
            VALUES(1,'MALLA ANTIGUA',1);

            INSERT INTO "mallas"(id, nombre, "carreraId") 
            VALUES(2,'MALLA ACTUAL',2);

            INSERT INTO "mallas"(id, nombre, "carreraId") 
            VALUES(3,'MALLA ANTIGUA',2);

            INSERT INTO "mallas"(id, nombre, "carreraId") 
            VALUES(4,'MALLA ACTUAL',3);

            INSERT INTO "mallas"(id, nombre, "carreraId") 
            VALUES(5,'MALLA ACTUAL',4);

            INSERT INTO "mallas"(id, nombre, "carreraId") 
            VALUES(6,'MALLA ACTUAL',5);

            INSERT INTO "mallas"(id, nombre, "carreraId") 
            VALUES(7,'MALLA ACTUAL',6);

            INSERT INTO "mallas"(id, nombre, "carreraId") 
            VALUES(8,'MALLA ACTUAL',7);

            INSERT INTO "mallas"(id, nombre, "carreraId") 
            VALUES(9,'MALLA ACTUAL',8);

            INSERT INTO "mallas"(id, nombre, "carreraId") 
            VALUES(10,'MALLA ACTUAL',9);

            INSERT INTO "mallas"(id, nombre, "carreraId") 
            VALUES(11,'MALLA ACTUAL',10);

            INSERT INTO "mallas"(id, nombre, "carreraId") 
            VALUES(12,'MALLA ANTIGUA',10);
            `);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`
            DELETE FROM "mallas" WHERE id IN(1,2,3,4,5,6,7,8,9,10,11,12);
        `);
    }

}
