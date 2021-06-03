const video = document.querySelector(".video");
const PRO_URL = "http://192.168.1.8:5000";
const DEV_URL = "http://127.0.0.1:5000";
const videolist = document.querySelector(".list-item");
const videoitem = document.querySelector(".lid");

const FetchApi = async function () {
  let reso = await fetch(`${PRO_URL}/call`);
  let data = await reso.json();
  return data;
};
const renderItem = (el) => {
  let markup = `<li class="lid">
  <a href="#${el.id}" class="linkto">
  <div class="item-box">
  
    <span class="anime-title">${el.name}</span>
    
  </div>
</a>
</li>`;
  videoitem.insertAdjacentHTML("afterend", markup);
};
const UpdateDom = async () => {
  let data = await FetchApi();

  data.forEach((el) => renderItem(el));
};
const getVideoById = async (id) => {
  let data = await FetchApi();
  let link;
  data.map((item) => {
    if (item.id == id) {
      link = item.link;
    }
  });
  return link;
};

const changeVideo = async () => {
  const videoid = window.location.hash.replace("#", "");

  let link = await getVideoById(videoid);
  console.log(link);
  video.src = `${PRO_URL}${link}`;
};
videolist.addEventListener("scroll", UpdateDom());
window.addEventListener("hashchange", changeVideo);
