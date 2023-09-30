const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");
const typeProductSchema = new mongoose.Schema({
  type_name: String,
  uri: String,
  items: [
    {
      typename: String,
      productName: String,
      description: String,
      price: String,
      moreImg: [],
    },
  ],
});
const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  pass: String,
  like: [typeProductSchema],
  cart: [typeProductSchema],
});

const productSchema = new mongoose.Schema({
  Gifts: [typeProductSchema],
  Fashion: [typeProductSchema],
  Fragrance: [typeProductSchema],
  Electronic: [typeProductSchema],
});
userSchema.statics.signup = async function (email, pass, passconfirm, name) {
  if (!email && !pass) {
    return "All fields must be filled";
  }

  if (!validator.isEmail(email)) {
    if (!validator.isStrongPassword(pass)) {
      if (pass == "") {
        return "pass field must be filled and Email not valid";
      }
      return "Password not strong enough and Email not valid";
    }
    if (pass != passconfirm) {
      return "Passwordconfirm is not match and Email not valid";
    }
    return "Email not valid";
  }
  if (!validator.isStrongPassword(pass)) {
    if (pass != passconfirm) {
      return "Passwordconfirm is not match and Password not strong enough";
    }
    return "Password not strong enough";
  }
  const exists = await this.findOne({ email });
  if (exists) {
    if (!validator.isStrongPassword(pass)) {
      if (pass == "") {
        return "pass field must be filled and Email already in use";
      }
      if (pass != passconfirm) {
        return "Password not strong enough and Email already in use and Passwordconfirm is not match";
      }
      return "Password not strong enough and Email already in use";
    }
    return "Email already in use";
  }

  if (pass != passconfirm) {
    return "Passwordconfirm is not match";
  } else {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(pass, salt);
    const user = await this.create({ email, pass: hash, username: name });

    return user;
  }
};
userSchema.statics.login = async function (email, pass) {
  console.log(email + "  " + pass);

  if (!email && !pass) {
    return "All fields must be filled";
  }

  const user = await this.findOne({ email });
  if (!user) {
    return "Incorrect email";
  }

  const match = await bcrypt.compare(pass, user.pass);
  if (!match) {
    return "Incorrect password";
  }

  return user;
};
const searchfunction = (nameproduct, array, regexPattern) => {
  const result = [];

  array.map((doc) => {
    const products = doc[nameproduct];
    products.map((product) => {
      const matchingItems = product.items.filter((item) =>
        new RegExp(regexPattern, "i").test(item.typename)
      );
      if (matchingItems.length > 0) {
        result.push({ category: nameproduct, items: matchingItems });
      }
    });
  });

  return result;
};

productSchema.statics.search = async function (searchUser) {
  try {
    let Result = [];
    console.log(searchUser);
    const regexPattern = new RegExp("^" + searchUser, "i");
    const gifts = await this.find({}, "Gifts");
    const fragrances = await this.find({}, "Fragrance");
    const fashion = await this.find({}, "Fashion");
    const electronic = await this.find({}, "Electronic");
    const giftResult = searchfunction("Gifts", gifts, regexPattern);
    const fragrancesResult = searchfunction(
      "Fragrance",
      fragrances,
      regexPattern
    );
    const fashionResult = searchfunction("Fashion", fashion, regexPattern);
    const electronicResult = searchfunction(
      "Electronic",
      electronic,
      regexPattern
    );
    if (electronicResult.length != 0) {
      Result.push(electronicResult);
    }
    if (giftResult.length != 0) {
      Result.push(giftResult);
    }
    if (fashionResult.length != 0) {
      Result.push(fashionResult);
    }
    if (fragrancesResult.length != 0) {
      Result.push(fragrancesResult);
    }
    console.log(Result);
    return Result;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};
const showfunction = (nameproduct, array, type) => {
  console.log(type);
  console.log(array);
  console.log(nameproduct);
  let Result;
  if (typeof type === "undefined" || type === "") {
    Result = array.flatMap((doc) =>
      doc[nameproduct].flatMap((product) => {
        return product;
      })
    );
  } else {
    Result = array.flatMap((doc) =>
      doc[nameproduct].filter((e) => e.type_name === type)
    );
  }
  return Result;
};

productSchema.statics.PopularTags = async function (PopularTags, type) {
  console.log(PopularTags);
  console.log(type);
  console.log("==========");
  const popularTagsArray = await this.find({}, PopularTags);
  const Result = showfunction(PopularTags, popularTagsArray, type);
  return Result;
};
const mapfinction = (nameproduct, array, valueBudget, type) => {
  const result = [];
  array.forEach((doc) => {
    doc[nameproduct].forEach((product) => {
      product.items.forEach((item) => {
        if (type === "") {
          if (parseFloat(item.price) <= parseFloat(valueBudget)) {
            result.push(item);
          }
        } else {
          if (
            parseFloat(item.price) <= parseFloat(valueBudget) &&
            item.typename == type
          ) {
            result.push(item);
          }
        }
      });
    });
  });
  return result;
};

productSchema.statics.budget = async function (valueBudget, type) {
  try {
    let price = [];
    const gifts = await this.find({}, "Gifts");
    const fragrances = await this.find({}, "Fragrance");
    const fashion = await this.find({}, "Fashion");
    const electronic = await this.find({}, "Electronic");
    const giftResult = mapfinction("Gifts", gifts, valueBudget, type);
    const fragrancesResult = mapfinction(
      "Fragrance",
      fragrances,
      valueBudget,
      type
    );
    const fashionResult = mapfinction("Fashion", fashion, valueBudget, type);
    const electronicResult = mapfinction(
      "Electronic",
      electronic,
      valueBudget,
      type
    );
    if (electronicResult.length != 0) {
      price.push(electronicResult);
    }
    if (giftResult.length != 0) {
      price.push(giftResult);
    }
    if (fashionResult.length != 0) {
      price.push(fashionResult);
    }
    if (fragrancesResult.length != 0) {
      price.push(fragrancesResult);
    }
    console.log(price);
    return price;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};
userSchema.statics.like = async function (userid) {
  const user = await this.findById(userid);
  const Result = user.like;
  return Result;
};
userSchema.statics.cart = async function (userid) {
  const user = await this.findById(userid);
  const Result = user.cart;
  return Result;
};
userSchema.statics.profile = async function (userid) {
  const user = await this.findById(userid);
  console.log(user)
  return user;
};


const User = mongoose.model("Users", userSchema);
const Product = mongoose.model("Products", productSchema);

module.exports = { User, Product };
