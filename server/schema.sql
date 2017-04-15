CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
  id integer AUTO_INCREMENT,
  primary key (id),
  username text
);

CREATE TABLE messages (
  id integer AUTO_INCREMENT,
  primary key (id),
  text text,
  userId integer,
  roomname text,
  foreign key fk_uid(userId) references users(id)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/
