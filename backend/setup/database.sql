CREATE DATABASE youtube_db;
\c youtube_db
CREATE EXTENSION pgcrypto;

CREATE TABLE users (
	user_id serial primary key,
	user_username varchar(32) not null,
	user_password varchar(256) not null,
	user_email varchar(256) not null,
	user_contact varchar(12) not null,
	user_age smallint not null,
	user_img varchar(256) default 'user.png'
);



CREATE TABLE videos (
	video_id serial primary key,
	video_title varchar(256) not null,
	video_link varchar (256) not null,
	video_poster varchar(256),
	user_id int not null references users(user_id),
	video_deleted_at timestamptz default null,
	video_created_at timestamptz default current_timestamp
);


CREATE TABLE likes (
	like_id serial primary key,
	is_liked boolean default null,
	user_id int not null references users(user_id), 
	video_id int not null references videos(video_id) 
);


CREATE TABLE followers (
	subscriber_id serial primary key,
	following_id int not null references users(user_id),
	follower_id int not null references users(user_id)
);



CREATE TABLE comments (
	comment_id serial primary key,
	comment_text text not null,
	user_id int not null references users(user_id), 
	video_id int not null references videos(video_id),
	comment_created_at timestamptz default current_timestamp
);