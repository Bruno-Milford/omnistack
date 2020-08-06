import Knex from 'knex';

export async function up(knex: Knex) { // quais alterações eu quero realizar no banco de dados
    return knex.schema.createTable('users', table => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('avatar').notNullable();
        table.string('whatsapp').notNullable();
        table.string('bio').notNullable();
    });
}

export async function down(knex: Knex) { // se deu merda o q eu faço pra voltar
    return knex.schema.dropTable('users');
}
