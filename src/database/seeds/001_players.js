
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('players').del()
    .then(function () {
      // Inserts seed entries
      return knex('players').insert([
        {nickname: 'Gabriel Silva', email:'gabriel@teste.com', password:123,score:50000, maxscore:100000},
        {nickname: 'Diego', email:'diego@teste.com', password:123456},
        {nickname: 'Emidio', email:'emidio@teste.com', password:1234},
        {nickname: 'Flavio', email:'flavio@teste.com', password:1234},
        {nickname: 'Sergio', email:'sergio@teste.com', password:1234},
        {nickname: 'Davi', email:'davi@teste.com', password:1234},
        {nickname: 'Rafa', email:'rafa@teste.com', password:1234},
        {nickname: 'Ivan', email:'ivan@teste.com', password:1234},
        {nickname: 'Lulu', email:'lulu@teste.com', password:1234},
        {nickname: 'Morgana', email:'morgana@teste.com', password:1234},
        {nickname: 'Katarina', email:'katarina@teste.com', password:1234},
        {nickname: 'Camille', email:'camille@teste.com', password:1234},    
      ]);
    });
};
