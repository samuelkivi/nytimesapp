import React from 'react'
import {useState, useEffect} from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios';

const Data = () => {

    const [news, setNews] = useState([])
    useEffect(() => {
        const URL = 'https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=RrczEUyi4QVmrGPyUEMhKE6UKeT9WTME'
        axios.get(URL).then(res => {   
        const uutiset = [];

        for(let i = 0; i < res.data.results.length; i++){

            let singleObject = {
                title: res.data.results[i].title,
                abstract: res.data.results[i].abstract,
                url: res.data.results[i].url

            }
            uutiset.push(singleObject);
        }
        setNews(uutiset);
    } )
},[])

const Huutinen = (props) => {
    
    return (
        <>
        <div>
            <h1>
              <a href={props.url} target = "_blank" rel = "noopener noreferrer" >{props.title} </a>
            </h1>
            <p>
                {props.abstract}
            </p>
        </div>
        </>

    )

}

const Map = () => {

    return (
        <>
        {news.map( item =>  <Huutinen title = {item.title} abstract = {item.abstract} url = {item.url}/> )}
        </>
    )

}

return (
    <>
    <div>
    <h1>HUUTISET</h1>
    <body>
    <Map />
    </body>
    </div>
    <footer>
    
    </footer>
    </>
)

}

export default Data;