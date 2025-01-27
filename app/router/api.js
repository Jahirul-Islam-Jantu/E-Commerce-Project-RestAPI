import express from 'express';
import * as ProductController from "../controller/ProductController.js"
import * as UserController from "../controller/userController.js"

const router = express.Router();

// Product routes
router.get("/ProductBrandList", ProductController.ProductBrandList)
router.get("/ProductCategoryList", ProductController.ProductCategoryList)
router.get("/ProductSliderList", ProductController.ProductSliderList)
router.get("/ProductListByBrand/:BrandID", ProductController.ProductListByBrand)
router.get("/ProductListByCategory/:CategoryID", ProductController.ProductListByCategory)
router.get("/ProductListBySimilier/:CategoryID", ProductController.ProductListBySimilier)
router.get("/ProductDetails/:ProductID", ProductController.ProductDetails)
router.get("/ProductListByKeyword/:Keyword", ProductController.ProductListByKeyword)
router.get("/ProductListByRemark/:Remark", ProductController.ProductListByRemark)
router.get("/ProductListByReview/:ProductID", ProductController.ProductListByReview)


// User routes
router.get("/userOTP/:email", UserController.LoginUser)




export default router;