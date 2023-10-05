const addForm = document.querySelector('.add');
const list = document.querySelector('.memos');
const alertmsg = document.getElementById('alertmsg');
const search = document.querySelector('.search input');



const saveMemo = memoText => {
    const html = `<li
          class="list-group-item d-flex justify-content-between align-items-center"
        >
          <span>${memoText}</span>
          <i class="far fa-trash-alt delete"></i>
        </li>`

    list.innerHTML += html;
}

// function saveMemo(memoText) {

// }


list.addEventListener('click', e => {
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }
});

addForm.addEventListener('submit', e => {
    e.preventDefault();
    const memo = addForm.add.value;
    console.log(memo);
    if (memo.length) {
        //문자가 존재한다면
        saveMemo(memo);
        alertmsg.classList.add('hidden');
        // memo = "";
        // memo === "";
        // addForm.add.value = '';

    }

    else {
        alertmsg.classList.remove('hidden');
    }
})

const filterMemo = memo => {
    // console.log()
    // console.log(Array.from(list.children))
    // 아침

    Array.from(list.children)
        .filter((memotext) => !memotext.textContent.includes(memo))
        //     // 검색창에 입력된 내용들을 인지하기 시작할 겁니다.
        .forEach((memotext) => memotext.classList.add('filtered'));


    Array.from(list.children)
        .filter((memotext) => memotext.textContent.includes(memo))
        .forEach((memotext) => memotext.classList.remove('filtered'))
}

search.addEventListener('keyup', e => {
    const searchText = search.value;
    // console.log(searchText);
    filterMemo(searchText);
});