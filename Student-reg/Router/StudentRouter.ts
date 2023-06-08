import express, { Router } from "express";
import {
  deleteStudent,
  getSingleStudent,
  registerStudent,
  updateStudent,
  viewStudents,
} from "../Controller/StudentController";

const router: Router = express.Router();

router.route("/").get(viewStudents);
router.route("/get/:id").get(getSingleStudent);
router.route("/delete/:id").delete(deleteStudent);
router.route("/update/:id").patch(updateStudent);
router.route("/register/").post(registerStudent);

export default router;
