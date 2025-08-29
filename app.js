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


 let heart = document.querySelectorAll(".like_heart").forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("active");
  });
});




