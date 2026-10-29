import express from 'express';
import { addProductController, 
          editProduct,
          deleteProduct,
          getProduct,
          getProducts,
        } from '../Controller/addProductController.js';

const router = express.Router();
router.put("/EditProduct/:id", editProduct);
router.delete("/DeleteProduct/:id", deleteProduct);
router.get("/Products", getProducts);
router.get("/Product/:id", getProduct);


// Add Product route

router.post("/AddProduct", addProductController);

export default router;
