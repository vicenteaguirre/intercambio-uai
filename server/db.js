const MongoClient = require('mongodb').MongoClient;
const url = "mongodb+srv://grupo7:internacionaluai@base.zxygi.mongodb.net/db?retryWrites=true&w=majority";
const client = new MongoClient(url)

async function main(client){
    try {
        await client.connect();
        console.log("Database connected!");
        //await listDatabases(client);
        await printDatabase(client);

    } catch (e) {  
        console.error(e)
    } finally {
        await client.close()
    }

}
async function listDatabases(client){
    const databaseList = await client.db().admin().listDatabases()

    console.log("Databases:")
    databaseList.databases.forEach(db => {
        console.log('- '+ db.name)
    });
}

async function printDatabase(client){
    const cursor = client.db("db").collection("testimonios").find()
    const results = await cursor.toArray()
    results.forEach((results) => {
        console.log(results)
    })
}



main(client).catch(console.error)

module.exports = MongoClient

