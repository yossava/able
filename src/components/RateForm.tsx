"use client";
import { TextField } from "@mui/material";
import dynamic from "next/dynamic";
import { useId } from "react";
import { StylesConfig } from "react-select";

const Select = dynamic(() => import("react-select"), {
  ssr: false,
});

export default function RateForm() {
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
    <form id="exchange" className="bg-white p-5 rounded-lg shadow-lg">
      <p className="text-gray-600 bg-slate-100 p-3 text-xs mb-3 text-center rounded">
        Save with our great introductory rate for your personal transfer on 7
        currencies.
      </p>
      <label className="text-gray-600 text-sm" htmlFor="">
        Shop
      </label>
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
        instanceId={useId()}
        className="mb-5 bg-white"
      />
      <label className="text-gray-600 text-sm" htmlFor="">
        Currency Send
      </label>
      <Select
        options={options}
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
        className="mb-5 bg-white"
      />
      <label className="text-gray-600 text-sm" htmlFor="">
        Currency Receive
      </label>
      <Select
        options={options}
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
        className="mb-5 bg-white"
      />
      <label className="text-gray-600 text-sm" htmlFor="">
        Amount
      </label>
      <TextField
        fullWidth
        label=""
        type="number"
        variant="outlined"
        className="mb-5"
      />

      <button
        type="button"
        className="bg-secondary p-4 rounded text-white flex justify-center space-x-2 items-center w-full"
      >
        <span>Get Exchange Now</span>
      </button>
      <p className="text-gray-500 text-xs mt-5">
        * In some instances a third-party intermediary or bank may deduct a fee
        from the value of your transfer. This fee may vary and we receives no
        portion of it.{" "}
      </p>
    </form>
  );
}
