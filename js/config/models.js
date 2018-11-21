import Realm from 'realm'

const FaveSchema = {
    name: 'Fave',
    primaryKey: 'id',
    properties: {
        id: 'string',
        faved_on: 'date',
    }
}

const realm = new Realm({
    schema: [FaveSchema]
})


const createFave = () => {
    let fave = 
    realm.write(() => {
        realm.create('Fave', {
            id: '',
            faved_on: new Date()
        })
    })
}

const deleteFave = () => {
    realm.write(() => {
        realm.delete(fave)
    })
}

let faves = realm.objects('Fave')

const queryFave = () => {
    realm.write(() => {
}}






export default realm