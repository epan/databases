CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
  id integer,
  primary key (id),
  username text
);

CREATE TABLE rooms (
  id integer,
  primary key (id),
  roomname text
);

CREATE TABLE messages (
  id integer,
  primary key (id),
  text text,
  userId integer,
  roomId integer,
  foreign key fk_uid(userId) references users(id),
  foreign key fk_rid(roomId) references rooms(id)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/
