import React, {Component} from 'react';


export default class AddPhoto extends Component {
    constuctor() {
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(event.target.elements.link.value);
        console.log(event.target.elements.description.value);
    }

    render() {
        return (
            <div>
                <h1>PhotoWall!!</h1>
                <div className='form'>
                    <form onSubmit={this.handleSubmit}>
                        <input type='text' name='link' placeholder='Link...'/>
                        <input type='text' name='description' placeholder='Description' />
                        <button>Add</button>
                    </form>
                </div>
            </div>
        )
    }
}