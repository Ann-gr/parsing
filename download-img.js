const fs = require("fs");
const path = require("path");
const { download } = require("./lib/File");
const items = require("./data/gravernu_ru-1641884831.json");

const fileObjs = {}
items
  .filter(item => !!item.movingThumbnail)
  .forEach((item) => {
    const filePath = path.join(__dirname, `./data/download/${item.videoId}.webp`);
    const url = item.movingThumbnail?.url;
    console.log({filePath, url})
    fileObjs[item.videoId] = true;
    download(url, filePath);
  })

fs.writeFileSync(path.join(__dirname, `./data/files-objs.json`), JSON.stringify(fileObjs, null, 2));