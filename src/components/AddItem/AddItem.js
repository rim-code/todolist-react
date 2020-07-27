import React, { Component } from 'react'
import './AddItem.css'

class AddItem extends Component {

    state = {
        name: '',
        age: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })

    }


    handleSubmit = (e) => {

        e.preventDefault();
        if (e.target.name.value === '') {
            return false
        }
        else {
            this.props.addItem(this.state)
            this.setState(
                {
                    name: '',
                    age: ''
                }
            )
        }
       
    }


    render() {

        return (
            <div >
                <form onSubmit={this.handleSubmit}>
                    <input type="text" id="name" placeholder="Enter Name ..." onChange={this.handleChange} value={this.state.name} />

                    <input type="number" id="age" placeholder="Enter Age..." onChange={this.handleChange} value={this.state.age} />

                    <input type="submit" value="Add" />

                </form>


            </div>
        )
    }



}
export default AddItem 