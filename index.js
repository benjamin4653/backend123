import express from 'express' 
import mongoose, { model, Schema } from 'mongoose'


const uri = "mongodb+srv://user:user@cluster0.nz2al.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

async function run() {
  try {
    // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
    await mongoose.connect(uri, clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
  }
}
run().catch(console.dir);



let userSchema = new Schema (
    {
        name : String,
        old : Number,
    }
)


let videoSchema = new Schema (
  {
      name : String,
      likes : Number,
  }
)

let Video = model('video', videoSchema)

let app = express ()

app.get( '/20', function () {
    console.log( 'hello' )
})

app.post( '/video/:likes/:name', function (req, res) {
  console.log( 'hello' )
  res.send('cool')
})


app.listen(3000)

