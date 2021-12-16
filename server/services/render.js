const axios = require('axios')

exports.homeRoutes = (req, res) => {
    axios.get('http://localhost:3000/api/users')
            .then(response => {
                res.render('index', {users: response.data})
            })
            .catch(err => {
                res.send(err)
            })


}

exports.add_users = (req, res) => {
    res.render('add_user')
}

exports.update_user = (req, res) => {
    axios.get('http://localhost:3000/api/users', {params:{id:req.query.id}})
            .then(responseData => {
                res.render('update_user', {user: responseData.data})
            })
            .catch(err => {
                res.send(err)
            })
    //res.render('update_user')
}