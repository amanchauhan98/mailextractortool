import React, { useEffect, useRef, useState } from 'react';
import * as monaco from 'monaco-editor';

const MonacoEditor = () => {
  const editorRef = useRef(null);
  const [textValue, setTextValue] = useState("hello this is aman chauhan")

//   const editorValue = (event) => {
//     setTextValue(event.target.value)
//   }
//   console.log(textValue);

  useEffect(() => {
    // Load the editor worker script (this is required for the editor to work properly)
    const workerUrl = process.env.PUBLIC_URL + '/editor.worker.js';
    // MonacoEnvironment.getWorker(workerUrl)
    const editor = monaco.editor.create(editorRef.current, {
      value: textValue,
      language : "python",
      theme : 'vs-dark'
    });
    // Add an event listener to capture content changes
    editor.onDidChangeModelContent(() => {
        const newEditorText = editor.getValue();
        setTextValue(newEditorText);
      });

    return () => {
      // Dispose of the editor when the component unmounts
      editorRef.current.dispose();
    };
  }, []);

//   write button code for executing the editor code
  const handleCodeRun = async() => {
    try {
        const codeResult = await eval(textValue);
        console.log(codeResult);
    } catch (error) {
        console.log("error occured while executing the code")
    }
  }
  return <>
  <div  ref={editorRef} style={{ width: '800px', height: '600px' }} />;
  <button className='px-4 py-1 bg-red-500 text-white ' onClick={handleCodeRun}>Run Code</button>
  </>
  
};

export default MonacoEditor;



