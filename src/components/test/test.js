import { useState } from 'react';
import { jsPDF } from 'jspdf';
import cl from './test.module.scss';
import NAVI from './Navi.jpg';

const Test = () => {
  const doc = new jsPDF();

  const [image, setImage] = useState(NAVI);

  const download = () => {
    console.log('Download');
    const html = `<img src="${NAVI}"><div class="${cl.test}">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div><div class="${cl.test2}">Text here!!!</div><div class="${cl.test2}">Text here!!!</div><div class="${cl.test}">Text here!!!</div>`;

    doc.html(html, {
      callback: function (doc) {
        doc.save('a4.pdf');
      },
      margin: 5,
      width: 200,
      windowWidth: 800,
    });
  };

  const check = (e) => {
    console.log(URL.createObjectURL(e.target.files[0]));
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div className="App">
      <div className={cl.test}>Text here!!!</div>
      <button onClick={download}>Download</button>
      <input
        onChange={check}
        type="file"
        id="img"
        name="img"
        accept="image/*"
      ></input>
      <img alt="logo" src={image} />
    </div>
  );
};

export default Test;
