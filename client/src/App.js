import React from 'react';
import './App.css';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
}
callAPI() {
    fetch("http://localhost:9000/testAPI")
        .then(res => res.text())
        .then(res => this.setState({ apiResponse: res }));
}
componentWillMount() {
    this.callAPI();
}
render(){
  return (
    <div className="App">
    <p className="App-intro">{this.state.apiResponse}</p>
    </div>
  )}
}
export default App;



const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://TollMongoAdmin:<password>@tollmongo-cgjsg.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});