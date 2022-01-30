import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { UPDATE_POSTS } from '../../redux/types';
import { LOAD_POSTS } from '../../redux/types';


const Home = (props) => {

    const [postSelected, setPostSelected] = useState([""]);
    const [Update, setUpdate] = useState();



    const seePopUpDelete = (id_post) => {
        setPostSelected(id_post);
        var element_back = document.getElementById("pop-up-background-dark-full-width");
        element_back.classList.add("see-background-full-dark");
    }

    const hidePopUpDelete = async () => {
        var element_back = document.getElementById("pop-up-background-dark-full-width");
        element_back.classList.remove("see-background-full-dark");
    }

    const seePopUpUpdate = (id_post) => {
        setPostSelected(id_post);

        let id_post_n_v = {
            target:
            {
                name: "id",
                value: id_post
            }
        }
        handlerInputs(id_post_n_v);

        var element_back = document.getElementById("pop-up-background-dark-full-width-delete");
        element_back.classList.add("see-background-full-dark");
    }



    const hidePopUpUpdate = async () => {
        var element_back = document.getElementById("pop-up-background-dark-full-width-delete");
        element_back.classList.remove("see-background-full-dark");
    }

    const deletePost = async () => {
        let data_filter = props.allPosts.filter(post => post.id !== postSelected);
        props.dispatch({ type: LOAD_POSTS, payload: data_filter });
        hidePopUpDelete();
    }

    const handlerInputs = (e) => {
        setUpdate({ ...Update, [e.target.name]: e.target.value });
        console.log("update", Update)
    }





    const updatePost = () => {

        let data_filter = props.allPosts.filter(post => post.id !== postSelected);

        props.allPosts.filter(post => post.id == postSelected);
        data_filter.unshift(Update)


        props.dispatch({ type: LOAD_POSTS, payload: data_filter });
        hidePopUpUpdate()

    }

    return (
        <div className='max-width-container-1200 home-container'>
            <div className='home-section-all-posts'>

                {console.log("props.allPosts", props.allPosts)}
                {props.allPosts.map(run =>

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
                        <div className='button-each-post-all-posts'>
                            <div onClick={() => seePopUpUpdate(run.id)} className='padding-each-post-update'>
                                Actualizar
                            </div>
                            <div onClick={() => seePopUpDelete(run.id)} className='padding-each-post-delete'>
                                Eliminar
                            </div>
                        </div>
                    </div>
                )}
            </div>



            <div id="pop-up-background-dark-full-width" className=''>
                <div className="pop-up-div-info" id="pop-up-black-div-info">
                    <div className="pop-up-div-info-title-cross">
                        <div className="closeWindow" id="X" onClick={() => hidePopUpDelete()}>X</div>
                        <p className='pop-up-div-info-title'>¿Estas seguro de borrar este post?</p>
                    </div>
                    <div className='buttons-pop-up'>
                        <div onClick={() => hidePopUpDelete()} className='button-no-delete'>
                            No
                        </div>
                        <div onClick={() => deletePost()} className='button-delete'>
                            Sí
                        </div>
                    </div>
                </div>
            </div>


            <div id="pop-up-background-dark-full-width-delete" className=''>
                <div className="pop-up-div-info" id="pop-up-black-div-info">
                    <div className="pop-up-div-info-title-cross">
                        <div className="closeWindow" id="X" onClick={() => hidePopUpUpdate()}>X</div>
                    </div>
                    <div className='pop-up-div-info-update'>
                        <p className='pop-up-div-info-update-title'>Actualiza los datos del post</p>
                        <input className='posts-inputs-update' type="text" name="title" title="name" lenght="30" onChange={handlerInputs} placeholder="Título"></input>
                        <input className='posts-inputs-update' type="text" name="userId" title="name" lenght="30" onChange={handlerInputs} placeholder="Usuario"></input>
                        <textarea className='posts-inputs-update' type="text" name="body" title="name" lenght="30" onChange={handlerInputs} placeholder="Descripción"></textarea>
                        <div></div>
                        <div onClick={() => updatePost()} className='posts-inputs-update-send-data'>Actualizar</div>
                    </div>

                    <div className='pop-up-update'>
                    </div>
                </div>
            </div>


        </div>

    )
}

export default connect((state) => ({
    allPosts: state.allPosts,

}))(Home);