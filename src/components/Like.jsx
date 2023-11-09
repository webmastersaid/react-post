import React from "react";

export default function Like(props) {
    let [likes, setLike] = useState(0);

    function like() {
        setLike(likes + 1)
    }
    function dislike() {
        if (likes > 0)
            setLike(likes - 1)
    }

    return (
        <div>
            <button onClick={like}>Like</button>
            <button onClick={dislike}>Dislike</button>
        </div>
    )
}