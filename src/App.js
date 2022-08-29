import React from 'react';
import axios from 'axios';
import style from './style/app.css'
import Header from './component/header';
import Footer from './component/footer';


class App extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      display_name : '',
      lat : '',
      lon : '',
      errFlag : false,
      mapFlag : false
    }
  }
  
  getLocationData = async (event) => {
    event.preventDefault();
    const cityName = event.target.city.value;
    //send request to the third party
    const key = 'pk.d5a044f57bf1f7737a5784715de57c45';
    const URL = `https://us1.locationiq.com/v1/search?key=${key}&q=${cityName}&format=json`
    
    try 
    {
      let resResult = await axios.get(URL);
      this.setState({
        display_name : resResult.data[0].display_name,
        lat : resResult.data[0].lat,
        lon : resResult.data[0].lon,
        mapFlag : true
      })
    }
    catch
    {
      console.log('err');
      this.setState({
        errFlag : true
      })
    }

    
    

  }

 
  render(){
    return(
      <div class="app">
        <Header/>
        <form onSubmit={this.getLocationData}>
          <input class ='box' type="text" name="city" placeholder='Enter a city'/>
          <button type='submit'>Explorer!</button>
        </form>
<div class='d'>
       <div><h3>Display name :</h3> {this.state.display_name}</div>
        <p>Lon : {this.state.lon}</p>
        <p>Lat : {this.state.lat}</p></div>
<div >  {this.state.mapFlag && <img src={`https://maps.locationiq.com/v3/staticmap?key=pk.7aedc85ff3620b0d3b6865ccab5efd25&center=${this.state.lat},${this.state.lon}`}></img>}
        {this.state.errFlag && <h4>Error : sorry something went wrong!</h4>}</div>
        <Footer/>
      </div>
    )
  }
}

export default App;