import React, { Component } from "react";
import Adress from "./Adress";
import Job from "./Job";
import City from "./City";
import Citystate from "./Citystate";
import Cpf from "./Cpf"
import Email from "./Email";
import Housetype from "./Housetype";
import Name from "./Name";
import Resume from "./Resume";
import JobDescription from "../Jobdescription";
import CompileButton from "./CompileButton";

class Forms extends Component {
  constructor() {
    super()
    this.handleChange = this.handleChange.bind(this);
    // this.compile = this.compile.bind(this);
    this.state = {
      name: '',
      email: '',
      cpf: '',
      adress: '',
      city: '',
      state: '',
      type: '',
      typeHouse: false,
      typeBuilding: false,
      resume: '',
      job: '',
      jobDescription: '',
      compile: false,
    }
  }


  handleChange({ target }) {
    const { name, value } = target;
    const newValue = target.type === 'checkbox' ? target.checked : target.value;
    console.log(target.checked);
    if(name === 'name') {
      this.setState({
        [name]: newValue.toUpperCase(),
      })      
    } else if(name === 'adress') {
      this.setState({
        //Regex retirado da internet, https://www.codegrepper.com/code-examples/javascript/remove+special+characters+from+react
        [name]: newValue.replace(/[^a-zA-Z0-9]/g, ''),
      })   
    } else if (name === 'type') {
      this.setState({
        [name]: newValue,
      })
      if(value === 'Casa') {
        this.setState({
          typeBuilding: false,
          typeHouse: true,
        })
      } else if (value === 'Apartamento') {
        this.setState({
          typeHouse: false,
          typeBuilding: true,
        })
      }
    } else {
      this.setState({
        [name]: newValue,
      })
    }
  }

  render() {
    return(
      <form>
        <fieldset>
          <Adress handleChange={this.handleChange} value={this.state.adress}/>
          <City handleChange={this.handleChange} value={this.state.city}/>
          <Cpf handleChange={this.handleChange} value={this.state.cpf}/>
          <Email handleChange={this.handleChange} value={this.state.email}/>
          <Name handleChange={this.handleChange} value={this.state.name}/>
          <Citystate handleChange={this.handleChange} value={this.state.state}/>
          <Housetype handleChange={this.handleChange} value={this.state}/>
        </fieldset>
        <fieldset>
          <Resume handleChange={this.handleChange} value={this.state.resume}/>
          <Job handleChange={this.handleChange} value={this.state.job}/>
          <JobDescription handleChange={this.handleChange} value={this.state.jobDescription}/>
        </fieldset>
        <CompileButton compile={this.handleChange} value={this.state.compile}/>
      </form>
    )
  }
}

export default Forms