import nc from "next-connect"
import db from "../../utils/DB"
import Product from "../../models/Products"
import User from "../../models/User"

import data from "../../utils/data"

const handler = nc()

handler.get(async (req, res) => {
  await db.connect()

  await User.deleteMany()
  await User.insertMany(data.users)

  await Product.deleteMany()
  await Product.insertMany(data.products)

  await db.disconnect()
  res.send({ message: "Database Seeded" })
})

export default handler
