import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Home.css';



const Home = () => {

    const [allPosts, setAllPosts] = useState([]);
    const [postSelected, setpostSelected] = useState([""]);
    let res;
    let element_back = document.getElementById("pop-up-background-dark-full-width");
    let elementSeePopUp = document.getElementById("pop-up-black-div-info");


    useEffect(() => {
        takePosts();
    }, []);

    const takePosts = async () => {
        try {
            res = await axios.get("https://jsonplaceholder.typicode.com/posts");
            setAllPosts(res.data);
        }
        catch (error) {
        }
    }


    const seePopUp = (id_post) => {
        setpostSelected(id_post);
        elementSeePopUp.classList.add("block-sreen-pop-up");
        element_back.classList.add("see-background-full-dark");
    }

    const hidePopUp = async () => {
        elementSeePopUp.classList.remove("block-sreenpop-up");
        element_back.classList.remove("see-background-full-dark");
    }


    const deletePost = async () => {
        setAllPosts(allPosts.filter(function (post) {
            return post.id != postSelected
        }
        ))
        hidePopUp();
    }

    return (
        <div className='max-width-container-1200 home-container'>
            <div className='home-section-all-posts'>
                {allPosts.map(run =>

                    <div key={run.id} className='home-section-all-posts-each-post'>
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

                            <div>
                            </div>
                        </div>

                        <div onClick={() => seePopUp(run.id)} className='padding-each-post-delete'>
                            Eliminar {run.id}
                        </div>
                    </div>
                )}
            </div>



            <div id="pop-up-background-dark-full-width">
                <div className="pop-up-div-info" id="pop-up-black-div-info">
                    <div className="pop-up-div-info-title-cross">
                        <div className="closeWindow" id="X" onClick={() => hidePopUp()}>X</div>
                        <p className='pop-up-div-info-title'>¿Estas seguro de borrar este post?</p>
                    </div>
                    <div className='buttons-pop-up'>
                        <div onClick={() => hidePopUp()} className='button-no-delete'>
                            No
                        </div>
                        <div onClick={() => deletePost()} className='button-delete'>
                            Sí
                        </div>

                    </div>
                    <div className='iframe-arquitects-pop-up'>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Home;