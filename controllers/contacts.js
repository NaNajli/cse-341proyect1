const mongodb = require('../data/database');
//this is the unique object ID that mongo assigns to all this databases entries
const ObjebtId = require('mongodb').ObjectId;

const getAll = async (req ,res )=>
    { 
    // #swagger.tags =['Contacts']     
    const result = await mongodb.getDatabase().db().collection('contacts').find();
    result.toArray().then((contacts) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(contacts);
        

    })}

    const getSingle = async (req ,res )=>
        {   // #swagger.tags =['Contacts']  
            const contactId = new ObjebtId (req.params.id)
            const result = await mongodb.getDatabase().db().collection('contacts').find({_id:contactId});
            result.toArray().then((contacts) => {
            res.setHeader('Content-Type', 'application/json');
            res.status(200).json(contacts[0]);
                
        
            })};

    const createContact = async(req ,res )=>
        {   // #swagger.tags =['Contacts']  
            const contact = {
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                email: req.body.email,
                favoritecolor: req.body.favoritecolor,
                birthday: req.body.birthday,

            };
            const response = await mongodb.getDatabase().db().collection('contacts').insertOne(contact);
            if (response.acknowledged)
                {
                    res.status(204).send();
                }
            else{
                res.status(500).json(response.error || 'Some error ocurred while updating the contact')
            }    
        }; 
        
        
        const updateContact = async(req ,res )=>
            {   // #swagger.tags =['Contacts']  
                const contactId = new ObjebtId (req.params.id)
                const contact = {
                    firstname: req.body.firstname,
                    lastname: req.body.lastname,
                    email: req.body.email,
                    favoritecolor: req.body.favoritecolor,
                    birthday: req.body.birthday,
    
                };
                const response = await mongodb.getDatabase().db().collection('contacts').replaceOne({_id:contactId},contact);
                if (response.modifiedCount > 0)
                    {
                        res.status(204).send();
                    }
                else{
                    res.status(500).json(response.error || 'Some error ocurred while updating the contact')
                }    
            };
            
         
            const deleteContact = async(req ,res )=>
                {   // #swagger.tags =['Contacts']  
                    const contactId = new ObjebtId (req.params.id)
                    const contact = {
                        firstname: req.body.firstname,
                        lastname: req.body.lastname,
                        email: req.body.email,
                        favoritecolor: req.body.favoritecolor,
                        birthday: req.body.birthday,
        
                    };
                    const response = await mongodb.getDatabase().db().collection('contacts').deleteOne({_id:contactId});
                    if (response.deletedCount> 0)
                        {
                            res.status(204).send();
                        }
                    else{
                        res.status(500).json(response.error || 'Some error ocurred while deleting the contact')
                    }    
                };       
    
         module.exports =
         {getAll,
          getSingle,
          createContact,
          updateContact,
          deleteContact
         };