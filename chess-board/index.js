// const wrapperList=document.querySelector(".wrapper");

// let count = 0;
// let nextLine = true;

// for (let i = 1; i <= 64; i++) {
//   const el = document.createElement("div");
//   count++;


//   if ((i % 2 === 0 && nextLine) || (i % 2 !== 0 && !nextLine)) {
//     el.setAttribute("class", "box black");
//   } else {
//     el.setAttribute("class", "box");
//   }

//   wrapperList.append(el);
//   if (count === 8) {
//     nextLine = !nextLine;
//     count = 0;
//   }
// }

const board = document.querySelector(".board");

// column labels A–H
const cols = ["A","B","C","D","E","F","G","H"];
cols.forEach(c => {
  const d = document.createElement("div");
  d.className = "label";
  d.textContent = c;
  board.appendChild(d);
});

// rows 8–1
for (let row = 8; row >= 1; row--) {
  const label = document.createElement("div");
  label.className = "label";
  label.textContent = row;
  board.appendChild(label);

  for (let col = 0; col < 8; col++) {
    const box = document.createElement("div");
    box.className = "box";

    if ((row + col) % 2 === 0) {
      box.classList.add("black");
    }

    board.appendChild(box);
  }
}
