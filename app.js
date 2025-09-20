// thumb icon

// const btn = document.getElementById('likeBtn');
// const count = document.getElementById("count");
// let num = 0;
// btn.addEventListener("click", () => {
// btn.classList.add("active");
//   count.textContent = ++num;
// });

document.querySelectorAll(".like-btn").forEach((btn) => {
  let num = 0;
  const count = btn.querySelector(".num");

  btn.addEventListener("click", () => {
    btn.classList.toggle("active");
    if (btn.classList.contains("active")) {
      count.textContent = ++num;
    } else {
      count.textContent = --num
    }
  });
});



// const disLikeBtn = document.getElementById('dislikeBtn');
// const count1 = document.getElementById("count1");
// let num1 = 0;
// disLikeBtn.addEventListener("click", () => {
// disLikeBtn.classList.add("active");
//   count1.textContent = ++num1;
// });

// heart_icon

// const likeHeart = document.getElementById('likeHeart');


// likeHeart.addEventListener("click", () => {
// likeHeart.classList.add("active");  
// });

document.querySelectorAll(".dislike-btn").forEach((btn) => {
  let num = 0;
  const count = btn.querySelector(".num");

  btn.addEventListener("click", () => {
    btn.classList.toggle("active");
    if (btn.classList.contains("active")) {
      count.textContent = ++num;
    } else {
      count.textContent = --num;
    }
  });
});

///////////////////// heart ////////////////////////

 let heart = document.querySelectorAll(".like_heart").forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("active");
  });
});

 let heart1 = document.querySelectorAll(".like_heart1").forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("active");
  });
});


///////////////////// read More/////////////
let readMore = document.getElementById('readMore');
let extraContent = document.getElementById('extraContent');

readMore.onclick = (event) => {
  event.preventDefault();
  if(extraContent.style.display === 'none'){
    extraContent.style.display = 'block';
    readMore.innerHTML = `<strong>Read Less </strong>`;
  }

  else {
    extraContent.style.display = 'none';
    readMore.innerHTML = '<strong>Read More for Recipe</strong>';
  }
}

/////////////////////////////  onFocus ////////////////////////////////

let textArea = document.getElementById('comments');
textArea.addEventListener('focus', () => {
  textArea.style.border = '1px solid #a1d6b2'
})

let textArea1 = document.getElementById('comments');
textArea1.addEventListener('blur', () => {
  textArea1.style.border = '1px solid #000000'
})

/////////////////////////////  generate text ////////////////////////

function form(event) {
event.preventDefault();

  let textComment = document.getElementById('comments').value;
  let result = document.getElementById('result');

     result.innerHTML = `
     <img  class=imgJava src=./idJava.png>
        <span class=guest>Guest</span>
        <p class= para>a few seconds ago</p>
        <p class=javaText>${textComment}</p>
        
      `;
    };


/////////////////////////  mouseOver Toy blog ///////////////////////////

function swapPic(eId , newPic) {
  document.getElementById(eId).src = newPic
}






