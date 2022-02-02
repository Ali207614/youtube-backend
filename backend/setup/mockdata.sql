INSERT INTO users ( 
	user_username, 
	user_password, 
	user_email, 
	user_contact, 
	user_age
) VALUES 
('Madaminov' , crypt('1111', gen_salt('bf')) ,'aliMadaminov@gmail.com','998971023656' , 18),
('Husan' , crypt('1111', gen_salt('bf')) ,'hacker@gmail.com','998971023656' , 19),
('Abdumalik' , crypt('1111', gen_salt('bf')) ,'abuzada@gmail.com','998971023656' , 18),
('Ali' , crypt('1111', gen_salt('bf')) ,'Ali@gmail.com','998971023656' , 18),
('Umidbek' , crypt('1111', gen_salt('bf')) ,'titan@gmail.com','998971023656' , 21);




INSERT INTO videos ( 
	video_title,
	video_link,
	video_poster,
	user_id
) VALUES 
('Quyon and Ayiq' , 'video0.mp4' ,'img0.png','2'),
('INTO UNCERTAINTY - JAY MAN ' , 'video1.mp4' ,'img1.png','3'),
('Bagasbas Beach' , 'video2.mp4' ,'img2.png','1'),
('Countdown ' , 'video3.mp4' ,'img3.png','1'),
('Physics Explaind ' , 'video4.mp4' ,'img4.png','1'),
('daysoft linza ' , 'video5.mp4' ,'img5.png','3'),
('Music' , 'video6.mp4' ,'img6.png','3'),
('explosion of the lamp' , 'video7.mp4' ,'img7.png','5'),
('mp4 music best ' , 'video8.mp4' ,'img8.png','2'),
('traktor' , 'video9.mp4' ,'img9.png','5'),
('Loading 100% ' , 'video10.mp4' ,'img10.png','3'),
('Minons' , 'video11.mp4' ,'img11.png','3'),
('Ne korona bro' , 'video12.mp4' ,'img12.png','4'),
('you have to drive the car carefully, your loved ones are waiting for you at home' , 'video13.mp4' ,'img13.png','5'),
('When I was alone on the track' , 'video14.mp4' ,'img14.png','2'),
('Tom and Jerry scene' , 'video15.mp4' ,'img15.png','4');


INSERT INTO likes ( 
	is_liked, 
	user_id, 
	video_id
) VALUES 
(true , 1 , 1),
(true , 3 , 1),
(false , 2 , 2),
(true , 1 , 3);

INSERT INTO followers ( 
	following_id,
	follower_id
) VALUES 
(1,2),
(2,1);



INSERT INTO comments  ( 
	comment_text,
	user_id,
	video_id
) VALUES 
('good' ,4 , 1),
('gap yoo zor ciqibdi' ,4 , 12);