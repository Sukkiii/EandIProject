let l0 = 'l0';

// function fn2() {
//     let l2 = 'l2';
//     console.log(l0, l1, l2);
// }

function fn1() {
    function fn2() {
        let l2 = 'l2';
        console.log(l0, l1, l2);
    }
    let l1 = 'l1';
    console.log(l0, l1);
    fn2();
}

fn1();

