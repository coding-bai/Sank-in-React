import React, { useState } from 'react'
import { Button, Input, Typography } from "antd"



/**
 * hook版的请求示例
 */
function TodoHook() {

  const [result, setResult] = useState(null)
  const [url, setUrl] = useState('')

  const handleHttp = () => {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.send();
    xhr.onload = () => {
      if(xhr.status !== 200) {
        alert(`Error ${xhr.status}: ${xhr.statusText}`);
      } else {
        setResult(xhr.responseText)
      }
    }
    xhr.onerror = function() {
      alert("Request failed");
    };
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h2> Ajax Test </h2>
      <div>
        <Input type="text" style={{ marginLeft: "20px", width: "260px" }} onChange={(e) => { setUrl(e.target.value) }} placeholder="请求的url地址" value={url} />
        <Button type="primary" onClick={handleHttp}>Send</Button>
      </div>
      <Typography style={{border: "1px solid #000",marginTop:"10px",padding: "20px"}}>{result}</Typography>
    </div>
  )
}

export default TodoHook