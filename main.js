import {fetchPosts, fetchCommentsOfPost, fetchReactionsOfComment} from "./api.js";

let comments = [];
let reactions = [];
function onLoad() {
    fetchPosts().then((response) => {
        console.log(response)
    })
   
    fetchCommentsOfPost(comments).then((response) => {
        console.log(response)
    })
    
    fetchReactionsOfComment(reactions).then((response) => {
        console.log(response)
    })
    
}

onLoad();