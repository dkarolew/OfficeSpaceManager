import React, { useState } from "react";
import { CommentSection } from 'react-comments-section';
import 'react-comments-section/dist/index.css'


const CommentsSection = () => {

    const data =
        [
            {
                "userId": "01a",
                "comId": "012",
                "fullName": "Anna Niver",
                "avatarUrl": "https://ui-avatars.com/api/name=Anna&background=random",
                "text": "Is it possible for me to withdraw my reservation of this place?",
                "replies": [
                    {
                        "userId": "02a",
                        "comId": "013",
                        "fullName": "Adam Derlock",
                        "avatarUrl": "https://ui-avatars.com/api/name=Adam&background=random",
                        "text": "Sure."
                    }
                ]
            },
            {
                "userId": "02b",
                "comId": "017",
                "fullName": "Tom Wagner",
                "text": "This place has nice views!",
                "avatarUrl": "https://ui-avatars.com/api/name=Lily&background=random"
            },
        ]

    const [comment, setComment] = useState(data)
    const userId = "01a"
    const avatarUrl = "https://ui-avatars.com/api/name=Adam&background=random"
    const name = "xyz"
    let count = 0
    comment.forEach(i => {count+=1; i.replies && i.replies.map(() => count+=1)} )

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