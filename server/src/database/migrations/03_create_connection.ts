import Knex from 'knex';

export async function up(knex: Knex) { // quais alterações eu quero realizar no banco de dados
    return knex.schema.createTable('connections', table => {
        table.increments('id').primary();

        table.integer('user_id').notNullable().references('id').inTable('users').onUpdate('CASCADE').onDelete('CASCADE');

        table.timestamp('created_at').defaultTo(knex.raw('CURRENT_TIMESTAMP')).notNullable();
    });
}

export async function down(knex: Knex) { // se deu merda o q eu faço pra voltar
    return knex.schema.dropTable('connections');
}
