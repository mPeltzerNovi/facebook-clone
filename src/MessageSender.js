import React, {useState} from 'react';
import "./MessageSender.css";
import {Avatar} from "@material-ui/core";

import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmotionIcon from "@material-ui/icons/InsertEmoticon";

//posten in firebase mogelijk maken
import db from "./firebase";
import firebase from "firebase";
import {useStateValue} from "./StateProvider";

function MessageSender() {
    const [{ user }, dispatch] = useStateValue();

    //States voor de FireBase
    const [input, setInput] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    const handleSubmit = e => {
        e.preventDefault();

        //code toevoegen voor posten
        db.collection('posts').add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic: user.photoURL, //hier zat de fout! Voor andere build als experiment waarsch veranderd.
            username: user.displayName, //idem het moet nu uit Google komen
            image: imageUrl,
            //deze info komt uit google account bij hem <--Hier staat het idd
            //profilePic: user.photoURL,
            //username: user.displayName,

            //Nu werkt het idd. De Timestamp doet het nu ook goed!

        })

        setInput("");
        setImageUrl("");


    };



    return (
        <div className='messageSender'>
            <div className="messageSender_top">
                <Avatar src={user.photoURL} />
                <form>
                    <input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className="messageSender_input"
                        placeholder={`What's on your mind, ${user.displayName}?`}
                    />
                    <input
                        value={imageUrl}
                        onChange={(e) => setImageUrl(e.target.value)}
                        placeholder="image URL (Optional)" />

                    <button onClick={handleSubmit} type="submit">
                        Hidden submit
                    </button>
                </form>
            </div>

            <div className="messageSender_bottom">
                <div className="messageSender_option">
                    <VideocamIcon style={{ color: "red"}} />
                    <h3>Live Video</h3>
                </div>

                <div className="messageSender_option">
                    <PhotoLibraryIcon style={{ color: "green"}} />
                    <h3>Photo/Video</h3>
                </div>

                <div className="messageSender_option">
                    <InsertEmotionIcon style={{ color: "orange"}} />
                    <h3>Feeling/Activity</h3>
                </div>


            </div>

        </div>

    )
}

export default MessageSender;
