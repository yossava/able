"use client";
import { TextField } from "@mui/material";
import dynamic from "next/dynamic";
import { useId } from "react";
import { StylesConfig } from "react-select";

const Select = dynamic(() => import("react-select"), {
  ssr: false,
});

export default function ExchangeForm() {
  const options = [
    {
      label: "Australian Dollar",
      value: "aud",
      image: "https://region-api.pages.dev/flags/svg/AU.svg",
    },
    {
      label: "British Pound",
      value: "gbp",
      image: "https://region-api.pages.dev/flags/svg/GB.svg",
    },
    {
      label: "Brunei Dollar",
      value: "bnd",
      image: "https://region-api.pages.dev/flags/svg/BN.svg",
    },
    {
      label: "Canadian Dollar",
      value: "cad",
      image: "https://region-api.pages.dev/flags/svg/CA.svg",
    },
    {
      label: "Chinese Yuan",
      value: "cny",
      image: "https://region-api.pages.dev/flags/svg/CN.svg",
    },
  ];

  interface OptionProvided {
    [key: string]: any;
  }

  const customStyles: StylesConfig<any, false> = {
    option: (provided: OptionProvided, state: any) => ({
      ...provided,
      display: "flex",
      alignItems: "center",
      backgroundColor: state.isSelected ? "#FDB833" : "white",
    }),
    control: (provided: OptionProvided, state: any) => ({
      ...provided,
      background: "#fff",
      borderColor: "#9e9e9e",
      minHeight: "55px",
      height: "55px",
    }),
    menu: (base: any) => ({
      ...base,
      zIndex: 100,
    }),
  };

  const formatOptionLabel = ({
    label,
    image,
  }: {
    label: string;
    image: string;
  }) => (
    <div style={{ display: "flex", alignItems: "center" }}>
      <img src={image} style={{ width: "20px", marginRight: "10px" }} />
      {label}
    </div>
  );
  return (
    <form
      id="exchange"
      className="bg-slate-50 md:p-10 p-5 rounded-lg text-left"
    >
      <Select
        options={[
          {
            label: "Central Park Mall",
            value: "opt1",
          },
          {
            label: "PIK",
            value: "opt2",
          },
        ]}
        styles={customStyles}
        defaultValue={{
          label: "Central Park Mall",
          value: "opt1",
        }}
        placeholder="Select a shop"
        instanceId={useId()}
        className="mb-5 bg-white"
      />
      <div className="flex md:flex-row flex-col justify-center items-center md:space-y-0 space-y-5 md:space-x-5 mb-5">
        <Select
          options={options}
          placeholder="From"
          defaultValue={options[0]}
          formatOptionLabel={(option: any, { context }: any) => {
            return (
              <div style={{ display: "flex", alignItems: "center" }}>
                <img
                  src={option.image}
                  style={{ width: "20px", marginRight: "10px" }}
                />
                {option.label}
              </div>
            );
          }}
          styles={customStyles}
          instanceId={useId()}
          className="bg-white w-full md:w-[calc(100%-50px)]"
        />
        <div className="w-[100px] md:flex justify-center items-center hidden">
          <div className="rounded-full p-3 bg-gray-100 flex justify-center items-center">
            <img src="/exchange-mid.svg" alt="exchange" className="h-6" />
          </div>
        </div>

        <Select
          options={options}
          placeholder="To"
          defaultValue={options[1]}
          formatOptionLabel={(option: any, { context }: any) => {
            return (
              <div style={{ display: "flex", alignItems: "center" }}>
                <img
                  src={option.image}
                  style={{ width: "20px", marginRight: "10px" }}
                />
                {option.label}
              </div>
            );
          }}
          styles={customStyles}
          instanceId={useId()}
          className="bg-white w-full md:w-[calc(100%-50px)] "
        />
      </div>

      <TextField
        fullWidth
        label=""
        type="number"
        placeholder="Amount"
        variant="outlined"
        className="bg-white"
      />
      <h3 className="font-bold my-3">
        1 Australian dollar = 0.658720 US dollar
      </h3>
      <hr />

      <div className="flex md:flex-row flex-col justify-between items-start mt-5">
        <p className="md:w-2/3 w-full text-gray-700 text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum atque
          obcaecati accusantium illo deserunt assumenda maiores at quod quisquam
          quibusdam!
        </p>
        <button
          type="button"
          className="bg-secondary w-full md:w-[200px] mt-5 md:mt-0 p-4 rounded text-white flex justify-center space-x-2 items-center px-5"
        >
          <span>Get Exchange Now</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
    </form>
  );
}
