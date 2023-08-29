import React, { useContext, useState } from "react";
import { newProduct } from "../service/Api";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [img, setImg] = useState(null);
  const [like, setLike] = useState(0);
  const [quantity, setQuantity] = useState("20");
  const [description, setDescription] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const product = {
      id,
      name,
      price,
      img,
      like,
      quantity,
      description,
    };
    newProduct(product).then((data) => {
      console.log("add of data product " + data);
      //window.location.replace('/products'); bch replciw url kdim w redige lel url jdid js bel react b navigate
      navigate("/myproducts");
    });
  };

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImg(URL.createObjectURL(event.target.files[0]));
    }
  };

  const handleCancel = () => {
    setId("");
    setName("");
    setPrice("");
    setImg(null);
    setLike(0);
    setQuantity("20");
    setDescription("");
  };

  const handleChange = (e) => {
    // const regex = /^[0-9\b]+$/;
    // if (e.target.value === "" || regex.test(e.target.value)) {
    //   setLike(e.target.value);
    // }
    const inputValue = e.target.value;
    const numericValue = parseFloat(inputValue); // Convert to a number
    setLike(numericValue);
  };
  console.log("type" + typeof like);
  return (
    <div className="w-full max-w-lg">
      <div>
        {" "}
        <div className="text-4xl font-bold">
          <div className="bg-blue-100 p-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-yellow-300 to-purple-700">
              New Product{" "}
            </span>
          </div>
        </div>
      </div>

      <form
        className="bg-gray-400 shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <p className="text-red-500 text-xs italic mb-2">
              Please fill out this field.
            </p>
          </div>

          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-last-price"
            >
              Price $
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-price"
              type="text"
              placeholder="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>
          <div className="w-full px-3">
            <label
              htmlFor="InputNumber"
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-2"
            >
              Like
            </label>
            <input
              type="number"
              // pattern="[0-9]*"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="InputNumber"
              placeholder="Example label"
              // min="1"
              // max="10"
              value={parseInt(like)}
              //onChange={(e) => setLike(e.target.value)}
              onChange={handleChange}
            />
            {console.log("new type", like)}
          </div>
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-2"
              htmlFor="grid-quantity"
            >
              Quantity
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-quantity"
              type="text"
              placeholder="Quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>
          <div className="w-full px-3">
            <label
              htmlFor="message"
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-2"
            >
              Description
            </label>
            <textarea
              id="message"
              rows="3"
              className="block p-2.5 w-full text-sm text-gray-400 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-slate-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Write your description here..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-2"
              htmlFor="file_input"
            >
              Upload file
            </label>
            <input
              type="file"
              className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              aria-describedby="file_input_help"
              id="file_input"
              onChange={onImageChange}
              required
            />
            <p
              className="mt-1 text-sm text-gray-500 dark:text-gray-300"
              id="file_input_help"
            >
              SVG, PNG, JPG or GIF (MAX. 800x400px).
            </p>
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            Add Product
          </button>

          <button
            type="button"
            className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            onClick={handleCancel}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
