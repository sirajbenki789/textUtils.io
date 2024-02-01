import React, {useState} from 'react'



const Module1 =(props)=>{
    const [text,setText] = useState("");
    const onchange =(event)=>{
        // console.log("change");
        setText(event.target.value);
    }

    const onUpclick =(event)=>{
        // console.log("clicked");
        // defaultprevent()
        let newText=text.toUpperCase();
       setText(newText)
       console.log(event)
       props.showAlert('Uppercase is added','success');
    }
    const onLoclick =(event)=>{
      // console.log("clicked");
      // defaultprevent()
      let newText=text.toLowerCase();
     setText(newText)
     console.log(event)
     props.showAlert('Lowercase is added','success')

  }
    const onClearclick=(event)=>{
      let newText = '';
      setText(newText);
      console.log(event);
     props.showAlert('Input Box is Cleared','success');

    }
    const onCapitalizeclick=(event)=>{
      console.log(text);
      let newText = text.charAt(0).toUpperCase()+text.slice(1);
      
      console.log(newText);
      // console.log(newText);
      setText(newText,);
      console.log(event); 
     props.showAlert('First Letter is capitalized','success');
    }
    const onHandleCopy=()=>{
      let input = document.getElementById("myBox");
      // input.focus();
      input.select();
     navigator.clipboard.writeText(input.value);
     props.showAlert('Text is copied','success');
    }
    const onRemoveExtra =()=>{
      let trim = text.split(/  */).join(' ')
     setText(trim);
     props.showAlert('Extra space is removed','success');

    }
    

    return (
      <div className={`text-${props.mode==='light'?'dark':'light'}`}>
        <div className={`container my-6`} >
          <h1 id=''>Enter A text</h1>
          <textarea
            style={{display:'block',
            width:'900px',
            marginBottom:'10px',
            marginTop:'20px',
            backgroundColor: props.mode==='dark'?'#334e64':'white',
          color:props.mode==='light'?'black':'white',
        border:props.mode==='light'?'2px solid black':'2px solid white',
        cursor:''}}
            name=""
            id="myBox"
            // cols="130"
            value={text}
            onChange={onchange}
            rows="5"
          ></textarea>
          <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={onUpclick}>
            Convert To UpperCase
          </button>
          <button disabled={text.length===0}  className="btn btn-primary mx-1" onClick={onLoclick}>
            Convert To LowerCase
          </button>
          <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={onClearclick}>
            Clear Text
          </button>
          <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={onCapitalizeclick}>
            Capitalize a first later
          </button>
          <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={onHandleCopy}>
            Copy Text
          </button>
          <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={onRemoveExtra}>
          Remove Extra 
          </button>
        
        <h2>Summary:</h2>
      
        <p><b>{text.split(" ").filter((element)=>{return element.length !==0 }).length}</b> words</p>
        <p><b>{text.split('').length}</b> character</p>
        <p><b>{0.0008*text.split(" ").filter((element)=>{return element.length !==0 }).length} </b>Minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:'Enter Above to Priview Something'} </p>
        </div>
      </div>
    );
}

export default Module1;