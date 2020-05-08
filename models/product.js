class Product {
  constructor(id, ownerId, title, imageUri, description, price) {
    this.id = id;
    this.ownerId = ownerId;
    this.imageUri = imageUri;
    this.title = title;
    this.description = description;
    this.price = price;
  }
}

export default Product;
