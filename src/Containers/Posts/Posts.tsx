import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { LOAD_POSTS } from '../../redux/types';
import axios from 'axios';
import ModalDelete from '../../Components/ModalDelete/ModalDelete';
import ModalUpdate from '../../Components/ModalUpdate/ModalUpdate';

interface IData {
    id: number;
    title: string;
    userId: number;
    body: string;
}

interface IHomeProps {
    dispatch: ( dispatch: { type: string, payload: string } ) => void;
    allPosts: IData[];
}

const Home = (props: IHomeProps) => {

    const [ postIdSelected, setPostIdSelected ] = useState(0);

    const [ updateData, setUpdateData ] = useState<IData>({
        id: 0,
        title: "",
        body: "",
        userId: 0
    });
    const [ showModalDelete, setShowModalDelete ] = useState( false );
    const [ showModalUpdate, setShowModalUpdate ] = useState( false );

    useEffect( () => {
        takePosts();
    }, [] );

    const takePosts = async () => {
            let res = await axios.get( "https://jsonplaceholder.typicode.com/posts" );
            props.dispatch({ type: LOAD_POSTS, payload: res.data });
    }

    const seePopUpDelete = ( id_post: number ) => {
        setShowModalDelete( true);
        setPostIdSelected( id_post );
    }

    const seePopUpUpdate = ( data: IData ) => {
        setPostIdSelected( data.id );
        setShowModalUpdate( true );
        setUpdateData({
            id: data.id,
            userId: data.userId,
            title: data.title,
            body: data.body
        });
    }

    return (
        <div className='all-posts-box home-container'>

            {props.allPosts[0] !== undefined &&
                <div className='home-section-all-posts'>
                    {props.allPosts.map( ( post: IData ) =>
                        <div key={post.id} className='home-section-all-posts-each-post'>
                            <div className='padding-each-post'>
                                <div className='home-section-all-posts-each-post-separation'>
                                    <strong className='uppercase'>{post.title}</strong>
                                </div>
                                <div className='home-section-all-posts-each-post-separation'>
                                    {post.body}
                                </div>
                                <div className='home-section-all-posts-each-post-separation'>
                                    Usuario: {post.userId}
                                </div>
                            </div>
                            <div className='button-each-post-all-posts'>
                                <div onClick={() => seePopUpUpdate(post)} className='padding-each-post-update'>
                                    Actualizar
                                </div>
                                <div onClick={() => seePopUpDelete(post.id)} className='padding-each-post-delete'>
                                    Eliminar
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            }

            {showModalDelete &&
                <ModalDelete setShowModalDelete={setShowModalDelete} postIdSelected={postIdSelected} />
            }
            {showModalUpdate &&
                <ModalUpdate updateData={updateData} postIdSelected={postIdSelected} setShowModalUpdate={setShowModalUpdate} />
            }

        </div>
    )
}

export default connect( ( state: { allPosts: IData[] } ) => ({
    allPosts: state.allPosts
}))( Home );