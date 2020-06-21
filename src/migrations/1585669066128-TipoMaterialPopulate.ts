import {MigrationInterface, QueryRunner} from "typeorm";

export class TipoMaterialPopulate1585669066128 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`
        INSERT INTO "tipo_materiales"(nombre) VALUES
        ('MATERIALES CONVENCIONALES'),
        ('MATERIALES AUDIOVISUALES'),
        ('NUEVAS TECNOLOGÍAS')`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`
        DELETE FROM "tipo_materiales"
        WHERE nombre IN(
        'MATERIALES CONVENCIONALES',
        'MATERIALES AUDIOVISUALES',
        'NUEVAS TECNOLOGÍAS')`);
    }

}
// .\node_modules\.bin\typeorm migration:create -n TipoMaterialPopulate