import React, { Component } from 'react'
import axios from 'axios'
import './Search.sass'
import ReactSVG from 'react-svg'

class Search extends Component {
  constructor (props) {
    super(props)
    this.state = {
      placeid: ''
    }

    this.inputChange = this.inputChange.bind(this)
    this.clearState = this.clearState.bind(this)
    this.searchPlaceid = this.searchPlaceid.bind(this)
  }

  inputChange(e) {
    this.setState({placeid: e.target.value})
  }

  clearState() {
    this.setState({placeid: ''})
  }

  searchPlaceid (e) {
    e.preventDefault()
    if (this.state.placeid == '') { return }

    let that = this
    axios.get(`/places/${this.state.placeid}`)
    .then((response) => {
      that.props.setPlace(response.data)
    })
    .catch(() => {
      that.props.setError()
    })
  }

  render() {
    return (
      <form className='search' onSubmit={this.searchPlaceid}>
        <fieldset>
          <ReactSVG
           className='search-icon'
           src='/images/search_icon.svg' />
           {
            this.state.placeid != '' &&
            (
              <ReactSVG
               className='exit-icon'
               src='/images/exit_icon.svg'
               onClick={this.clearState} />
            )
           }
          <input type='text'
           onChange={this.inputChange}
           value={this.state.placeid}
           placeholder='Enter a place ID ...' />
        </fieldset>
      </form>
    )
  }
}

export default Search
