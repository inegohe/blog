//array for storing our comment data
const commentData = [];
const comments = [];


function submitComment(status){
    regComment(status); 
    addComment();   
}

function regComment(status){
    const time = new Date();
    let date = `posted on: ${time.getDate()}/${time.getMonth()}/${time.getFullYear()} at ${time.getHours()}:${time.getMinutes()}`;
    if (status) {
        const initComment = document.getElementById("SubmitForm");
        comments.push({
            name:commentData[commentData.length-1].name,
            comment: SubmitForm.comment.value,
            date: date
        });
        clear(SubmitForm.comment);
    }else {
        const initComment = document.getElementById("initSubmitForm");
        document.getElementById("init-comment").style.display = "none";
        document.getElementById("SubmitForm").style.display = "block";
        commentData.push({
            name: initSubmitForm.fname.value,
            email: initSubmitForm.email.value,
        });
        comments.push({
            name: initSubmitForm.fname.value,
            comment: initSubmitForm.comment.value,
            date: date
        })
    }
    console.log(comments);
}

function loadComments(){
    document.getElementById("comments").innerHTML = '';
    for( i = 0 ; i < comments.length; i++){
        page.innerHTML += `<div class="row"><div class="col-1 mt-2" id="comment-avatar"><i class="fas fa-user" style="font-size: 2rem;"></i></div><div class="col" id="comment-body"><h4>${comments[i].name}</h4><p>${comments[i].comment}</p><small>${comments[i].date}</small></div></div>`;
    }
}

function addComment(){
    document.getElementById("comments").innerHTML += `<div class="row"><div class="col-1 mt-2" id="comment-avatar"><i class="fas fa-user" style="font-size: 2rem;"></i></div><div class="col" id="comment-body"><h4>${comments[comments.length-1].name}</h4><p>${comments[comments.length-1].comment}</p><small>${comments[comments.length-1].date}</small></div></div>`
}

function clear(object){
    object.value = '';
}