import Product from "../../models/product.js";

export const SaveProduct = async (req, res) => {
  try {
    const { title, description, imageURL } = req.body;
    const newProduct = {
      title: title,
      description: description,
      imageURL: imageURL,
    };

    const productRef = new Product(newProduct);
    await productRef.save();

    res.status(200).json({
      ok: true,
      message: "Successfully Saved",
    });
  } catch (err) {
    res.status(500).json({
      ok: false,
      message: "Something went wrong while saving",
    });
  }
};
