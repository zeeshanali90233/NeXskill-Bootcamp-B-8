import Product from "../../models/product.js";

export const UpdateProduct = async (req, res) => {
  const { id } = req.params;
  const { title, description, imageURL } = req.body;
  try {
    await Product.findByIdAndUpdate(id, {
      title: title,
      description: description,
      imageURL: imageURL,
    });
    res.status(200).json({ ok: true, message: "Updated" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ ok: true, message: "Something wrng wrong " });
  }
};
