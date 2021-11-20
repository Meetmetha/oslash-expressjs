const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const shortcutSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Auth',
      index: true,
      required: true,
    },
    shortlink: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        default: null,
    },
    url: {
        type: String,
        required: true,
    },
      tags: {
        type: Array,
        default: null,
      }
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
shortcutSchema.plugin(paginate);

/**
 * @typedef Shortcut
 */
const Shortcut = mongoose.model('Shortcut', shortcutSchema);

module.exports = Shortcut;
