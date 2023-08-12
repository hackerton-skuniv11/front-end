import axios from 'axios';
import { useEffect, useState } from 'react';
import classes from '../css/Main.module.css';
import Content from './Content';

function Main() {
    const [data, setData] = useState();

    async function getData() {
        try {
            const response = await axios.get("http://127.0.0.1:8000/posts/")
            console.log(response.data);
            setData(response.data);
        } catch (e) {
            console.log(e);
        }

    }

    useEffect(() => {
        getData()

    }, [])

    return (
        <div className={classes.container}>
            {
                data && data.map((c) =>
                    <Content key={c.id} content={c.content} img={c.image} time={c.created_at} />
                )
            }
        </div>
    );
}

export default Main;