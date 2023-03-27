import React from 'react';
import './post.css'

const Post = ({
    author, date, content,
    image, comments, commentIcon,
    repost, repostIcon,
    likes, likeIcon, saveIcon
}) => {
    return (
        <div className='post'>
            <div className='post-wrapper'>
                <div className='post-header'>
                    <img className='post-photo' src={author.photo} alt='photo' />
                    <h4 className='post-name'>{author.name}</h4>
                    <img src={author.checMarkIcon} alt='valid-marker' />
                    <span className='post-nickname'>{author.nickname} {date}</span>

                </div>
                <div className='post-body'>
                    <h2 className='post-content'>{content}</h2>
                    <div className='post-img'><img src={image} alt='body-img' /></div>
                    <div className='body-social-container'>
                        <div className='icon-box'>
                            <span><img src={commentIcon} alt='like-icon' /></span>
                            <span>{comments}</span>
                        </div>
                        <div className='icon-box'>
                            <span><img src={repostIcon} alt='repost-icon' /></span>
                            <span>{repost}</span>
                        </div>
                        <div className='icon-box'>
                            <span><img src={likeIcon} alt='like-icon' /></span>
                            <span>{likes}</span>
                        </div>
                        <div className='icon-box'>
                            <span><img src={saveIcon} alt='save-icon' /></span>
                        </div>
                    </div>
                </div>
            </div>

            <div className='post-wrapper'>
                <div className='post-header'>
                    <img className='post-photo' src={author.photo} alt='photo' />
                    <h4 className='post-name'>{author.name}</h4>
                    <img src={author.checMarkIcon} alt='valid-marker' />
                    <span className='post-nickname'>{author.nickname} {date}</span>

                </div>
                <div className='post-body'>
                    <h2 className='post-content'>{content}</h2>
                    <div className='post-img'><img src={image} alt='body-img' /></div>
                    <div className='body-social-container'>
                        <div className='icon-box'>
                            <span><img src={commentIcon} alt='like-icon' /></span>
                            <span>{comments}</span>
                        </div>
                        <div className='icon-box'>
                            <span><img src={repostIcon} alt='repost-icon' /></span>
                            <span>{repost}</span>
                        </div>
                        <div className='icon-box'>
                            <span><img src={likeIcon} alt='like-icon' /></span>
                            <span>{likes}</span>
                        </div>
                        <div className='icon-box'>
                            <span><img src={saveIcon} alt='save-icon' /></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Post;