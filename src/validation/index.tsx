

// product obj===errorsObj (Title,Description,Price,Category) all are required 


export const validateProduct = (product:
    {
        title: string;
        description: string;
        imageURL: string; price:
        string;
    }) => {
    const errors: { title: string; description: string; price: string; imageURL: string } = {
        title: "",
        description: "",
        price: "",
        imageURL: "",

    };
    const validUrl = /^(ftp|http|https):\/\/[^ "]+$/.test(product.imageURL);
    if (!product.title.trim() || product.title.length < 10 || product.title.length > 80) {
        errors.title = "Title is required and must be between 10 and 80 characters.";
    }
    if (!product.description.trim() || product.description.length < 20 || product.description.length > 900) {
        errors.description = "Description is required and must be between 20 and 900 characters.";
    }
    if (!product.price.trim() || isNaN(Number(product.price)) || Number(product.price) <= 0) {
        errors.price = "Price is required and must be a positive number.";
    }
    if (!product.imageURL.trim() || !validUrl) {
        errors.imageURL = "Image URL is required and must be a valid URL.";
    }
    return errors;

}