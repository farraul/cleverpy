import { connect } from 'react-redux';
import React, { useState } from 'react';
import { LOAD_POSTS } from '../../redux/types';

const ModalDelete = (props) => {

    const postIdSelected=props.postIdSelected;
    const [update, setUpdate] = useState(props.updateData);

    const handlerInputs = (e) => {
        setUpdate({ ...update, [e.target.name]: e.target.value });
    }

    const updatePost = () => {
        let data_filter = props.allPosts.filter(post => post.id !== postIdSelected);
        props.allPosts.filter(post => post.id === postIdSelected);
        data_filter.unshift(update)
        props.dispatch({ type: LOAD_POSTS, payload: data_filter });
        hidePopUpUpdate()
    }

    const hidePopUpUpdate = () => {
        props.setShowModalUpdate(false)
    }

    return (
        <div className='see-background-full-dark'>
            <div className="pop-up-info" id="pop-up-black-info">
                <div className="pop-up-info-title-cross">
                    <div className="closeWindow" id="X" onClick={() => hidePopUpUpdate()}>X</div>
                </div>
                <div className='pop-up-info-update'>
                    <p className='pop-up-info-update-title'>Actualiza los datos del post</p>
                    <input className='posts-inputs-update' type="text" name="title" title="name" lenght="30" onChange={handlerInputs} placeholder={"Título"}></input>
                    <input className='posts-inputs-update' type="number" name="userId" title="name" lenght="30" onChange={handlerInputs} placeholder="Usuario"></input>
                    <textarea className='posts-inputs-update' type="text" name="body" title="name" lenght="30" onChange={handlerInputs} placeholder="Descripción"></textarea>
                    <div></div>
                    <div onClick={() => updatePost()} className='posts-inputs-update-send-data'>Actualizar</div>
                </div>
            </div>
        </div>
    )

}
export default connect((state) => ({
    allPosts: state.allPosts,
}))(ModalDelete);


