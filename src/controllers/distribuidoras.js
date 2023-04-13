//Matheus

class Distribuidora {
    static distribuidoraRotas(app) {
        app.get('/distribuidora', (req, res) => {
            res.send('rota Get dustribuidora')
        })

        app.post('/distribuidora', (req, res) => {
            res.send('rota Post distribuidora');
            console.log(req.body);
        })

    }

    
}

export default Distribuidora 
