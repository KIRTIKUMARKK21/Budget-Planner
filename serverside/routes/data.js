//import express from "express"
// controller imports
import {fetchsymbols,lookup,fetchData, newRecord, addToRecord,deleteStocks,getStocks ,Addtostock,getCurrentprice} from "../controllers/dataController.js"
// middleware imports
import verifyToken from "../middlewares/verifyToken.js"

import { express } from "express";

const router = express.Router()

// routers
router.post('/newrecord', verifyToken, newRecord)
router.put('/addtorecord/:userID', verifyToken, addToRecord)
router.get('/:id', verifyToken,fetchData)
router.get("/batch/:symbols", verifyToken,fetchsymbols)
router.get("/lookup/:symbol",verifyToken,lookup)
router.post("/getCurrentprice",verifyToken,getCurrentprice)
router.post("/removestock/:userID",verifyToken, deleteStocks)
router.put("/addstock/:userID",verifyToken, Addtostock)
router.post("/getstock/:userID",verifyToken, getStocks)


export default router;