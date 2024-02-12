import React, { Component } from 'react'
import axios from 'axios'

export default class CreateUser extends Component {

  async componentDidMount() {
      const res = await axios.get('http://localhost:4000/api/users');
      this.setState({users:res.data});
      console.log(res)
  }

  render() {
    return (
      <div className="row">
         <div className="col-md-4">

         </div>
         <div className="col-md-8">
          
         </div>
      </div>
    )
  }
}
