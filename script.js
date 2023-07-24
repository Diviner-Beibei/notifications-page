const messagesList = document.querySelector(".messages-list");
const countText = document.querySelector(".unread-count");
const markAllReadBtn = document.querySelector(".mark-all-read-btn");

let count = 3;

messagesList.addEventListener('click', function (e) {
  const node = e.target.closest(".message");
  node.classList.remove("unread");

  const dot = node.querySelector(".dot");
  if (dot) {
    dot.remove();
    --count;
    countText.textContent = count;
  }
});

markAllReadBtn.addEventListener('click', function (e) {
  const nodes = messagesList.querySelectorAll(".message");
  nodes.forEach(e => {
    e.classList.remove("unread");
    e.querySelector(".dot")?.remove()
  });
  countText.textContent = 0;
});