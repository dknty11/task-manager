import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Input from '../../../components/UI/Input/Input'
import Button from '../../../components/UI/Button/Button'
import './NewTask.css'
import * as actions from '../../../store/actions/index'

class NewTask extends Component {
  state = {
    controls: {
      title: {
        elementType: 'input',
        elementConfig: {
          type: 'title',
          placeholder: 'Task title...'
        },
        value: '',
        touched: false
      },
      description: {
        elementType: 'input',
        elementConfig: {
          type: 'description',
          placeholder: 'Task description...'
        },
        value: '',
        touched: false
      },
      complete: {
        elementType: 'select',
        elementConfig: {
          options: [
            { value: 'true', displayValue: 'true' },
            { value: 'false', displayValue: 'false' }
          ]
        },
        value: 'true',
        touched: false
      }
    }
  }

  onInputChangeHandler = (event, controlName) => {
    const updatedControls = {
      ...this.state.controls,
      [controlName]: {
        ...this.state.controls[controlName],
        value: event.target.value,
        touched: true
      }
    }
    this.setState({ controls: updatedControls })
  }

  onCreateHandler = (e) => {
    // Remember submit form will cause page reload by default
    e.preventDefault();

    const title = this.state.controls.title.value
    const description = this.state.controls.description.value
    const complete = this.state.controls.complete.value
    this.props.onCreate(title, description, complete)
    this.props.history.push('/tasks')
  }

  render () {
    const formElementArray = [];
    for (let key in this.state.controls) {
      formElementArray.push({
        id: key,
        config: this.state.controls[key]
      })
    }
    let form = formElementArray.map(formElement => (
      <Input
        key={formElement.id}
        elementConfig={formElement.config.elementConfig}
        elementType={formElement.config.elementType}
        value={formElement.config.value}
        changed={(event) => this.onInputChangeHandler(event, formElement.id)}
      />
    ))
    return (
      <div className="NewTask">
        <form action="" onSubmit={this.onCreateHandler}>
          {form}
          <Button btnType="Success">Create</Button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    tasks: state.tasks.taskList
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onCreate: (title, description, complete) => {
      dispatch(actions.creatingTasks(title, description, complete))
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NewTask));