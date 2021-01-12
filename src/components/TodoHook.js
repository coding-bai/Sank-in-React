import React, {useState} from 'react'
import {Button, Input, Typography} from "antd"
/**
 * hook版的请求示例
 */
function TodoHook() {

  const [result, setResult] = useState(null)
  const [url, setUrl] = useState('')

  const handleHttp = () => {
    setResult('hello')
  }
  return (
    <div style={{textAlign: 'center'}}>
      <h2>Ajax Test</h2>
      <div>
        <label htmlFor="GET-radio">GET</label>
        <input type="radio" name="AJAX-method" id="GET-radio" />
        <label htmlFor="POST-radio" style={{marginLeft: "20px"}}>POST</label>
        <input type="radio" name="AJAX-method" id="POST-radio" />
        <Input type="text" style={{marginLeft: "20px",width: "260px"}} onChange={(e) => {setUrl(e.target.value)}} placeholder="请求的url地址" value={url} />
        <Button type="primary" onClick={handleHttp}>Send</Button>
      </div>
      <Typography>{result}</Typography>
    </div>
  )
}

export default TodoHook