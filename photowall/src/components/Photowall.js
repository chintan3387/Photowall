import React, {Component} from 'react';
import Photo from './Photo';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

// function Photowall(props) {
//     return  <div className="photoGrid">
//                 {props.photos.map((photo, index) => <Photo photo={photo}  key={index}/>)}
//             </div>
// }

export default class Photowall extends Component {
    render() {
        return (
            <div>
                {/*<button className='addIcon' onClick={this.props.onNavigate}>  </button>*/}
                <Link className="addIcon" to="/AddPhoto"></Link>
                <div className='photoGrid'>
                    {this.props.photos.map((photo, index) => <Photo photo={photo} onRemovePhoto={this.props.onRemovePhoto} key={index}/>)}
                </div>
            </div>
        );
    }
}

Photowall.propTypes = {
    photos: PropTypes.array.isRequired,
    onRemovePhoto: PropTypes.func.isRequired
}

// export default Photowall