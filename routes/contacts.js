const express =require('express');
const router = express.Router();
const contactsController = require('../controllers/contacts.js');

router.get('/', contactsController.getAll);

router.get('/:id' , contactsController.getSingle);

// POST route to create a new contact
router.post('/' , contactsController.createContact);
// route to update a contact
router.put('/:id' , contactsController.updateContact);
// route to delete a contact
router.delete('/:id' , contactsController.deleteContact);

module.exports = router;