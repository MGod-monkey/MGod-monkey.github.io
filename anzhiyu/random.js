var posts=["posts/d38e303b.html","posts/e1d2cb7c.html","posts/639d096c.html","posts/c1763b9b.html","posts/a2ae83d0.html","posts/a5d6f412.html","posts/982cb875.html","posts/64c6093c.html","posts/2c607ad2.html","posts/349e2e18.html","posts/961f6207.html","posts/4528cc75.html","posts/732e43d6.html","posts/282d4d3d.html","posts/cfe889db.html","posts/39efaa44.html","posts/eb82f52e.html","posts/1f501926.html","posts/37a8d87e.html","posts/5d383f12.html","posts/891e492b.html","posts/bf2c6ce0.html","posts/a344ec17.html","posts/1b0bbd7b.html","posts/63a11c75.html","posts/f1cb77fb.html","posts/934e71d1.html","posts/3dddf2fb.html","posts/aa750162.html","posts/232d6cf1.html","posts/97fc50d1.html","posts/957217de.html","posts/ad7b2ecb.html","posts/7265cf3f.html","posts/bcf5ea53.html","posts/a56fc1a5.html","posts/c76bd3e9.html","posts/2013454d.html"];function toRandomPost(){pjax.loadUrl("/"+posts[Math.floor(Math.random()*posts.length)])}var friend_link_list=[{name:"MGodmonkeyの世界",link:"https://www.mgodmonkey.cn/",avatar:"https://mybog.s3.bitiful.net/imgs/head.jpg",descr:"心中有光，万物皆是迪迦",siteshot:"https://mybog.s3.bitiful.net/imgs/siteshot.webp",color:"speed",tag:"技术"},{name:"loong",link:"https://www.wuli-loong.xyz/",avatar:"https://pic.imgdb.cn/item/66d07f22d9c307b7e9473213.jpg",descr:"实迷途其未远，觉今是而昨非。",siteshot:"https://pic.imgdb.cn/item/66d07fc5d9c307b7e948e1a6.png",color:"vip",tag:"技术"},{name:"安知鱼",link:"https://blog.anheyu.com/",avatar:"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg",descr:"生活明朗，万物可爱",siteshot:"https://npm.elemecdn.com/anzhiyu-blog@1.1.6/img/post/common/anzhiy.cn.jpg",color:"vip",tag:"技术"},{name:"张洪heo",link:"https://blog.zhheo.com/",avatar:"https://img02.anheyu.com/adminuploads/1/2022/09/02/6311fc38f1465.webp",descr:"分享设计与科技生活",siteshot:"https://img02.anheyu.com/adminuploads/1/2022/09/02/6311fc3959f82.webp",color:"vip",tag:"生活"},{name:"Akilarの糖果屋",link:"https://akilar.top/",avatar:"https://img02.anheyu.com/adminuploads/1/2022/09/02/6311fc9de6507.webp",descr:"期待您的光临！",siteshot:"https://img02.anheyu.com/adminuploads/1/2022/09/02/6311fc39c5966.webp",color:"vip",tag:"生活"},{name:"Tianli",link:"https://tianli-blog.club",avatar:"https://img02.anheyu.com/adminuploads/1/2022/11/11/636db0d451fd0.webp",descr:"惟其不可能，所以才相信。",siteshot:"https://img02.anheyu.com/adminuploads/1/2022/11/07/6368520c9e4e7.webp",color:"vip",tag:"技术"}],refreshNum=1;function friendChainRandomTransmission(){const t=Math.floor(Math.random()*friend_link_list.length),{name:s,link:o}=friend_link_list.splice(t,1)[0];Snackbar.show({text:"点击前往按钮进入随机一个友链，不保证跳转网站的安全性和可用性。本次随机到的是本站友链：「"+s+"」",duration:8e3,pos:"top-center",actionText:"前往",onActionClick:function(t){t.style.opacity=0,window.open(o,"_blank")}})}function addFriendLinksInFooter(){var t=document.getElementById("footer-random-friends-btn");if(!t)return;t.style.opacity="0.2",t.style.transitionDuration="0.3s",t.style.transform="rotate("+360*refreshNum+++"deg)";const s=[];let o=0;for(;friend_link_list.length&&o<3;){const t=Math.floor(Math.random()*friend_link_list.length),{name:e,link:a,avatar:n}=friend_link_list.splice(t,1)[0];s.push({name:e,link:a,avatar:n}),o++}let e=s.map((({name:t,link:s})=>"<a class='footer-item' href='"+s+"' target='_blank' rel='noopener nofollow'>"+t+"</a>")).join("");e+="<a class='footer-item' href='/link/'>更多</a>",document.getElementById("friend-links-in-footer").innerHTML=e,setTimeout((()=>{t.style.opacity="1"}),300)}