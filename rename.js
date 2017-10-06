const fs = require('fs')
const path = require('path');

var walkSync = function(dir, filelist) {
	var files = fs.readdirSync(dir);
	filelist = filelist || [];
	files.forEach(function(file) {
		if(file.startsWith('.')) {
			return;
		};
	  if (fs.statSync(path.join(dir, file)).isDirectory()) {
		filelist.push({
			file,
			path: path.join(dir, file)
		});
		filelist = walkSync(path.join(dir, file), filelist);
	  }
	});
	return filelist;
  };

  const files = walkSync(path.join(__dirname))
	  .filter(file => file.file.startsWith('Listing_'))
	  .forEach(file => {
		  const newName = file.file
			  .replace('_04_2', '_04_02')
			  .replace('_04_3', '_04_03')
			  .replace('_04_4', '_04_04')
			  .replace('_04_5', '_04_05')
			  .replace('_04_6', '_04_06')
			  .replace('_04_7', '_04_07')
			  .replace('_04_8', '_04_08')
			  .replace('_04_9', '_04_09');
		  const newPath = path.join(file.path.substring(0, file.path.indexOf('Listing')), newName);
		  console.log(newPath);
		  fs.renameSync(file.path, newPath);
	  });