import React from 'react';
import "./Feed.css";
import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender";
import Post from "./Post";

function Feed() {
    return (
        <div className='feed'>
            <StoryReel />
            <MessageSender />

            <Post
                profilePic="https://cdna.lystit.com/photos/2012/05/05/hm-brown-bikini-bottoms-product-1-3419414-995708017.jpeg"
                message="Het moet een beetje leuk blijven hoor!"
                timestamp="This is a timestamp"
                username="Emma van M"
                image="https://oya.com/wp-content/uploads/2018/08/32-melges.jpg"
            />
            <Post
                profilePic="https://cdna.lystit.com/photos/2012/08/28/hm-blue-bikini-bottoms-product-3-4595293-229457281.jpeg"
                message="Het moet een beetje leuk blijven hoor!"
                timestamp="Mooi dit"
                username="Marjolein S"
                image="https://www.chalet-pillerseetal.com/images/ski/skifahren-pillerseetal2.jpg"
            />

            <Post />

        </div>
    )
}

export default Feed;