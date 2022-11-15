const fs = require('fs');
const path = require('path');

const replaceThis = "rafi";
const replaceWith = "john";

const preview = false;
const folder = __dirname;

try {
  const data = fs.readdir(folder, (err, data) => {
    for (let i = 0; i < data.length; i++) {
      const item = data[i];

      const oldFile = path.join(folder, item);
      const newFile = path.join(folder, item.replaceAll(replaceThis, replaceWith));

      if (!preview) {
        fs.rename(oldFile, newFile, (err) => {
          if (err) throw err;
          console.log('Rename successful');
        })
      } else {
        if (item !== newFile)
        console.log(item + ' will be renamed to ' + newFile);
      }
    }
  })
} catch (err) {
  console.error(err);
}
