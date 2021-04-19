import {fetchPosts, fetchCommentsOfPost, fetchReactionsOfComment} from "./api.js";
// import {fetchCommentsOfPost} from "./main.js";
// import {fetchReactionsOfComment} from "./main.js";
let comments = [];
let reactions = [];
function onLoad() {
    fetchPosts().then((response) => {
        console.log(response)
    })
    // wait(1000);

    fetchCommentsOfPost(comments).then((response) => {
        console.log(response)
    })
    // wait(2000);

    fetchReactionsOfComment(reactions).then((response) => {
        console.log(response)
    })
    // wait(3000);
}

onLoad();