'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const trackSchema = new Schema({
  profileID: {type: Schema.Types.ObjectId, required: true},
  title: {type: String, required: true},
  albumID: {type: Schema.Types.ObjectId, required: true},
  url: {type: String, required: true},
  awsKey: {type: String, required: true},
  awsURI: {type: String, required: true}
});

const Track = module.exports = mongoose.model('track', trackSchema);
