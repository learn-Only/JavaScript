let buyer = (message) => {
  console.log("pesan martabak dong?", message);
};

let seller = (callback) => {
  setTimeout(() => {
    callback("martabak sudah jadi");
  }, 3000);
};

console.log("tunggu sejenak.......");
seller(buyer);

let promise = new Promise((resolve, reject) => {
  console.log("semoga bisa dapat hadiah");
  setTimeout(() => resolve("selamat anda mendapatkan hadiah."), 3000);
});

// reject belum dibuat

promise.then((value) => {
  console.log(value);
});
console.log(promise);

async () => {
  let value = await promise;
};

// part 1 : 1 dan 3
// part 2 : 2 dan 4
// part 3 : 1
