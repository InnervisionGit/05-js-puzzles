function removeBtn() {
  const delBtn = document.getElementsByClassName('remove');
  for (let i = 0; i < delBtn.length; i++) {
    delBtn[i].addEventListener('click', (event) => {
      event.preventDefault();
      event.target.closest('div.image').remove();
    });
  }
}

document.body.innerHTML = `
<div class="image">
  <img src="https://goo.gl/kjzfbE" alt="First">
  <button class="remove">X</button>
</div>
<div class="image">
  <img src="https://goo.gl/d2JncW" alt="Second">
  <button class="remove">X</button>
</div>`;

removeBtn();

document.getElementsByClassName('remove')[0].click();
console.log(document.body.innerHTML);
