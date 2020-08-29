import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async (country)=>{
    try {
       var churl=url;
        if(country){
            churl=`${url}/countries/${country}`;
        }

        const {data : {confirmed, deaths, recovered, lastUpdate}} = await axios.get(churl);
        return {confirmed, deaths, recovered, lastUpdate};
    
    } catch (error) {
        console.log(error);
    }
}

export const fetchCountry = async () => {
    try {
       const {data:{countries}} = await axios.get(url+'/countries');
       
       console.log(countries);
       return countries.map((country)=> country.name); 
    } catch (error) {
        console.log(error);
    }
}

export const fetchDaily = async () => {
    try {
        const {data} = await axios.get(url+'/daily');
        console.log(data);
        const Mdata= data.map((element) => ({ totalConfirmed: element.totalConfirmed, reportDate:  element.reportDate, totalDeaths:  element.deaths.total}));
        return Mdata;
    } catch (error) {
        console.log(error)
    }
}
