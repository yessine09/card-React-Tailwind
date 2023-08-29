import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { editProduct, getProductById } from "../service/Api";

const UpdateProduct = () => {
  const param = useParams();
  const navigate = useNavigate();

  const myproduct = {
    id: param.id,
    name: "",
    price: 0,
    img: "",
    like: 0,
    quantity: 0,
    description: "",
  };

  const [product, setProduct] = useState(myproduct);

  const { id, name, price, img, like, quantity, description } = product;

  useEffect(() => {
    getProductById(id).then((data) => {
      console.log("get product by id" + data);
      setProduct(data);
    });
  }, []);

  function onValueChange(e) {
    console.log("Field Name:", e.targetname);
    console.log("New Value:", e.target.value);
    setProduct({ ...product, [e.target.name]: e.target.value });
  }

  function onFileHandle(e) {
    const selectedFile = e.target.files[0];

    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = function (event) {
        setProduct({ ...product, img: event.target.result });
      };
      reader.readAsDataURL(selectedFile);
    }
  }

  // const onFileHandle = (e) => {
  //   console.log("check file", e.target.files);
  //   setProduct({ ...product, [e.target.name]: e.target.files[0].name });
  // };

  // const onFileHandle = (event) => {
  //   if (event.target.files && event.target.files[0]) {
  //     setProduct(URL.createObjectURL(event.target.files[0]));
  //   }
  // };

  const updateP = async () => {
    const res = await editProduct(param.id, product);
    console.log("res of update", res);

    if (res.status === 200) navigate("/myproducts");
  };

  return (
    <div className="w-full max-w-lg">
      <div>
        {" "}
        <div className="text-4xl font-bold">
          <div className="bg-blue-100 p-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-yellow-300 to-purple-700">
              Update Product{" "}
            </span>
          </div>
        </div>
      </div>

      <form className="bg-gray-400 shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              update your {name}
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="type your name"
              name="name"
              value={name}
              onChange={(e) => onValueChange(e)}
            />
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
              type="number"
              max="1000"
              min="10"
              placeholder="Price"
              value={price}
              name="price"
              onChange={(e) => onValueChange(e)}
            />
          </div>
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-2"
              htmlFor="file_input"
            >
              Upload file
            </label>
            <input
              className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              aria-describedby="file_input_help"
              id="file_input"
              type="file"
              onChange={(e) => onFileHandle(e)}
              name="img"
            />
            <p
              className="mt-1 text-sm text-gray-500 dark:text-gray-300"
              id="file_input_help"
            >
              SVG, PNG, JPG or GIF (MAX. 800x400px).
            </p>
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
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="InputNumber"
              placeholder="Example label"
              value={like}
              onChange={(e) => onValueChange(e)}
              name="like"
              max="20"
              min="1"
            />
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
              type="number"
              placeholder="Quantity"
              value={quantity}
              onChange={(e) => onValueChange(e)}
              name="quantity"
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
              onChange={(e) => onValueChange(e)}
            ></textarea>
          </div>
        </div>

        <div>
          <button
            type="button"
            className="text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900"
            onClick={() => updateP()}
          >
            Update Product
          </button>

          <button
            type="button"
            className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            onClick={() => navigate("/myproducts")}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateProduct;
