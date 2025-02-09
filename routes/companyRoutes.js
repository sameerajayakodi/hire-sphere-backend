import express from "express";
import upload from "../config/multer.js";
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
import { protectCompany } from "../middleware/authMiddleware.js";

const router = express.Router();

// Register a new company
router.post("/register", upload.single("image"), registerCompany);

//Company login
router.post("/login", loginCompany);

//Get company Data
router.get("/company", protectCompany, getCompanyData);

//Post a new job
router.post("/post-job", protectCompany, postJob);

//Get Company Job Applicants
router.get("/applicants", protectCompany, getCompanyJobApplicants);

//Get Company Job List
router.get("/list-jobs", protectCompany, getCompanyPostedJobs);

//Change Job Application Status
router.post("/change-status", protectCompany, changeJobApplicationStatus);

//Change Application Visibility
router.post("/change-visibility", protectCompany, changeVisibility);

export default router;
