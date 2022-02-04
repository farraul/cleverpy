import { connect } from 'react-redux';
import React, { useState } from 'react';
import { LOAD_POSTS } from '../../redux/types';

interface IData {
    id: number;
}

interface IModalUpdate {
    postIdSelected: number;
    updateData: { id: number, title: string, body: string, userId: number };
    allPosts: IData[];
    dispatch: ( dispatch: { type: string, payload: IData[] } ) => void;
    setShowModalUpdate: ( showModalUpdate: boolean ) => void;
}

const ModalUpdate = ( props: IModalUpdate ) => {

    const postIdSelected = props.postIdSelected;
    const [update, setUpdate] = useState( props.updateData );

    const handlerInputs = ( e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement> ) => {
        setUpdate({ ...update, [e.target.name]: e.target.value });
    }

    const updatePost = () => {
        let data_filter = props.allPosts.filter( ( post: { id: number } ): boolean => post.id !== postIdSelected);
        props.allPosts.filter( ( post: { id: number } ) => post.id === postIdSelected );
        data_filter.unshift( update )
        props.dispatch({ type: LOAD_POSTS, payload: data_filter });
        hidePopUpUpdate()
    }

    const hidePopUpUpdate = () => {
        props.setShowModalUpdate( false )
    }

    return (
        <div className='see-background-full-dark'>
            <div className="pop-up-info" id="pop-up-black-info">
                <div className="pop-up-info-title-cross">
                    <div className="closeWindow" id="X" onClick={() => hidePopUpUpdate()}>X</div>
                </div>
                <div className='pop-up-info-update'>
                    <p className='pop-up-info-update-title'>Actualiza los datos del post</p>
                    <input className='posts-inputs-update' type="text" name="title" title="name" onChange={handlerInputs} placeholder={"Título"}></input>
                    <input className='posts-inputs-update' type="number" name="userId" title="name" onChange={handlerInputs} placeholder="Usuario"></input>
                    <textarea className='posts-inputs-update' name="body" title="name" onChange={handlerInputs} placeholder="Descripción"></textarea>
                    <div onClick={() => updatePost()} className='posts-inputs-update-send-data'>Actualizar</div>
                </div>
            </div>
        </div>
    )

}
export default connect( ( state: { allPosts: IData[] } ) => ({
    allPosts: state.allPosts,
}))( ModalUpdate );


