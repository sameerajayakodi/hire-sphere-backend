import express from "express";
import {
  changeJobApplicationStatus,
  changeVisibility,
  getCompanyData,
  getCompanyJobApplicants,
  getCompanyPostedJobs,
  loginCompany,
  postJob,
  registerCompany,
} from "../controllers/companyController.js";
import upload from "../config/multer.js";

const router = express.Router();

// Register a new company
router.post("/register",upload.single('image'), registerCompany);

//Company login
router.post("/login", loginCompany);

//Get company Data
router.get("/company", getCompanyData);

//Post a new job
router.post("/post-job", postJob);

//Get Company Job Applicants
router.get("/applicants", getCompanyJobApplicants);

//Get Company Job List
router.get("/list-jobs", getCompanyPostedJobs);

//Change Job Application Status
router.post("/change-status", changeJobApplicationStatus);

//Change Application Visibility
router.post("/change-visibility", changeVisibility);

export default router;
