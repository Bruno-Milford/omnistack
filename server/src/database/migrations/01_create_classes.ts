import Knex from 'knex';

export async function up(knex: Knex) { // quais alterações eu quero realizar no banco de dados
    return knex.schema.createTable('classes', table => {
        table.increments('id').primary();
        table.string('subject').notNullable();
        table.string('cost').notNullable();

        table.integer('user_id').notNullable().references('id').inTable('users').onUpdate('CASCADE').onDelete('CASCADE');
    });
}

export async function down(knex: Knex) { // se deu merda o q eu faço pra voltar
    return knex.schema.dropTable('classes');
}
