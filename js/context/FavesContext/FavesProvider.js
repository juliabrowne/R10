import React, { Component } from 'react'
import realm from '../../config/models'

const FavesContext = React.createContext()

class FavesProvider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      faveIds: []
    }
  }

  componentDidMount() {
      this.queryFaves()
  }

  createFave(id, date) {
    let fave = 
    realm.write(() => {
        realm.create('Fave', {
            id: id,
            faved_on: date
        })
        let allFaves = realm.objects('Fave')
        this.setState({faveIds: allFaves})
    })
  }

  deleteFave(id) {
    realm.write(() => {
        realm.delete(fave, {id: id}).then(() => {
        let allFaves = realm.objects('Fave')
        this.setState({faveIds: allFaves})
        })
    })
  }

  queryFaves() {
    realm.write(() => {
        let allFaves = realm.objects('Fave')
        this.setState({faveIds: allFaves})
    })
  }

  render() {
    return (
      <FavesContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </FavesContext.Provider>
    )
  }
}

export { FavesProvider }
export default FavesContext