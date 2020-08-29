import React from 'react';
import Cards from './components/Cards';
import CountryPicker from './components/CountryPicker';
import {fetchData, fetchDaily} from './api';
import Chart from './components/Chart';



class App extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data : {},
            country: '',
            loaded:false,
        }
    }

     handleCountryChange = async (country) => {
         console.log(country);
         const fetcheddata = await fetchData(country);
         console.log(fetcheddata);
        this.setState({
            data:fetcheddata,
            country:country,
        });



    }


    async componentDidMount(){ 
        const data = await fetchData();
        this.setState({
            data:data,
            loaded:true,
        });        
    }
    render(){
        const {data, country} = this.state;
        if(this.state.loaded){
        return(<div className="app">
        <div className="mt-2 mb-3">
            <CountryPicker handleCountryChange={this.handleCountryChange} />
            </div>
        <div className="mb-2">
            <Cards data={data} />
            </div>
        <div className="">
            <Chart/>
            </div> 
            
        </div>);
        }
        else{
            return null;
        }
    }
}
export default App;