var posts=["posts/f1cb77fb.html","posts/232d6cf1.html","posts/934e71d1.html","posts/3dddf2fb.html","posts/aa750162.html","posts/97fc50d1.html","posts/957217de.html","posts/ad7b2ecb.html","posts/7265cf3f.html","posts/bcf5ea53.html","posts/a56fc1a5.html","posts/c76bd3e9.html","posts/2013454d.html"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};var friend_link_list=[{"name":"MGodmonkey","link":"https://mgodmonkey.love","avatar":"https://mybog.s3.ladydaily.com/imgs/head.jpg","descr":"心中有光，目光所及皆是迪迦！","siteshot":"https://source.fomal.cc/siteshot/www.fomal.cn.jpg"},{"name":"anzhiyu","link":"https://blog.anheyu.com","avatar":"https://mybog.s3.ladydaily.com/imgs/head.jpg","descr":"生活明朗，万物可爱","siteshot":"https://source.fomal.cc/siteshot/www.fomal.cn.jpg"},{"name":"heo","link":"https://blog.zhheo.com/","avatar":"https://mybog.s3.ladydaily.com/imgs/head.jpg","descr":"心中有光，目光所及皆是迪迦！","siteshot":"https://source.fomal.cc/siteshot/www.fomal.cn.jpg"}];
    var refreshNum = 1;
    function addFriendLinksInFooter() {
      var footerRandomFriendsBtn = document.getElementById("footer-random-friends-btn");
      if(!footerRandomFriendsBtn) return;
      footerRandomFriendsBtn.style.opacity = "0.2";
      footerRandomFriendsBtn.style.transitionDuration = "0.3s";
      footerRandomFriendsBtn.style.transform = "rotate(" + 360 * refreshNum++ + "deg)";
      const finalLinkList = [];
  
      let count = 0;

      while (friend_link_list.length && count < 3) {
        const randomIndex = Math.floor(Math.random() * friend_link_list.length);
        const { name, link, avatar } = friend_link_list.splice(randomIndex, 1)[0];
  
        finalLinkList.push({
          name,
          link,
          avatar,
        });
        count++;
      }
  
      let html = finalLinkList
        .map(({ name, link }) => {
          const returnInfo = "<a class='footer-item' href='" + link + "' target='_blank' rel='noopener nofollow'>" + name + "</a>"
          return returnInfo;
        })
        .join("");
  
      html += "<a class='footer-item' href='/social/link/'>更多</a>";

      document.getElementById("friend-links-in-footer").innerHTML = html;

      setTimeout(()=>{
        footerRandomFriendsBtn.style.opacity = "1";
      }, 300)
    };