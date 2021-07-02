const pool = require('./_pool')
const { sql } = require('slonik')

module.exports = async (req, res) => {
  const data = await pool.one(sql`select * from test_data where id = ${req.query.id};`)
  res.json({
    disclaimer: 'Warning! This data is absolutely fake and does not belong to any person. All coincidences with any person, living or dead, are incidental.',
    data
  })
}