import React, { Component } from 'react';
import { Input, Button, List } from 'antd'
import { changeInputValue, addInputValue, deleteItem } from "../store/action";
import store from "../store/index"
class TodoList extends Component {
  constructor(props) {
    super(props)
    this.placeholder = this.props.holder
    this.state = store.getState()
    this.changeInputValue = this.changeInputValue.bind(this)
    this.handleToAdd = this.handleToAdd.bind(this)
    this.storeChange = this.storeChange.bind(this)
    store.subscribe(this.storeChange)
  }
  changeInputValue(e) {
    //console.log(e.target.value)
    const action = changeInputValue(e.target.value)
    store.dispatch(action)
  }
  storeChange() {
    this.setState(store.getState())
  }
  handleToAdd() {
    const action = addInputValue()
    store.dispatch(action)
  }
  deleteItem(index) {
    const action = deleteItem(index)
    store.dispatch(action)
  }
  render() {
    return (
      <div style={{ width: '400px', margin: '20px auto' }}>
        <div style={{ textAlign: "center" }}>
          <Input
            placeholder={this.state.inputValue || this.placeholder} style={{ width: '300px' }}
            onChange={this.changeInputValue}
          />
          <Button type="primary" onClick = {this.handleToAdd}>增加</Button>
        </div>
        <List
          bordered
          dataSource={this.state.list}
          style={{
            margin: '20px auto'
          }}
          renderItem={(item,index) => (<List.Item onClick={this.deleteItem.bind(this, index)}>{item}</List.Item>)}
        />
      </div>
    );
  }
}
export default TodoList;