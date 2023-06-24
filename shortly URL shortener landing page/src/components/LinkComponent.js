import React from 'react'
import { useState, useEffect } from 'react';
import './LinkComponent.css'
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';


function LinkComponent() {

    const [text,setText] = useState('');
    const [warning, setWarning] = useState(false)
    const [expand, setExpand ] = useState(false); 
    const [links, setLinks ] = useState([]);
    const [copied, setCopied] = useState ("Copy");
    const [color, setColor ] = useState(false);
    
    const handleSubmit = (e) => {
        e.preventDefault();

        if(!text){
            setWarning(true);
            setExpand(false);
        }else {
            setWarning(false);

            const shortenLink = async () => {
                const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${text}`)

                const data = await res.json()
                
                setLinks(data.result);
                setText('');
            } 
            shortenLink();
            setExpand(true);
        }
    }

    const handleCopy = ()=> {
        navigator.clipboard.writeText(links.full_short_link);
        setCopied("Copied!");
        setColor(true);
    }


    
  return (
    <Container fluid id='wrapper2' className='p-0'>

      <div id="content-row">

        <div id='div1' className='rounded-3 mb-4'>
            <form className='form' onSubmit={handleSubmit}>

                <div id='mid-div'>
                    <input 
                    className='txtbox rounded-3'
                    type="text"
                    placeholder='Shorten your link here...'
                    style={{border:warning ? "2px solid red" : "none"}}
                    value={text}
                    onChange={(e)=> setText(e.target.value)}/>

                    <p id='warning' className='m-0' style={{visibility:warning ? "visible" : "hidden"}}>Please add a link</p>
                </div>
                
                <button className='mybtn rounded-3' onClick={handleSubmit}>
                    Shorten It!
                </button>

            </form>
        
        </div>

        <div id='div2' style={{display: expand ? "block" : "none"}}>
        
            <div className='copy mb-3 bg-light rounded-3'>

                <div id='example'>
                <p id='setLink' className='mb-0 ms-md-3'>{links.original_link}</p>
                </div>
                

                <hr id='hr2' className='d-md-none' />

                <div className='inner-div'>
                    <Link style={{textDecoration:"none"}} to={links.full_short_link} className='mb-0'>{links.full_short_link}</Link>
                    <div onClick={handleCopy} className='copybtn rounded-3' style={{backgroundColor: color ? "hsl(257, 27%, 26%)" : "hsl(180, 66%, 49%)" }}>{copied}</div>
                </div>

            </div>

        </div>

      </div>

    </Container>
  )
}

export default LinkComponent