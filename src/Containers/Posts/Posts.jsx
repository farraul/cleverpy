import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { UPDATE_POSTS } from '../../redux/types';
import { LOAD_POSTS } from '../../redux/types';


const Home = (props) => {

    const [postSelected, setpostSelected] = useState([""]);
    let res;

    const seePopUp = (id_post) => {
        setpostSelected(id_post);
        var element_back = document.getElementById("pop-up-background-dark-full-width");
        element_back.classList.add("see-background-full-dark");
    }

    const hidePopUp = async () => {
        var element_back = document.getElementById("pop-up-background-dark-full-width");
        element_back.classList.remove("see-background-full-dark");
    }


    const deletePost = async () => {
       let data_filter= props.allPosts.filter(post => post.id !== postSelected);
       console.log("datafilter:",data_filter)
        props.dispatch({ type: LOAD_POSTS, payload: data_filter });

        hidePopUp();
    }

    return (
        <div className='max-width-container-1200 home-container'>
            <div className='home-section-all-posts'>
               
               
                { props.allPosts.map(run =>

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
                            Eliminar
                        </div>
                    </div>
                )}
            </div>



            <div id="pop-up-background-dark-full-width" className=''>
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

export default connect((state) => ({
    allPosts: state.allPosts,
}))(Home);