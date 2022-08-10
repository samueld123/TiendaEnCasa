import React, {useState, useEffect} from 'react'
import axios from 'axios';

function DataFetching() {
    const [items, setItems] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:3500/items')
            .then(res => {
                console.log(res)
                setItems(res.data)
            })
            .catch(err=>{
                console.log(err)
            })
    }, [])
    return (
        <div>
            <ul>
                {
                    items.map(item => <li key={item.id}>{item.product}</li>)
                }
            </ul>
        </div>
    )
}

export default DataFetching