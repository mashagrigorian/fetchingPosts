const postData = './postData.json';

//fetchPosts
export async function fetchPosts() {
    const response =  await fetch(postData);
    const datas = await response.json()
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(
            datas.map((value) => {
                return {id: value.id, title: value.title, content: value.content}
            })
        ), 1000);
    })
}

wait(1000);

//fetchCommentsOfPost
let comments = [];

export async function fetchCommentsOfPost(id) {
    const response =  await fetch(postData);
    id = await response.json();
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(
            id.map((value) => {
                return value.comments.reduce((aggr, val) => {
                    return {author: aggr.author = val.author, content: aggr.content = val.content}
                })
            })
        ), 2000)
    })
}


wait(2000);

//fetchReactionsOfComment
let reactions = [];

export async function fetchReactionsOfComment(id) {
    const response =  await fetch(postData);
    id = await response.json();
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(
            id.map((value) => {
                return value.comments.reduce((aggr, val) => {
                    return {reactions: aggr.reactions}
                })
            })
        ), 3000)
    })
}

wait(3000);

async function wait(miliseconds) {
    return new Promise(
        resolve => setTimeout(() => resolve, miliseconds)
    )
}

