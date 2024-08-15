import { Note } from '../models'
import shortid from 'shortid'

const DATA: Array<Note> = []

for (let i = 1; i <= 20; i++) {
  DATA.push({
    id: shortid.generate(),
    title: "The title " + i,
    body: "The body " + i
  })
}

export default DATA
