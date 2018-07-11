import React, {Component} from 'react';
import PropTypes from 'prop-types';


// function Photo (props) {
//     const photo = props.photo;
//     return <figure className='figure'>
//                 <img className= 'photo' src={photo.imageLink}   alt={photo.description}/>
//                 <figurecaption><p> {photo.description}</p></figurecaption>
//                 <div className='buttonContainer'>
//                     <button className='remove-button'>Remove</button>
//                 </div>
//             </figure>
// }

// export default Photo;

export default class Photo extends Component {
    render () {
        const photo = this.props.photo;
        return (
            <figure className='figure'>
                <img className= 'photo' src={photo.imageLink}   alt={photo.description}/>
                <figurecaption><p> {photo.description}</p></figurecaption>
                <div className='buttonContainer'>
                    <button className='remove-button' onClick={() => {
                        this.props.onRemovePhoto(photo);
                    }}>Remove</button>
                </div>
            </figure>
        );
    }
}

Photo.propTypes = {
    photo: PropTypes.object.isRequired,
    onRemovePhoto: PropTypes.func.isRequired
}