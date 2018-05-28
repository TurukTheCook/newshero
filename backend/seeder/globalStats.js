import mongoose from 'mongoose'
import globalStats from '../components/models/globalStats'

mongoose.connect('mongodb://localhost:27017/newshero', {}, (err) => {
    if (err) { throw err; }
    else console.log("Connected to database..")
})

let newGlobalStats = new globalStats
newGlobalStats.save()
  .then(() => exit())
  .catch(err => console.log(err))

let exit = () => {
  console.log('Seeder done.')
    mongoose.disconnect()
}