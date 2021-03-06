// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './database/project.sqlite3',
    },
    useNullAsDefault: true,
    migrations: {
      tableName: 'dbmigrations',
    },
    seeds: {
      directory: './database/seeds',
    },
  },

  production: {
    client: 'mysql',
    connection: {
      database: 'projectdb',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'dbmigrations'
    },
    seeds: {
      directory: './database/seeds',
    },
  },
};
