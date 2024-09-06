const Product = require("../models/Product");
const createProduct = async (req, res) => {
  try {
    const { length, width, height, ...others } = req.body;

    const images = req.files.map((file) => file.path);

    const newProduct = new Product({
      images,
      dimensions: {
        length: length,
        width: width,
        height: height,
      },
      ...others,
    });

    // Saving the new product to the database
    const savedProduct = await newProduct.save();

    // Sending a response with the saved product
    res.status(201).json(savedProduct);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error creating product" });
  }
};

// Fetch all product

const getAllProducts = async (req, res) => {
  try {
    const {
      productName,
      category,
      minPrice,
      maxPrice,
      page = 1,
      limit = 10,
    } = req.query;

    const filter = {};

    if (productName) {
      filter.productName = { $regex: productName, $options: "i" }; // Case-insensitive regex match
    }

    if (category) {
      filter.category = category;
    }

    if (minPrice) {
      filter.price = { $gte: minPrice }; // Greater than or equal to minPrice
    }

    if (maxPrice) {
      filter.price = filter.price
        ? { ...filter.price, $lte: maxPrice } // Add less than or equal to maxPrice
        : { $lte: maxPrice };
    }

    // Calculate skip value for pagination
    const skip = (parseInt(page, 10) - 1) * parseInt(limit, 10);

    // Fetch products with the applied filters, pagination, and selection of fields
    const products = await Product.find(filter)
      .select("productName category price stock productId")
      .skip(skip)
      .limit(parseInt(limit, 10));

    // Fetch total number of products to calculate total pages
    const totalItems = await Product.countDocuments(filter);
    const totalPages = Math.ceil(totalItems / parseInt(limit, 10));

    // Send response with pagination details
    res.status(200).json({
      totalItems,
      totalPages,
      currentPage: parseInt(page, 10),
      products,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching products" });
  }
};

// Fetch single product by id
const fetchSingleProduct = async (req, res) => {
  try {
    const { productId } = req.params;
    const product = await Product.findOne({ productId });

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching product" });
  }
};

const updateProduct = async (req, res) => {
  try {
    const { productId } = req.params;
    const { length, width, height, ...others } = req.body;

    const images = req.files ? req.files.map((file) => file.path) : undefined;

    const updateData = {
      ...others,
    };

    // Update dimensions if provided
    if (length || width || height) {
      updateData.dimensions = {};
      if (length) updateData.dimensions.length = length;
      if (width) updateData.dimensions.width = width;
      if (height) updateData.dimensions.height = height;
    }

    // Update images if they are provided
    if (images) {
      updateData.images = images;
    }

    // Find the product by productId and update it
    const updatedProduct = await Product.findOneAndUpdate(
      { productId },
      { $set: updateData },
      { new: true, runValidators: true }
    );

    // console.log(updateData);

    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    // Respond with the updated product
    res.status(200).json(updatedProduct);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error updating product" });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { productId } = req.params;
    const result = await Product.findOneAndDelete({ productId });

    if (!result) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json({ message: "Product deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error deleting product" });
  }
};

module.exports = {
  createProduct,
  getAllProducts,
  fetchSingleProduct,
  updateProduct,
};
