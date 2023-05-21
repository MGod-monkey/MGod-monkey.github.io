// let svg = '<svg  viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" class="is-badge"><path  d="m512 268c0 17.9-4.3 34.5-12.9 49.7s-20.1 27.1-34.6 35.4c.4 2.7.6 6.9.6 12.6 0 27.1-9.1 50.1-27.1 69.1-18.1 19.1-39.9 28.6-65.4 28.6-11.4 0-22.3-2.1-32.6-6.3-8 16.4-19.5 29.6-34.6 39.7-15 10.2-31.5 15.2-49.4 15.2-18.3 0-34.9-4.9-49.7-14.9-14.9-9.9-26.3-23.2-34.3-40-10.3 4.2-21.1 6.3-32.6 6.3-25.5 0-47.4-9.5-65.7-28.6-18.3-19-27.4-42.1-27.4-69.1 0-3 .4-7.2 1.1-12.6-14.5-8.4-26-20.2-34.6-35.4-8.5-15.2-12.8-31.8-12.8-49.7 0-19 4.8-36.5 14.3-52.3s22.3-27.5 38.3-35.1c-4.2-11.4-6.3-22.9-6.3-34.3 0-27 9.1-50.1 27.4-69.1s40.2-28.6 65.7-28.6c11.4 0 22.3 2.1 32.6 6.3 8-16.4 19.5-29.6 34.6-39.7 15-10.1 31.5-15.2 49.4-15.2s34.4 5.1 49.4 15.1c15 10.1 26.6 23.3 34.6 39.7 10.3-4.2 21.1-6.3 32.6-6.3 25.5 0 47.3 9.5 65.4 28.6s27.1 42.1 27.1 69.1c0 12.6-1.9 24-5.7 34.3 16 7.6 28.8 19.3 38.3 35.1 9.5 15.9 14.3 33.4 14.3 52.4zm-266.9 77.1 105.7-158.3c2.7-4.2 3.5-8.8 2.6-13.7-1-4.9-3.5-8.8-7.7-11.4-4.2-2.7-8.8-3.6-13.7-2.9-5 .8-9 3.2-12 7.4l-93.1 140-42.9-42.8c-3.8-3.8-8.2-5.6-13.1-5.4-5 .2-9.3 2-13.1 5.4-3.4 3.4-5.1 7.7-5.1 12.9 0 5.1 1.7 9.4 5.1 12.9l58.9 58.9 2.9 2.3c3.4 2.3 6.9 3.4 10.3 3.4 6.7-.1 11.8-2.9 15.2-8.7z" fill="#1da1f2"></path></svg>'
// let total = 0
// let nowNum = 0
// let items = []
// let page = 1

// // docker启动：docker-compose down && docker image rm neosmemo/memos:latest && docker-compose up -d
// let Url = 'https://memos.itisn.cyou/api/memo?creatorId=37&page='
// // let Url = 'https://47.115.205.80:5230/api/memo?creatorId=1&page='

// window.addEventListener('DOMContentLoaded', () => {
//     getNew();
// });

// // 获取数据
// function getNew() {
//     let bibi = document.getElementById('bibi');
//     try {
//         bibi.removeChild(document.getElementById('more'))
//     } catch (error) { }

//     bibi.innerHTML += '<div id="bb_loading"><img src="/imgs/loading.gif" alt="bb_loading"></div>'

//     fetch(Url + page).then(res => res.json()).then((res) => {
//         items = res.data
//         total += res.data.length
//         nowNum += res.data.length
//         if (page == 1) {
//             document.querySelector('.bb-info').innerHTML = '<svg style="width:1.20em;height:1.20em;top:5px;fill:currentColor;overflow:hidden;position:relative"><use xlink:href="#icon-chat"></svg> 站长的说说(' + total + ')'
//         }
//         page += 1
//     }).then(() => {
//         bb();
//         if (nowNum < total) {
//             document.getElementById('bibi').innerHTML += '<button id="more" onclick="getNew()">再看看</button>'
//         }
//         document.getElementById('bibi').removeChild(document.getElementById('bb_loading'))
//     })
// }

// // 渲染数据
// function bb() {
//     let bb = document.getElementById('bb-main')
//     items.forEach((item) => {
//         let time = item.updateTs.substring(0, 10);
//         let div = document.createElement('div')
//         item.content = contentFormat(item.content)

//         div.className = 'bb-card'
//         div.innerHTML = '<div class="card-header"><div class="avatar"><img class="nofancybox"src="' + '/imgs/head.jpg' + '"></div><div class="name">' + item.author.nickName + '</div>' + svg + '<div class="card-time">' + time + '</div></div><div class="card-content">' + item.content + '</div><div class="card-footer"><div data-v-185689ea=""class="card-label"style="background: ' + '#6ea820' + '; color: white;">' + item.creatorName + '</div></div>'
//         bb.appendChild(div)
//     })
// }

// // content格式化
// function contentFormat(s) {
//     let br = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
//     let re_forimg = /<img(.*?)src=[\"|\']?(.*?)[\"|\']?(.*?)>|!\[(.*?)\]\((.*?)\)/g;
//     let getImgUrl = /(http(.*).[jpg|png|gif])/g;
//     let ls = s.match(getImgUrl)
//     s = s.replace(re_forimg, '')
//     s = s.replace(br, '')

//     let html = '<br>'
//     if (ls) {
//         ls.forEach((e) => {
//             html += '<a href="' + e + '" target="_blank" data-fancybox="group" class="fancybox"><img src="' + e + '"></a>'
//         })
//     }
//     s += html
//     return s
// }
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
function indexTalk() {
    if (talkTimer) {
        clearInterval(talkTimer)
        talkTimer = null;
    }
    if (!document.getElementById('bber-talk')) return

    function toText(ls) {
        let text = []
        ls.forEach(item => {
            text.push(item.content.replace(/#(.*?)\s/g, '').replace(/\{(.*?)\}/g, '').replace(/\!\[(.*?)\]\((.*?)\)/g, '<i class="fa-solid fa-image"></i>').replace(/\[(.*?)\]\((.*?)\)/g, '<i class="fa-solid fa-link"></i>'))
        });
        return text
    }

    function talk(ls) {
        let html = ''
        ls.forEach((item, i) => { html += `<li class="item item-${i + 1}">${item}</li>` });
        let box = document.querySelector("#bber-talk .talk-list")
        box.innerHTML = html;
        talkTimer = setInterval(() => {
            box.appendChild(box.children[0]);
        }, 3000);
    }
    let d = loadData('talk', 2);
    if (d) talk(d);
    else {
        fetch('https://memos.itisn.cyou/api/memo?creatorId=37&tag=通告&limit=2').then(res => res.json()).then(data => { // 更改地址和ID
            data = toText(data.data)
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