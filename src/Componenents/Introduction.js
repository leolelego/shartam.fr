import React, { useEffect,useState } from 'react';
import ReactMarkdown from 'react-markdown';
import mdFile from './../assets/Intro.md'

function Introduction() {
    const [mardown, setMarkdown] = useState(''); 
    useEffect(() => {
        fetch(mdFile).then((response) => response.text()).then((text) => {
            setMarkdown(text)
          })
    })
    return (
        <div className="card">
            <div className="textbox">
                <ReactMarkdown source={mardown} />
            </div>
        </div>
    );
  }
  
  export default Introduction;