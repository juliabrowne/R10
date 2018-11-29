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

  createFave = id => {
    try {
      const fave = realm.write(() => {
        realm.create('Fave', {
          id: id,
          faved_on: new Date()
        })
      })
    } catch (err) {
      console.log(err)
    }
    this.queryFaves()
  }

  deleteFave = id => {
    try {
      realm.write(() => {
        const fave = realm.objects('Fave').filtered('id ==$0', id)
        realm.delete(fave)
      })
    } catch (err) {
      console.log(err)
    }
    this.queryFaves()
  }

  queryFaves = () => {
    try {
      const allFaves = realm.objects('Fave')
      this.setState({ faveIds: allFaves })
    } catch (err) {
      console.log(err)
    }
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
