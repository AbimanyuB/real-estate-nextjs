import express from "express";
import { getUsers, getUser, updateUser, deleteUser, savePost, profilePosts } from "../controllers/user.controllers.js";
import {verifyToken} from '../middleware/verifyToken.js';

const router = express.Router();

router.get('/', getUsers);
router.get('/:id', verifyToken, getUser);
router.put('/:id', verifyToken, updateUser);
router.delete('/:id', verifyToken, deleteUser);
router.post('/save', verifyToken, savePost);
router.get('/profile/posts', verifyToken, profilePosts);

export default router;