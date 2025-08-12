import Product from "../../models/product.js";

export const GetProducts = async (req, res) => {
  try {
    let productsFromDb = await Product.find();
    productsFromDb = productsFromDb.map((pr) => {
      return {
        imageURL: pr.imageURL,
        title: pr.title,
        description: pr.description,
        id: pr._id,
      };
    });

    res.status(200).json({
      products: productsFromDb,
    });
  } catch (err) {
    res.status(500).json({
      products: [],
    });
  }
};
