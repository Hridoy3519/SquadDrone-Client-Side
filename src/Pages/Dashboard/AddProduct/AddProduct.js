import React from "react";
import { Card } from "react-bootstrap";
import { useForm } from "react-hook-form";
import './Addproduct.css';
const AddProduct = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    fetch("http://localhost:5000/addNewProduct", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("New Product has been Added!");
          reset();
        }
      });
  };
  return (
    <div className="form-container">
      <Card className="rounded-3">
        <Card.Header>
          <h4>Add a New Tour Destination</h4>
        </Card.Header>
        <Card.Body>
          {errors.title &&
          errors.tagline &&
          errors.description &&
          errors.rating &&
          errors.user &&
          errors.price &&
          errors.img ? (
            ""
          ) : (
            <span className="error my-5">*All Field must be full-filled</span>
          )}
          <br />
          <br />
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* register your input into the hook by invoking the "register" function */}
            <input
              defaultValue=""
              placeholder="Title"
              {...register("title", { required: true })}
            />

            <input
              defaultValue=""
              placeholder="Tagline"
              {...register("tagline", { required: true })}
            />

            {/* include validation with required or other standard HTML validation rules */}
            <textarea
              defaultValue=""
              placeholder="Description"
              {...register("description", { required: true })}
            />
            <input
              defaultValue=""
              placeholder="Rating"
              {...register("rating", { required: true })}
            />
            <input
              defaultValue=""
              placeholder="No of user rating"
              {...register("user", { required: true })}
            />
            <input
              defaultValue=""
              placeholder="Price"
              {...register("price", { required: true })}
            />
            <input
              defaultValue=""
              placeholder="Img URL"
              {...register("img", { required: true })}
            />
            {/* errors will return when field validation fails  */}

            <input className="add-tour" value="Add" type="submit" />
          </form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default AddProduct;
