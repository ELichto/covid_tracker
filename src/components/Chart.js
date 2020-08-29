import React, {useState, useEffect} from 'react';
import {Line, Bar} from 'react-chartjs-2';
import {fetchDaily} from '../api';

const Chart = (props) => {
    const [Daily, setDaily] = useState([]);
     useEffect(()=>{
         const fAPI  = async () =>{
        setDaily(await fetchDaily());}

        fAPI();
    });

    return (
        <div>
        <Line 
        data= {{
            labels: Daily.map(({reportDate})=> reportDate),
            datasets:[{
                label:'Infected',
                data: Daily.map(({totalConfirmed}) => totalConfirmed),
                borderColor:'blue',
                pointRadius:0,
                borderWidth:2,
            },
               {
                data: Daily.map(({totalDeaths}) => totalDeaths),
                label:'Deaths',
                borderColor: 'red',
                pointRadius:0,
                borderWidth:2,

               },
            ],
        }}
        options={{
            elements:{
                line:{
                    fill: true,
                    }
                    }


        }}

        />
        </div>);

}

export default Chart;