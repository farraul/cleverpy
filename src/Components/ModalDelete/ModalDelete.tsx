import { connect } from 'react-redux';
import { LOAD_POSTS } from '../../redux/types';

interface IData {
    id: number;
}

interface IModalProps {
    postIdSelected: number;
    setShowModalDelete: ( showModalDelete: boolean ) => void;
    allPosts: IData[];
    dispatch: ( dispatch: { type: string, payload: IData[] } ) => void;
}

const ModalDelete = (props: IModalProps) => {

    const postIdSelected = props.postIdSelected;
    const hidePopUpDelete = () => {
        props.setShowModalDelete( false )
    }

    const deletePost = () => {
        let data_filter = props.allPosts.filter( ( post: { id: number } ): boolean => post.id !== postIdSelected);
        props.dispatch({ type: LOAD_POSTS, payload: data_filter });
        props.setShowModalDelete( false )
    }

    return (
        <div className="see-background-full-dark">
            <div className="pop-up-info" id="pop-up-black-info">
                <div className="pop-up-info-title-cross-delete">
                    <div className='close-window-delete'>
                            <div className="closewindow" id="X" onClick={() => hidePopUpDelete()}>X</div>
                    </div>
                    <div>
                        <p className='pop-up-info-title'>¿Estas seguro de borrar este post?</p>
                    </div>
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
    )

}
export default connect( ( state: { allPosts: IData[] } ) => ({
    allPosts: state.allPosts,
}))( ModalDelete );


