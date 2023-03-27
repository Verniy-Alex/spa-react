import React from 'react';
import styles from '../posts/posts.module.css'
import Post from '../../components/post-component/Post';


const ANAKIN_IMAGE = "https://i.pinimg.com/originals/6a/34/cb/6a34cb853cb1b91ec9888b9fd4b66a85.jpg";
const RAY_IMAGE = "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale";
const CHECKMARK_ICON = "https://www.iconpacks.net/icons/2/free-check-mark-icon-3281-thumb.png"
const COMMENT_ICON = "https://cdn0.iconfinder.com/data/icons/free-daily-icon-set/512/Comments-512.png"
const REPOST_ICON = "https://cdn-icons-png.flaticon.com/512/2459/2459660.png"
const LIKE_ICON = "https://cdn-icons-png.flaticon.com/512/20/20119.png"
const SAVE_ICON = "https://pixlok.com/wp-content/uploads/2021/12/Save-Icon-093bnc3.png"


const postData = {
    author: {
        name: "Anakin skywalker",
        photo: ANAKIN_IMAGE,
        nickname: "@dart_vader",
        checMarkIcon: CHECKMARK_ICON
    },
    content: "WTF? Who is Ray? Why she is Skywalker? Luke...?",
    image: RAY_IMAGE,
    date: "26 февр.",
    repost: 146,
    repostIcon: REPOST_ICON,
    likes: 887,
    likeIcon: LIKE_ICON,
    comments: 482,
    commentIcon: COMMENT_ICON,
    saveIcon: SAVE_ICON
}
const PostsPage = () => {
    return (
        <div className={styles['container']}>

            <Post author={postData.author}
                comments={postData.comments}
                nickname={postData.nickname}
                photo={postData.photo}
                date={postData.date}
                content={postData.content}
                image={postData.image}
                commentIcon={postData.commentIcon}
                repost={postData.repost}
                repostIcon={postData.repostIcon}
                likes={postData.likes}
                likeIcon={postData.likeIcon}
                saveIcon={postData.saveIcon}
                checMarkIcon={postData.checMarkIcon}
            />
        </div>
    );
};

export default PostsPage;