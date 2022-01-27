import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Home.css';



const Home = () => {

    const [allPosts, setAllPosts] = useState([]);
    let res;
    useEffect(() => {
        takePosts();
    }, []);

    const takePosts = async () => {
        try {
            res = await axios.get("https://jsonplaceholder.typicode.com/posts");
            setAllPosts(res.data);
            console.log("res;", res.data);
        }
        catch (error) {
        }
    }



    return (
        <div className='max-width-container-1200 home-container'>

            <div className='home-section-all-posts'>

                {allPosts.map(run =>

                    <div className='home-section-all-posts-each-post'>
                        <div className='padding-each-post'>
                            <div>
                                <strong className='uppercase'>{run.title}</strong>
                            </div>
                            <div>
                                {run.userId}
                            </div>
                            <div>
                                {run.body}
                            </div>
                            {console.log("run", run)}
                            <div>
                            </div>
                        </div>
                        <div className='padding-each-post-delete'>
                        Eliminar
                        </div>

                    </div>

                )}
            </div>
        </div>

    )
}

export default Home;