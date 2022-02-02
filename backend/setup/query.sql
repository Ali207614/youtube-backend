select * from users WHERE user_id = 1;


select user_id from videos WHERE video_id = 2;


	UPDATE videos SET
		video_poster = 'img1.png'
	WHERE  user_id = 3;

     select 
        v.* ,
        l.is_liked
    from videos v
    INNER JOIN likes l ON l.video_id = l.video_id
    WHERE v.video_id = 1 AND l.user_id = 1;


    select 
        COUNT(*)
    from likes 
    WHERE video_id = 2 AND is_liked = false;
    

    select 
        *
    from likes 
    WHERE video_id = 3 AND user_id = 1;


DELETE FROM videos
WHERE video_id = 19;



DELETE from likes
WHERE videoId =  AND userId = $2


select
     v.* ,
    u.user_username ,
    u.user_img
from videos v
INNER JOIN users u ON v.user_id = u.user_id;


select
    c.*,
    u.user_img,
    u.user_username
 from comments c
 INNER JOIN users u ON u.user_id = c.user_id
 WHERE c.video_id = 1;

 select 
    u.user_id,
    u.user_username,
    u.user_img
from followers f
INNER JOIN users u ON u.user_id = f.following_id
WHERE f.follower_id = 2; 



SELECT 
		user_id
FROM users 
WHERE user_username = 'Madaminov' AND 
user_password = crypt('1111', user_password)




select o.order_id , o.user_id ,f.food_name from orders o 
inner join food f on f.food_id = o.food_id;