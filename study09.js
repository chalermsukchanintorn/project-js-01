// control statement (loop/iteration/repetition) Ep.2
// คือ การทำงานเดิมๆ ซ้ำ
//------------------------------
// 1. while พิสูจน์ก่อน เป็นจริงทำ
let aa = 1
while (aa <= 5) {
    console.log('Hello...')
    aa++; //++a หรือ a = a + 1 หรือ a += 1   
}

// 2. do-while ทำก่อนแล้วพิสูจน์ เป็นจริงกลับไปทำ
let bb = 10
do {
    console.log('Hi...')
    bb--
} while (bb > 5)

// 3. for
for(let cc = 1 ; cc <= 5 ; cc++){
    console.log('Hey...')
}