import React, {Component} from 'react';
import Title from './Title';
import Photowall from './Photowall';
import AddPhoto from './AddPhoto';
import {Route} from 'react-router-dom';

export default class Main extends Component {
    constructor() {
     super();
     this.state = {
        posts: [
            {
                id: "0",
                description: 'Maroon Bells!!',
                imageLink: 'https://static1.squarespace.com/static/5757578159827edd82d06570/t/5a37c441e4966b79a0de2368/1513604168500/Maroon+Bells+Sunrise.jpg?format=2500w'
            },
            {
                id: '1',
                description: 'Northen Lights!!',
                imageLink: 'https://cdn.theatlantic.com/assets/media/img/photo/2017/09/landscapes-of-norway/n03_844052000/main_900.jpg?1507146797'
            },
            {
                id: '2',
                description: 'Kedarnath Temple India!',
                imageLink: 'http://cdn.findmessages.com/images/2016/02/587-lord-shiva-is-worshiped-at-kedarnath-temple.jpg'
            }
        ]
     };

     this.removePhoto = this.removePhoto.bind(this);
    }

    removePhoto(photoRemoved) {
        console.log(photoRemoved.description);
        this.setState((state) => ({
            posts: state.posts.filter(photo => photo !== photoRemoved)
        }))
    }

    render() {
        return (
            <div>
                <Route exact path='/'  render={() => (
                    <div>
                        <Title title={'PhotoWall!!!'} />
                        <Photowall photos={this.state.posts} onRemovePhoto={this.removePhoto} onNavigate={this.navigate}/>
                    </div>
                )} />
                <Route path='/AddPhoto' component={AddPhoto}/>
            </div>
        )
    }
}
