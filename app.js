const expres = require('express')
const bodyParser = require('body-parser')

const app = expres()
const port = 3000

app.use(bodyParser.json())
let taches =[
    {id:1, desc:'Faire les coures'},
    {id:2, desc:'prépareer see bagages'},
    {id:3, desc:'Aller au sport'}
]

app.listen(port, ()=>{
    console.log(`le serveur a démarre sur le port  :  ${port}`);
    
})
//afficher les taches 
app.get('/taches',(req,res)=>{
    const tacheRef = taches.map(tache => `/tache/${tache.id}`)
    res.json(tacheRef)
})

app.get('/tache/:id', (req,res)=> {
    const tacheId = parseInt(req.params.id)
    const tache = taches.find(tache => tache.id === tacheId)
     if (tache) {
        res.json(tache)
     }else {
        res.status(404).json({error: 'tache non trouvé'})
     }

})

app.post('/taches', (req,res)=> {
    const newTache = {
        id: taches.length+1,
        desc:req.body.desc
    }
    taches.push(newTache)
    res.status(201).json({Message: 'Tache Ajouteé', tache:newTache})
})

app.put('/tache/:id', (req,res)=> {
    const tacheId = parseInt(req.params.id)
    const tache = taches.find(tache => tache.id === tacheId)
    if (tache) {
        tache.desc =req.body.desc
        res.json({Message: 'Tache mis à jour', tache })
    }else {
        res.status(404).json({error: 'tache non trouvé'})
    }
})

app.delete('/tache/:id', (req,res)=> {
    const tacheId = parseInt(req.params.id)
    taches = taches.filter(tache => tache.id !== tacheId)
    res.json({Message: 'Tache suppriméé'})
})