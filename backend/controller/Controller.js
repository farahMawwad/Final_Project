const jwt = require("jsonwebtoken");
const { User, Product } = require("../models/Models");

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "3d" });
};
// get All users

exports.home = async (req, res) => {
  try {
    User.create();
    Product.create();
    res.status(200).json({});
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
exports.signup = async (req, res) => {
  const { email, pass, passconfirm, name } = req.body;

  try {
    const result = await User.signup(email, pass, passconfirm, name);

    if (typeof result === "object") {
      // Signup was successful
      const token = createToken(result._id);
      console.log(result)
      res.status(200).json({ email, token });
    } else {
      // Handle signup error
      res.send(result);
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
exports.login = async (req, res) => {
  const { email, pass } = req.query;
  console.log(pass);
  try {
    const user = await User.login(email, pass);

    console.log(user);
    if (typeof user === "object") {
      // Signup was successful
      const token = createToken(user._id);

      res.status(200).json({ email, token });
    } else {
      // Handle signup error
      res.send(user);
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
exports.search = async (req, res) => {
  const { search } = req.body;
  try {
    const searchResult = await Product.search(search);

    // create a token

    res.status(200).json({ searchResult });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
exports.PopularTags = async (req, res) => {
  try {
    const PopularTags = req.params.PopularTags;
    const showResult = await Product.PopularTags(PopularTags);
    res.status(200).json({ showResult });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
exports.PopularTagstype = async (req, res) => {
  try {
    const PopularTags = req.params.PopularTags;
    const type = req.params.type;
    const showResult = await Product.PopularTags(PopularTags, type);
    res.status(200).json({ showResult });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
exports.like = async (req, res) => {
  const userid = req.params.id || "";
  if (userid === "") {
    res.status(400).json({ error: "User ID is missing in the URL" });
    return;
  }
  try {
    const likeResult = await User.like(userid);
    res.status(200).json({ likeResult });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
exports.cart = async (req, res) => {
  const userid = req.params.id || "";
  if (userid === "") {
    res.status(400).json({ error: "User ID is missing in the URL" }); //use as localstorge
    return;
  }
  try {
    const CartResult = await User.cart(userid);
    res.status(200).json({ CartResult });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
// exports.addCart = async (req, res) => {
// const {addToCard}=req.body
// const userid=req.params.id|| ''
// try {
//     const addCartResult = await User.like(addToCard,userid)
//     res.status(200).json({addCartResult})
//   } catch (error) {
//     res.status(400).json({error: error.message})
//   }
// 0}
exports.budget = async (req, res) => {
  console.log(req.query);
  const { budget, type } = req.query;

  try {
    res.send(await Product.budget(budget, type));
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
exports.profile = async (req, res) => {
  const userid = req.params.id || "";

  try {
    res.send(await Product.profile(userid));
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
