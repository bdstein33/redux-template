import fs from 'fs';
import path from 'path';
import Sequelize from 'sequelize';
import promisify from 'es6-promisify';
import _ from 'lodash';

const sequelize = new Sequelize(
  process.env.MYSQL_DB,
  process.env.MYSQL_USERNAME,
  process.env.MYSQL_PASSWORD,
  {
    host: process.env.MYSQL_HOST,
    dialect: 'mysql'
  }
);

const db = {};

const importModel = (fileName) => {
  const model = sequelize.import(path.join(__dirname, 'models', fileName));
  db[model.name] = model;
};

const associateModel = (model, modelName) => {
  if ('associate' in db[modelName]) {
    return db[modelName].associate(db);
  }
};

const combineModels = promisify(fs.readdir);

combineModels(path.join(__dirname, 'models'))
  .then(files => {
    _.forEach(files, importModel);
    _.forEach(db, associateModel);
    return db;
  });

db.sequelize = sequelize;
// db.Sequelize = Sequelize;
export default db;
