const expres = require('express')
const bodyParser = require('body-parser')

const app = expres()
const port = 3000

app.use(bodyParser.json())
let tache =[
    {id:1, desc:'Faire les coures'},
    {id:2, desc:'prépareer see bagages'},
    {id:3, desc:'Aller au sport'}
]

app.listen(port, ()=>{
    console.log(`'le serveur a démarre sur le : ' ${port}`);
    
})
//afficher les taches 
app.get('/taches',(req,res)=>{
    const tacheRef = tache.map(tache => `/tache/${tache.id}`)
    res.json(tacheRef)
})