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

  createFave(id) {
    let fave = realm.write(() => {
      realm.create('Fave', {
        id: id,
        faved_on: new Date()
      })
      // let allFaves = realm.objects('Fave')
      // this.setState({ faveIds: allFaves })
    })
    this.queryFaves()
  }

  deleteFave(id) {
    realm.write(() => {
      let fave = realm.objects('Fave').filtered('id ==$0', id)
      realm.delete(fave)


      // realm.delete(realm.objectForPrimaryKey('Fave', id))
      // let allFaves = realm.objects('Fave')
      // this.setState({ faveIds: allFaves })
    })
    this.queryFaves()
  }

  queryFaves() {
    const allFaves = realm.objects('Fave')
    this.setState({ faveIds: allFaves })
  }

  render() {
    return (
      <FavesContext.Provider
        value={{
          ...this.state,
          createFave: this.createFave.bind(this),
          deleteFave: this.deleteFave.bind(this),
          queryFaves: this.queryFaves.bind(this)
        }}
      >
        {this.props.children}
      </FavesContext.Provider>
    )
  }
}

export { FavesProvider }
export default FavesContext
