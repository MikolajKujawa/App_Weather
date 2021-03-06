import { Component } from 'react';
import '../style/App.sass';
import Form from './Form';
import Result from './Result';

//Klucz API
const APIKey = 'a230065d081d26a7ff3f72cd68a66644';

class App extends Component {
  state = {
    value: "",
    city: '',
    sunrise: '',
    sunset: '',
    feel_temp: '',
    temp: '',
    pressure: '',
    wind: '',
    error: false,
  }
  
  handleInputChange = (e) => {
    if(e.target.value.length<=20){
      this.setState({
      value: e.target.value
      })
    }
    
  }

  componentDidUpdate(prevProps, prevState){
    if (this.state.value.length === 0) return
    if (prevState.value !== this.state.value){
      const API = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&appid=${APIKey}`;

      fetch(API)
      .then(response => {
        if(response.ok){
          return response
        }
        throw Error("Nie udało się")
      })
      .then(response => response.json())
      .then(data => {
        this.setState({
          city: this.state.value,
          sunrise: data.sys.sunrise,
          sunset: data.sys.sunset,
          feel_temp: (data.main.feels_like - 273.15).toFixed(2),
          temp: (data.main.temp - 273.15).toFixed(2),
          pressure: data.main.pressure,
          wind: data.wind.speed,
          error: false,
        })
      })
      .catch(error => {
        this.setState({
          error: true,
          city: this.state.value,
        })
      })
    }
  }

  render() {
    return (
      <div className="App">
        <Form 
          value={this.state.value} 
          change={this.handleInputChange} 
        />
        <Result weather={this.state} />
      </div>
    );
  }
}
  

export default App;
