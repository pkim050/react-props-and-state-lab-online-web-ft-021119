import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  handlePets(pets) {
    let petsArray = pets.map(pet => {return <Pet pet={pet} onAdoptPet={this.props.onAdoptPet} />})
    return petsArray
  }
  render() {
    return <div className="ui cards">{this.handlePets(this.props.pets)}</div>
  }
}

export default PetBrowser
