import { db } from '../models/index.js';
import { Schema } from 'mongoose';

const gradesSchema = db.mongoose.Schema({
  name: {
    type: String,
    requerid: true,
  },
  subject: {
    type: String,
    requerid: true,
  },
  type: {
    type: String,
    requerid: true,
  },
  value: {
    type: Number,
    requerid: true,
  },
  lastModified: {
    type: Date,
    default: Date.now,
  },
});

Schema.method('toJSON', () => {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

const Grades = db.mongoose.model('students', gradesSchema);

export default Grades;
