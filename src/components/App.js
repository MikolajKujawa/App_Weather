import { Component } from 'react';
import '../style/App.css';
import Form from './Form';
import Result from './Result';

//Klucz API
const APIKey = 'a230065d081d26a7ff3f72cd68a66644';

class App extends Component {
  state = {
    value: "",
    day: '',
    time: '',
    city: '',
    sunrise: '',
    sunset: '',
    temp: '',
    pressure: '',
    wind: '',
    error: false,
  }
  
  handleInputChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }

  /*handleCitySubmit = (e) => {
    e.preventDefault()
    console.log('potwierdzony formularz')
    const API = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&appid=${APIKey}`;

    fetch(API)
    .then(response => {
      if(response.ok){
        return response
      }
      throw Error("Nie udało się")
    })
    .then(response => response.json())
    .then(data => {
      const day = new Date().toLocaleDateString()
      const time = new Date().toLocaleTimeString()
      this.setState({
        day,
        time,
        city: this.state.value,
        sunrise: data.sys.sunrise,
        sunset: data.sys.sunset,
        temp: (data.main.temp - 273,15),
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
  }*/

  componentDidUpdate(prevProps, prevState){
    if (this.state.value.length === 0) return
    if (prevState.value !== this.state.value){
      const API = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&appid=${APIKey}`;

      fetch(API)
      .then(response => {
        if(response.ok){
          return response
        }
        throw Error("Nie udało się")
      })
      .then(response => response.json())
      .then(data => {
        const day = new Date().toLocaleDateString()
        const time = new Date().toLocaleTimeString()
        this.setState({
          day,
          time,
          city: this.state.value,
          sunrise: data.sys.sunrise,
          sunset: data.sys.sunset,
          temp: (data.main.temp - 273,15),
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
