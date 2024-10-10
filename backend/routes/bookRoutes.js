import express from 'express';
import {createBook, getAllBooks, deleteBook, updateBook } from '../controllers/bookController.js';

const router = express.Router();

router.get('/', getAllBooks);

router.post('/', createBook);

router.delete('/:id', deleteBook);

router.update('/:id', updateBook)
export default router