import { Router } from "express";
import {
  getAll,
  getByCategory,
  getByPriority,
  getByDueDate,
  getOne,
  insertOne,
  updateOne,
  deleteOne,
} from "../controllers/socketController.js";

const router = Router();
/*
router.get("/category/:category", getByCategory);
router.get("/priority/:priority", getByPriority);
router.get("/dueDate/:dueDate", getByDueDate);
router.put("/:socketId", updateOne);*/
router.post("/", insertOne);
router.get("/:socketId", getOne);
router.get("/", getAll);
router.delete("/:socketId", deleteOne);

export default router;
