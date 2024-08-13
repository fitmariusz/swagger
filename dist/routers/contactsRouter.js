"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const contactController_1 = require("../controller/contactController");
const router = (0, express_1.Router)();
/**
 * @swagger
 * components:
 *   schemas:
 *     Contact:
 *       type: object
 *       required:
 *         - name
 *         - number
 *       properties:
 *         id:
 *           type: integer
 *           description: The auto-generated ID of the contact
 *         name:
 *           type: string
 *           description: The name of the contact
 *         number:
 *           type: integer
 *           description: The phone number of the contact
 *       example:
 *         id: 1
 *         name: "John Doe"
 *         number: 123456789
 */
/**
 * @swagger
 * /contacts:
 *   get:
 *     summary: Get a list of contacts
 *     tags: [Contacts]
 *     responses:
 *       200:
 *         description: List of contacts
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Contact'
 */
router.get('/', contactController_1.getContacts);
/**
 * @swagger
 * /contacts:
 *   post:
 *     summary: Add a new contact
 *     tags: [Contacts]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Contact'
 *     responses:
 *       201:
 *         description: The contact was successfully added
 */
router.post('/', contactController_1.addContact);
/**
 * @swagger
 * /contacts/{id}:
 *   delete:
 *     summary: Delete a contact by ID
 *     tags: [Contacts]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The contact ID
 *     responses:
 *       204:
 *         description: The contact was deleted
 *       404:
 *         description: The contact was not found
 */
router.delete('/:id', contactController_1.deleteContact);
exports.default = router;
