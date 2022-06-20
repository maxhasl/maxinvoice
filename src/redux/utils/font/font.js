import jsPDF from 'jspdf';
import Ubuntu from './Ubuntu-Regular.ttf';

async function urlContentToDataUri(url) {
  const response = await fetch(url);
  const blob = await response.blob();
  return await new Promise((callback) => {
    let reader = new FileReader();
    reader.onload = function () {
      callback(this.result.substr(21));
    };
    reader.readAsDataURL(blob);
  });
}

const loadFont = async () => {
  let font = await urlContentToDataUri(Ubuntu);

  let callAddFont = function () {
    this.addFileToVFS('Ubuntu-Regular.ttf', font);
    this.addFont('Ubuntu-Regular.ttf', 'Ubuntu', 'normal');
  };
  jsPDF.API.events.push(['addFonts', callAddFont]);
};

export default loadFont;
