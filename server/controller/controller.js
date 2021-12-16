const Userdb = require('../model/model')
var userdb = require('../model/model')

// create and save new user
exports.create = (req, res) => {
    // validate request
    if(!req.body) {
        res.status(400).send({message:"Content cannot be empty."})
        return
    }


    // new user
    const user = new Userdb({
        name: req.body.name,
        email:req.body.email,
        gender:req.body.gender,
        status:req.body.status
    })

// save user in the database
user.save(user)
    .then(data => {

        res.redirect('/')
    })
    .catch(err => {
        res.status(500).send({
            message:err.message || 'Some error occured while creating a create operation'
        })
    })

}

// retrieve and return all users
exports.find = (req, res) => {

    if(req.query.id) {
        const id=req.query.id;

        Userdb.findById(id)
                .then(data => {
                    if(!data) {
                        res.status(404)
                            .send({message: 'Cannot find user.'})
                    }
                    res.send(data)
                })
                .catch(err => {
                    res.status(500)
                        .send({message: 'Error finding user.'})
                })

    } else {
        Userdb.find()
        .then(user => {
            res.send(user)
            // res.render(user)
        })
        .catch(err => {
            res.status(500).send({message: err.message || 'There is problem fetching data.'})
        })
    }

    
}


// Update user
exports.update = (req, res) => {
    if(!req.body) {
        return res.status(400)
                    .send({message: 'Request cannot be empty.'})
    }

    const id = req.params.id;
    Userdb.findByIdAndUpdate(id, req.body, {useFindAndModify:false})
            .then(data => {
                if(!data) {
                    res.status(404)
                        .send({message: 'Cannot update data with empty request.'})
                } else {
                    res.send(data)
                }
            })
            .catch(err => {
                res.status(500).send({message: 'Error updating data.'})
            })

}

// delete user
exports.delete = (req, res) => {
    const id = req.params.id;

    Userdb.findByIdAndDelete(id)
            .then(data => {
                if(!data) {
                    res.status(404).send({message: `Cannot delete with id: ${id}`})
                } else {
                    res.send({
                        message: 'Data deleted successfully.'
                    })
                }
            })
            .catch(err => {
                res.status(500)
                    send({message: `Problem deleting data.`})
            })

}