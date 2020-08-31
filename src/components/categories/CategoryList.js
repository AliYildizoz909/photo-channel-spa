import React, { Component } from 'react'
import { connect } from "react-redux"
import { bindActionCreators } from 'redux'
import * as categoryAsyncActions from '../../redux/actions/category/categoryAsyncActions'
import { ListGroup } from 'react-bootstrap';

class CategoryList extends Component {

    componentDidMount() {
        this.props.actions.getCategories();
    }
    selectCategory = (c) => {
        this.props.actions.currentCategory(c)
    }
    render() {
        return (
            <div>
                <ListGroup>
                    {

                        this.props.categories.map(c => (
                            <ListGroup.Item active={c.id === this.props.currentCategory.id ? true : false} onClick={() => this.selectCategory(c)} key={c.id}>{c.name}</ListGroup.Item>
                        ))
                    }
                    
                </ListGroup>
            </div>
        )
    }
}
function mapStateToProps(state) {

    return { categories: state.categoryListReducer, currentCategory: state.changeCategoryReducer }
}
function mapDispatchToProps(dispatch) {
    return {
        actions: {
            getCategories: bindActionCreators(categoryAsyncActions.getCategories, dispatch),
            currentCategory: bindActionCreators(categoryAsyncActions.changeCategory, dispatch),
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);