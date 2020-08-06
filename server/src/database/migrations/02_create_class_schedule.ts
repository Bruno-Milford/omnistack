import Knex from 'knex';

export async function up(knex: Knex) { // quais alterações eu quero realizar no banco de dados
    return knex.schema.createTable('class_schedule', table => {
        table.increments('id').primary();
        table.integer('week_day').notNullable();
        table.integer('from').notNullable();
        table.integer('to').notNullable();

        table.integer('class_id').notNullable().references('id').inTable('classes').onUpdate('CASCADE').onDelete('CASCADE');
    });
}

export async function down(knex: Knex) { // se deu merda o q eu faço pra voltar
    return knex.schema.dropTable('class_schedule');
}
