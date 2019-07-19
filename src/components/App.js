import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
    this.handleAdopt = this.handleAdopt.bind(this)
  }

  handleFilter = (event) => {
    this.setState({
      filters: {
        type: event.target.value
      }
    })
  }

  handleClick = () => {
    if (this.state.filters.type === "all") {
      fetch("/api/pets")
      .then(resp => resp.json())
      .then(data => {
        this.setState({
          pets: data
        })
      })
    }
    else {
      fetch(`/api/pets?type=${this.state.filters.type}`)
      .then(resp => resp.json())
      .then(data => {
        this.setState({
          pets: data
        })
      })
    }
  }

  handleAdopt(id) {
    const pet = this.state.pets.find(pet => pet.id === id)
    pet.isAdopted = true
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.handleFilter} onFindPetsClick={this.handleClick} />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.handleAdopt} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
