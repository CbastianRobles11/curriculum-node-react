const express = require('express')
const app = express()
const port = 3000

//poner data
const data = require('./data')

//para adicion de la api
const cors = require('cors')

//midlrewares
app.use(cors())



app.get('/cv', async (req, res) => {
  try {
      // console.log(data.length);
      if (data.length===undefined) {
       return await res.json({
            message: "no responde la data"
        })
      }
     await res.json(data)
  } catch (error) {
      console.log(error);
  }
})

app.listen(5001, () => {
  console.log(`Example app listening at http://localhost:5001`)
})
