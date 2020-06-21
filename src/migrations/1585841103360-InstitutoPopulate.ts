import {MigrationInterface, QueryRunner} from "typeorm";

export class InstitutoPopulate1585841103360 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`
            INSERT INTO "institutos"(id,nombre)
            VALUES(1,'INSTITUTO SUPERIOR TECNOLÓGICO 24 DE MAYO');

            INSERT INTO "institutos"(id,nombre)
            VALUES(2,'INSTITUTO SUPERIOR TECNOLÓGICO BENITO JUÁREZ');

            INSERT INTO "institutos"(id,nombre)
            VALUES(3 ,'INSTITUTO SUPERIOR TECNOLÓGICO DE TURISMO Y PATRIMONIO YAVIRAC');

            INSERT INTO "institutos"(id,nombre)
            VALUES(4,'INSTITUTO SUPERIOR TECNOLÓGICO GRAN COLOMBIA');
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`
            DELETE FROM "institutos" 
            WHERE id IN(1);

            DELETE FROM "institutos" 
            WHERE id IN(2);

            DELETE FROM "institutos" 
            WHERE id IN(3);

            DELETE FROM "institutos" 
            WHERE id IN(4);`);
    }

}
