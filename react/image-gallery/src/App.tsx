import React, { useRef, useState, useCallback } from "react";
import logo from "./logo.svg";
import "./App.css";
import ImageBox from "./components/ImageBox";
import { useDropzone } from "react-dropzone";

function App() {
  const inpRef = useRef<HTMLInputElement>(null);
  // <string[]> - string array를 뜻함
  const [imageList, setImageList] = useState<string[]>([]);

  const onDrop = useCallback((acceptedFiles) => {
    console.log(acceptedFiles);
    if (acceptedFiles.length) {
      for (const file of acceptedFiles) {
        const render = new FileReader();
        render.readAsDataURL(file);
        render.onloadend = (event) => {
          // useState변경 함수 - prev: 이전 값을 가져올 수 있다.
          setImageList((prev) => [...prev, event.target?.result as string]);
        };
      }
    }
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  console.log(imageList);

  return (
    <div className="container">
      <div className={"gallery-box " + (imageList.length > 0 && "row")}>
        {imageList.length === 0 && (
          <div className="text-center">
            이미지가 없습니다.
            <br />
            이미지를 추가해 주세요.
          </div>
        )}

        {imageList.map((el) => (
          <ImageBox key={el} src={el} />
        ))}
        <div className="plus-box" {...getRootProps()}>
          <input {...getInputProps} />+
        </div>
      </div>
    </div>
  );
}

export default App;
