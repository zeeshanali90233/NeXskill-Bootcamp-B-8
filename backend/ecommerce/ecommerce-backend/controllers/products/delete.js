import Product from "../../models/product.js";

export const DeleteProduct = async (req, res) => {
  try {
    // Which we have to remove
    const { id } = req.params;
    await Product.findByIdAndDelete(id);
    res.status(200).json({ ok: true, message: "Deleted" });
  } catch (err) {
    res.status(500).json({ ok: false, message: "Server side issue" });
  }
};
