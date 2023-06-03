// 存数据
function saveData(name, data) { localStorage.setItem(name, JSON.stringify({ 'time': Date.now(), 'data': data })) };
// 取数据
function loadData(name, time) {
    let d = JSON.parse(localStorage.getItem(name));
    // 过期或有错误返回 0 否则返回数据
    if (d) {
        let t = Date.now() - d.time
        if (-1 < t && t < (time * 60000)) return d.data;
    }
    return 0;
};

let talkTimer = null;
// function indexTalk() {
//     if (talkTimer) {
//         clearInterval(talkTimer)
//         talkTimer = null;
//     }
//     if (!document.getElementById('bber-talk')) return

//     function toText(ls) {
//         let text = []
//         ls.forEach(item => {
//             text.push(item.content.replace(/#(.*?)\s/g, '').replace(/\{(.*?)\}/g, '').replace(/\!\[(.*?)\]\((.*?)\)/g, '<i class="fa-solid fa-image"></i>').replace(/\[(.*?)\]\((.*?)\)/g, '<i class="fa-solid fa-link"></i>'))
//         });
//         return text
//     }

//     function talk(ls) {
//         let html = ''
//         ls.forEach((item, i) => { html += `<li class="item item-${i + 1}">${item}</li>` });
//         let box = document.querySelector("#bber-talk .talk-list")
//         box.innerHTML = html;
//         talkTimer = setInterval(() => {
//             box.appendChild(box.children[0]);
//         }, 3000);
//     }
//     let d = loadData('talk', 2);
//     if (d) talk(d);
//     else {
//         // https://memos.itisn.cyou/api/memo?creatorId=37&tag=通告&limit=2
//         fetch('https://memos.mgodmonkey.love/api/memo?creatorId=1&tag=通告&limit=2').then(res => res.json()).then(data => { // 更改地址和ID
//             data = toText(data.data)
//             talk(data);
//             saveData('talk', data);
//         })
//     }
// }
function indexTalk() {
    if (talkTimer) {
        clearInterval(talkTimer);
        talkTimer = null;
    }
    if (!document.getElementById('bber-talk')) return;

    function toText(ls) {
        let text = [];
        ls.forEach(item => {
            text.push(item.content.replace(/#(.*?)\s/g, '').replace(/\{(.*?)\}/g, '').replace(/\!\[(.*?)\]\((.*?)\)/g, '<i class="fa-solid fa-image"></i>').replace(/\[(.*?)\]\((.*?)\)/g, '<i class="fa-solid fa-link"></i>'))
        });
        return text;
    }
    function talk(ls) {
        // let html = '';
        // ls.forEach((item, i) => { html += `<li class="item item-${i + 1}">${item}</li>` });
        // let box = document.querySelector("#bber-talk")
        // box.innerHTML = html;
        // 遍历 .swiper-slide 元素，将数据赋值给它们
        document.querySelectorAll('#bber-talk .li-style .swiper-slide').forEach((el, index) => {
            el.innerHTML = ls[index] || '';
        });
        // talkTimer = setInterval(() => {
        //     box.appendChild(box.children[0]);
        // }, 3000);
    }
    let d = loadData('talk', 2);
    if (d) talk(d);
    else {
        fetch('https://memos.mgodmonkey.love/api/memo?creatorId=1&tag=通告&limit=2').then(res => res.json()).then(data => { // 更改地址和ID
            data = toText(data.data);
            // 调整数据为仅包含2个元素
            data = data.slice(0, 2);
            console.log(data)
            talk(data);
            saveData('talk', data);
        })
    }
}

// indexTalk();

// pjax注释掉上面的 indexTalk(); 使用如下方法：
function whenDOMReady() {
    indexTalk();
}

whenDOMReady()
document.addEventListener("pjax:complete", whenDOMReady)