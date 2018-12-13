import React, { Component } from 'react';
import axios from "axios";
import './App.css';


class App extends Component {
	state = {
		input: "",
    pokemonName: "",
    pokemonImage: ""
	}

	changeFunction=(value)=>{
    console.log(value)
		this.setState({
			input: value
		})
	}

	getPokemonData = () => {
    let myList = []
    console.log(this.state.input)
    axios.get("https://pokeapi.co/api/v2/pokemon/" + this.state.input + "/") 
      .then((response)=> {
        myList.push(response.data.forms[0].name)
        myList.push(response.data.sprites.front_default)
        console.log(response)
      	this.setState({
      		pokemonName: response.data.forms[0].name,
      		pokemonImage: response.data.sprites.front_default
      	})
      })
      .catch(function (error) {
      	myList.push("An Error Occured")
        myList.push("")
          // this.setState.pokemonName.innerHTML = "(An error has occurred.)";
          // this.setState.pokemonImage.src = "";
      });
  	}

  render() {
    return (
    	<div>
    		<div className="header">
    			Pokemon Finder
    		</div>
        {console.log(this.state)}
    		<div className = "left">
    			<input 
    				type="text"
    				value={this.state.input}
    				onChange={e=>{this.changeFunction(e.target.value)}} 
    			/>
    			<button onClick={()=>this.getPokemonData()}>click here</button>
    		</div><div className = "right">
          <img src = {this.state.pokemonImage}/>
    		</div>
    	</div>
    );
  }
}

export default App;
