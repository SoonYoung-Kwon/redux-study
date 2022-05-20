import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addArticle } from '../actions';

const mapDispatchToProps = dispatch => { // dispatch 표현 방법 공부
    return {
        addArticle: article => dispatch(addArticle(article))
    }
}

class Form extends Component {

    constructor() {
        super()
        this.state = {
            title: "",
            id: 1
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        const { title, id } = this.state;
        this.props.addArticle({ title, id }); // props(Redux action)에 addArticle 전달
        this.setState({
            title: "",
            id : id + 1
        });
    }


    render() {

        const { title } = this.state;

        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        value={title}
                        onChange={this.handleChange}
                    />
                </div>
                <button type="submit" className="btn btn-success btn-lg">
                    SAVE
                </button>
            </form>
        )
    }
}

export default connect(null, mapDispatchToProps)(Form); // null은 mapStateToProps 대신 매개변수