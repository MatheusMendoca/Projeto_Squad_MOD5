class produtos {
    static produtosRotas(app) {
        app.get('/produtos', (req, res) => {
            res.send('rota Get produtos')
        })

        app.post('/produtos', (req, res) => {
            res.send('rota Post produtos');
            console.log(req.body);
        })
    }
}

export default produtos