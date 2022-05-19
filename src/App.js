import { React, Component } from 'react';
import CreateNewItem from "./components/CreateNewItem"
import ItemList from "./components/ItemList"

class App extends Component {


  state = {
    dataList: []
  };


  submitHandler(event) {

    event.preventDefault()
    
    this.setState({dataList: [...this.state.dataList, 
      event.target.dataInput.value]})

  }


  constructor() {
    
    super()
    this.submitHandler = this.submitHandler.bind(this)

  }


  render() {

    return (
      <div>
        <h1>Test Application</h1>
        <CreateNewItem onSubmitHandler={this.submitHandler} />
        <ItemList data={this.state.dataList} />
      </div>
    )

  }

}

export default App;
