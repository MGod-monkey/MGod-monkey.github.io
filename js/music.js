// var anzhiyu = {
//   // 音乐节目切换背景
//   changeMusicBg: function (isChangeBg = true) {
//     if (window.location.pathname != "/music/") {
//       return;
//     }
//     const anMusicBg = document.getElementById("an_music_bg");

//     if (isChangeBg) {
//       // player listswitch 会进入此处
//       const musiccover = document.querySelector("#anMusic-page .aplayer-pic");
//       anMusicBg.style.backgroundImage = musiccover.style.backgroundImage;
//     } else {
//       // 第一次进入，绑定事件，改背景
//       let timer = setInterval(() => {
//         const musiccover = document.querySelector("#anMusic-page .aplayer-pic");
//         // 确保player加载完成
//         console.info(anMusicBg);
//         if (musiccover) {
//           clearInterval(timer);
//           anMusicBg.style.backgroundImage = musiccover.style.backgroundImage;
//           // 绑定事件
//           anzhiyu.addEventListenerChangeMusicBg();

//           // 暂停nav的音乐
//           if (
//             document.querySelector("#nav-music meting-js").aplayer &&
//             !document.querySelector("#nav-music meting-js").aplayer.audio.paused
//           ) {
//             anzhiyu.musicToggle();
//           }
//         }
//       }, 100);
//     }
//   },
//   addEventListenerChangeMusicBg: function () {
//     const anMusicPage = document.getElementById("anMusic-page");
//     const aplayerIconMenu = anMusicPage.querySelector(".aplayer-info .aplayer-time .aplayer-icon-menu");

//     anMusicPage.querySelector("meting-js").aplayer.on("loadeddata", function () {
//       anzhiyu.changeMusicBg();
//       console.info("player loadeddata");
//     });

//     aplayerIconMenu.addEventListener("click", function () {
//       document.getElementById("menu-mask").style.display = "block";
//       document.getElementById("menu-mask").style.animation = "0.5s ease 0s 1 normal none running to_show";
//     });

//     document.getElementById("menu-mask").addEventListener("click", function () {
//       if (window.location.pathname != "/music/") return;
//       anMusicPage.querySelector(".aplayer-list").classList.remove("aplayer-list-hide");
//     });
//   },
// };

// // 调用
// anzhiyu.changeMusicBg(false);

var urlinfo = window.location.pathname;
var overtime;

qq_musicpage();
function qq_musicpage() {
  if (urlinfo != '/music/') {
    document.querySelector("#web_bg").classList.remove("bgCls");
    document.getElementById('web_bg').style.backgroundImage = 'none';
    document.getElementById('footer').style.display = 'flex';
    document.getElementsByClassName('pace-running')[0].style.background = 'var(--global-bg)';
    document.getElementsByTagName('body')[0].style.background = 'var(--global-bg)';

    clearInterval(overtime);
  }else {
    document.querySelector("#web_bg").classList.add("bgCls");
    document.getElementById('footer').style.display = 'none';
    document.getElementById('content-inner').style.background = 'none';
    document.getElementById('page').style.margin = 'auto';
    document.getElementById('page').style.background = 'rgba(0,0,0,0)';
    document.getElementsByTagName('body')[0].style.background = '#0d0d0d';

    overtime = window.setInterval('setOverTime()', '500');
  }

  document.body.onmousedown = function(event) {
    if (event.button == 0) {
      var targ = event.target;  
      var tname = targ.tagName; 
      var tClassname = targ.classList[1];
      var tidname = targ.id;

      if (urlinfo == '/music/'){
        if (tname == 'svg') {
          var tsvg = targ.parentNode;
          if(tsvg.classList[1] == 'aplayer-icon-menu' || tClassname == 'aplayer-icon-menu') {
            setTimeout(function() {
              document.getElementById('menu-mask').style.display = "block";
              document.getElementById('menu-mask').style.animation = "0.5s ease 0s 1 normal none running to_show";
            }, 100);
          }
        }else if (tname == 'path') {
          var tpath = targ.parentNode;
          var tpath2 = tpath.parentNode;
          if(tpath2.classList[1] == 'aplayer-icon-menu') {
            setTimeout(function() {
              document.getElementById('menu-mask').style.display = "block";
              document.getElementById('menu-mask').style.animation = "0.5s ease 0s 1 normal none running to_show";
            }, 100);
          }
        }

        if (tidname == 'menu-mask') {
          var domHtml = domAplyerList();
          domHtml.classList.remove("aplayer-list-hide");
        }
      }
    }
  }
}
function domAplyerList() {
  var htmldom = document.getElementById('eo-music');
  var htmldom2 = htmldom.childNodes[3];
  return htmldom2;
}
function setOverTime() {
  imgs = document.getElementById('eo-music').getElementsByClassName('aplayer-pic')[0].style.backgroundImage;
  document.getElementById('web_bg').style.backgroundImage = imgs;
}