import React from "react";
import { useForm } from "react-hook-form";

const SendParcel = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSendParcel = (data) => {
    console.log(data);
  };

  return (
    <div className="mt-8">
      <h1 className="font-extrabold text-6xl">Send A Parcel</h1>
      <h3 className="font-extrabold text-3xl mt-15">
        Enter your parcel details
      </h3>
      <form
        onSubmit={handleSubmit(handleSendParcel)}
        className="mt-12 p-4 text-black"
      >
        {/* parcel type */}
        <div>
          <label className="label mr-4">
            <input
              type="radio"
              {...register("parcelType")}
              value="document"
              className="radio"
              defaultChecked
            />
            Document
          </label>
          <label className="label">
            <input
              type="radio"
              {...register("parcelType")}
              value="non-document"
              className="radio"
            />
            Non-Document
          </label>
        </div>

        {/* parcel info: name and weight */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 my-8">
          <fieldset className="fieldset">
            <label className="label">Parcel Name</label>
            <input
              type="text"
              {...register("parcelName")}
              className="input w-full"
              placeholder="Parcel Name"
            />
          </fieldset>
          <fieldset className="fieldset">
            <label className="label">Parcel Weight (kg)</label>
            <input
              type="number"
              {...register("parcelWeight")}
              className="input w-full"
              placeholder="Parcel Weight"
            />
          </fieldset>
        </div>

        {/* two columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* sender Details*/}

          <fieldset className="fieldset">
            <h2 className="text-2xl font-semibold">Sender Details</h2>
            {/* sender name */}
            <label className="label">Sender Name</label>
            <input
              type="text"
              {...register("senderName")}
              className="input w-full"
              placeholder="Sender Name"
            />

            {/* sender Email */}
            <label className="label">Sender Email</label>
            <input
              type="email"
              {...register("senderEmail")}
              className="input w-full"
              placeholder="Sender Email"
            />

            {/* Sender Region */}
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Sender Region</legend>
              <select defaultValue="Pick a Region" className="select w-full">
                <option disabled={true}>Pick a Region</option>
                <option>Chrome</option>
                <option>FireFox</option>
                <option>Safari</option>
              </select>
              <span className="label">Optional</span>
            </fieldset>

            {/* sender District */}
            <label className="label mt-4">Sender District</label>
            <input
              type="text"
              {...register("senderDistrict")}
              className="input w-full"
              placeholder="Sender District"
            />

            {/* sender address */}
            <label className="label mt-4">Sender Address</label>
            <input
              type="text"
              {...register("senderAddress")}
              className="input w-full"
              placeholder="Sender Address"
            />

            {/* sender number */}
            <label className="label mt-4">Sender Number</label>
            <input
              type="number"
              {...register("senderNumber")}
              className="input w-full"
              placeholder="Sender Number"
            />

            {/* sender Pickup */}
            <label className="label mt-4">Pickup Instruction</label>
            <textarea
              placeholder="Pickup Instruction"
              className="textarea textarea-primary w-full"
            ></textarea>
          </fieldset>

          {/* receiver Details*/}

          <fieldset className="fieldset">
            <h2 className="text-2xl font-semibold">Receiver Details</h2>
            {/* Receiver name */}
            <label className="label">Receiver Name</label>
            <input
              type="text"
              {...register("receiverName")}
              className="input w-full"
              placeholder="Receiver Name"
            />

            {/* Receiver Email */}
            <label className="label">Receiver Email</label>
            <input
              type="email"
              {...register("receiverEmail")}
              className="input w-full"
              placeholder="Receiver Email"
            />

            {/* Receiver address */}
            <label className="label mt-4">Receiver Address</label>
            <input
              type="text"
              {...register("receiverAddress")}
              className="input w-full"
              placeholder="Sender Address"
            />

            {/* Receiver number */}
            <label className="label mt-4">Receiver Number</label>
            <input
              type="number"
              {...register("receiverNumber")}
              className="input w-full"
              placeholder="Receiver Number"
            />

            {/* Receiver District */}
            <label className="label mt-4">Receiver District</label>
            <input
              type="text"
              {...register("receiverDistrict")}
              className="input w-full"
              placeholder="Receiver District"
            />

            {/* Receiver Delivery */}
            <label className="label mt-4">Receiver Instruction</label>
            <textarea
              placeholder="Receiver Instruction"
              className="textarea textarea-primary w-full"
            ></textarea>
          </fieldset>
        </div>
        <input
          type="submit"
          className="btn btn-primary text-black"
          value="Send Parcel"
        />
      </form>
    </div>
  );
};

export default SendParcel;
