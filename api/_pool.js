const { createPool } = require('slonik')

module.exports = createPool(process.env.PGURL);