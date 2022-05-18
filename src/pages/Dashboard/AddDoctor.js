import { data } from "autoprefixer";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import Loading from "../Shared/Loading/Loading";

const AddDoctor = () => {
  // Form hook
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const { data: services, isLoading } = useQuery("services", () =>
    fetch("http://localhost:5000/services").then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  const imageStorageKey = `1ada22c843bec539f6c33ffc5484c2a5`;

  const onSubmit = async (data) => {
    const image = data.image[0];
    console.log(image);
    const formData = new FormData();
    formData.append("image", image);
    let url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          console.log("img bb SUCCESS", result);

          // IMG URL
          const img = result.data.url;
          const doctor = {
            name: data.name,
            email: data.email,
            specialty: data.specialty,
            img: img,
          };

          fetch("http://localhost:5000/doctor", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(doctor),
          })
            .then((res) => res.json())
            .then((inserted) => {
              if (inserted.insertedId) {
                toast.success("Doctor added successfully");
                console.log("doctor", inserted);
                reset();
              } else {
                toast.error("Failed to add a doctor");
              }
            });
        }
      });
  };

  return (
    <div>
      <h2 className="text-2xl">Add a new doctors</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className="text-center text-xl pb-[30px] pt-[20px]">ADD DOC</h1>

        {/* Name INPUT */}
        <div className=" form-control  max-w-xs mb-2 mx-auto">
          <label className="label py-1 pt-0">
            <span className="text-sm">Name</span>
          </label>
          <input
            {...register("name", {
              required: {
                value: true,
                message: "Name is required",
              },
            })}
            type="text"
            className="input input-bordered w-full max-w-xs"
          />
          {/* Errors for Name */}
          <label className="label pb-0">
            {errors.name?.type === "required" && (
              <span className="text-[12px] text-red-600">
                *{errors.name.message}
              </span>
            )}
          </label>
        </div>

        {/* Input for EMAIL */}
        <div className=" form-control  max-w-xs mb-2 mx-auto">
          <label className="label py-1 pt-0">
            <span className="text-sm">Email</span>
          </label>
          <input
            {...register("email", {
              required: {
                value: true,
                message: "Email is required",
              },
              pattern: {
                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                message: "Provide a valid email",
              },
            })}
            type="email"
            className="input input-bordered w-full max-w-xs"
          />
          {/* Errors for email */}
          <label className="label pb-0">
            {errors.email?.type === "required" && (
              <span className="text-[12px] text-red-600">
                *{errors.email.message}
              </span>
            )}
            {errors.email?.type === "pattern" && (
              <span className="text-[12px] text-red-600">
                *{errors.email.message}
              </span>
            )}
          </label>
        </div>

        {/* Specialty selector */}
        <div className=" form-control  max-w-xs mb-2 mx-auto">
          <label className="label py-1 pt-0">
            <span className="text-sm">Specialty</span>
          </label>
          <select
            {...register("specialty")}
            class="input input-bordered w-full max-w-xs"
          >
            {services?.map((service) => (
              <option key={service._id} value={service.treatmentName}>
                {service.treatmentName}
              </option>
            ))}
          </select>
        </div>

        {/* Image INPUT */}
        <div className=" form-control  max-w-xs mb-2 mx-auto">
          <label className="label py-1 pt-0">
            <span className="text-sm">Photo</span>
          </label>
          <input
            {...register("image", {
              required: {
                value: true,
                message: "Image is required",
              },
            })}
            type="file"
            className="input input-bordered w-full max-w-xs"
          />
          {/* Errors for img */}
          <label className="label pb-0">
            {errors.image?.type === "required" && (
              <span className="text-[12px] text-red-600">
                *{errors.image.message}
              </span>
            )}
          </label>
        </div>

        {/* Login BUTTON */}
        <input
          className="h-[48px] w-[328px] block mx-auto text-white rounded-[8px] bg-accent  max-w-xs mt-[10px]"
          type="submit"
          value={`ADD   `}
        />
      </form>
    </div>
  );
};

export default AddDoctor;
