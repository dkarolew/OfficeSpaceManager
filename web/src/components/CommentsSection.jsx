import React, { useState } from "react";
import { CommentSection } from 'react-comments-section';
import 'react-comments-section/dist/index.css'


const CommentsSection = () => {

    const data =
        [
            {
                "userId": "01a",
                "comId": "012",
                "fullName": "Riya Negi",
                "avatarUrl": "https://ui-avatars.com/api/name=Riya&background=random",
                "text": "Hey, Loved your blog! ",
                "replies": [
                    {
                        "userId": "02a",
                        "comId": "013",

                        "fullName": "Adam Scott",
                        "avatarUrl": "https://ui-avatars.com/api/name=Adam&background=random",
                        "text": "Thanks! It took me 1 month to finish this project but I am glad it helped out someone!🥰"
                    },
                    {
                        "userId": "01a",
                        "comId": "014",

                        "fullName": "Riya Negi",
                        "avatarUrl": "https://ui-avatars.com/api/name=Riya&background=random",
                        "text": "thanks!😊"
                    }
                ]
            },
            {
                "userId": "02b",
                "comId": "017",
                "fullName": "Lily",
                "text": "I have a doubt about the 4th point🤔",
                "avatarUrl": "https://ui-avatars.com/api/name=Lily&background=random"
            },
            {
                "userId": "01c",
                "comId": "018",
                "fullName": "Derek",
                "text": "Great explanation!!!",
                "avatarUrl": "https://ui-avatars.com/api/name=Derek&background=random"
            }
        ]

    const [comment, setComment] = useState(data)
    const userId = "01a"
    const avatarUrl = "https://ui-avatars.com/api/name=Riya&background=random"
    const name = "xyz"
    let count = 0
    comment.forEach(i => {count+=1; i.replies && i.replies.map(i=> count+=1)} )

    return (
        <>
            <h3 style={{margin: '30px', paddingTop: '50px'}}>Reservation comments</h3>
            <div className="commentSection">
                <div style={{margin: '30px', paddingTop: '10px', width: '60%'}}>
                    <CommentSection
                        currentUser={userId && { userId: userId, avatarUrl: avatarUrl, name: name }}
                        commentsArray={comment}
                        setComment={setComment}
                    />
                </div>
            </div>
        </>
    )
}

export default CommentsSection