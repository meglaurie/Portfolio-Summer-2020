import express from 'express';
import bodyParser from 'body-parser';
import { MongoClient } from 'mongodb';

const app = express();

app.use(bodyParser.json());

const withDB = async (operations, res) => {
  try{
    const client = await MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true});
    const db = client.db('my-react-website');

    await operations(db);

    client.close();

  }catch (error){
    res.status(500).json({message: 'Error connecting ot db', error});
  }

}

app.get('/api/projects/:name', async (req,res) =>{
  withDB(async (db)=> {
    const projectName = req.params.name;

    const projectInfo = await db.collection('projects').findOne({ name: projectName });
    res.status(200).json(projectInfo);
  },res);

})

app.post('/api/projects/:name/upvote', async (req, res) => {
withDB(async (db) => {
  const projectName = req.params.name;

  const projectInfo = await db.collection('projects').findOne({ name: projectName });
  await db.collection('projects').updateOne({name: projectName}, {
    '$set': {
      upvotes: projectInfo.upvotes + 1,
    },
  });
  const updatedProjectInfo = await db.collection('projects').findOne({ name: projectName });

  res.status(200).json(updatedProjectInfo);

}, res);

});

app.post('/api/projects/:name/add-comment', (req,res) =>{
  const { username, text } = req.body;
  const projectName = req.params.name;

  withDB(async (db) => {
    const projectInfo = await db.collection('projects').findOne({ name: projectName });
    await db.collection('projects').updateOne({ name: projectName } , {
        '$set': {
          comments: projectInfo.comments.concat({ username, text }),
        },
    });
    const updatedProjectInfo = await db.collection('projects').findOne({ name: projectName });

    res.status(200).json(updatedProjectInfo);
  }, res);

});

// Actually starts server
app.listen(8000, () => console.log('Listening on port 8000!'));
