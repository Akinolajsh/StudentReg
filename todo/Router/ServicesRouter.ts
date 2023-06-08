import express, {Router} from "express"
import { getStudent } from "../Controller/ServicesController"

const router:Router = express.Router()

router.route("/").get(getStudent)

export default router