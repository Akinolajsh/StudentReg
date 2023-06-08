import express,{Request,Response} from 'express';
import {Database} from "../Utils/Database"
import crypto from "crypto"
import { iData } from '../Utils/interface';


// Viewing Students
export const viewStudents = (req:Request, res:Response):Response => {
    try {
        return res.status(200).json({message: "List of students", data: Database})


        
    } catch (error) {
        return res.status(404).json({message: "Can't Fetch Students",error})

        
    }

}

// register students

export const registerStudent = (req:Request, res:Response):Response=>{
    try {
        const {name,email,password,age} = req.body;
        const ID = crypto.randomUUID()
        // const ID2 = crypto.randomBytes(16).toString("hex")

        let newData:iData={
            id: ID,
            name,
            email,
            password,
            age
        }

        Database.push(newData)

        return res.status(201).json({message:"Student Added",data:newData})

        
    } catch (error) {
        return res.status(404).json({message: "Can't register Student",error})
        
    }

}

export const getSingleStudent= (req:Request, res:Response):Response=>{
    try {
        const {id} = req.params;
        const student =Database.filter((el:iData)=>{
            return el.id === id;

        })

        return res.status(200).json({message: "Single student is being gotten", data: student})
        
    } catch (error) {
        return res.status(404).json({message:"Can't get student",error})
        
    }

}
export const deleteStudent= (req:Request, res:Response):Response=>{
    try {
        const {id} = req.params;
        const student =Database.filter((el:iData)=>{
            return el.id !== id;

        })

        return res.status(200).json({message: "Deleting single student", data: student})
        
    } catch (error) {
        return res.status(404).json({message:"Can't delete student",error})
        
    }

}

export const updateStudent = (req:Request, res:Response):Response=>{
    try {
        const {id}= req.params
        const {name,email,password,age} = req.body;
        const mainID = parseInt(id)-1
        Database[mainID].age = age
        Database[mainID].email = email
        Database[mainID].name = name
        Database[mainID].password = password

        return res.status(201).json({message: "Details updated",data: Database[mainID]})
        
    } catch (error) {
        return res.status(404).json({message:"Can't update student details",error})
        
    }
}


