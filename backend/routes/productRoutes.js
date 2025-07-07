import {createProduct} from '../controllers/productController.js';

router.post('/', upload.single('image'), createProduct);
