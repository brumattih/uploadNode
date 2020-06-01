// Update with your config settings.

module.exports = {

    development: {
      client: 'pg',
      connection: {
        database: "show_do_milhao",
        user: "postgres",
        password: "123@"
      },
      migrations:{
        directory: `${__dirname}/src/database/migrations`
      },
      seeds:{
        directory: `${__dirname}/src/database/seeds`
      },
    },
    production:{
        client: 'pg',
      connection: process.env.DATABASE_URL,
      migrations:{
        directory: `${__dirname}/src/database/migrations`
      },
      seeds:{
        directory: `${__dirname}/src/database/seeds`
      },
    }
  };