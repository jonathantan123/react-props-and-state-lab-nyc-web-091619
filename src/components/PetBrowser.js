import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  renderPets= () => {
    
    return this.props.pets.map(pet=> {
      console.log(pet)
      return <Pet
              key={pet.id}
              {...pet}
              onAdoptPet={this.props.onAdoptPet}
      />
    })
  }




  render() {
    return <div className="ui cards"> 
    {this.renderPets()}
    </div>
  }




}

export default PetBrowser
