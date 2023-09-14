import {Component} from 'react'
import './index.css'
import {AiOutlineSearch} from 'react-icons/ai'
import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  changeSearch = e => {
    this.setState({searchInput: e.target.value})
  }

  render() {
    const {destinationsList} = this.props
    const {searchInput} = this.state
    const filterData = destinationsList.filter(item =>
      item.name.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="card-heading">Destination Search</h1>
          <div className="search-container">
            <input
              type="search"
              placeholder="Search"
              className="input-element"
              onChange={this.changeSearch}
            />

            <img
              alt="search icon"
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png "
              className="search-icon"
            />
          </div>
          <ul className="list-items-container">
            {filterData.map(item => (
              <DestinationItem details={item} key={item.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default DestinationSearch
