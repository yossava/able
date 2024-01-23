"use client";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import { useState } from "react";

export default function RateTab() {
  const [value, setValue] = useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <div className="rounded-lg grow lg:max-w-lg bg-white text-gray-800 shadow-lg p-3 w-full">
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList
              textColor="inherit"
              indicatorColor="primary"
              onChange={handleChange}
              aria-label="lab API tabs example"
            >
              <Tab label="Central Park Mall" value="1" />
              <Tab label="PIK" value="2" />
            </TabList>
          </Box>
          <TabPanel value="1" className="p-0">
            <table className="table w-full text-center text-sm">
              <thead>
                <tr>
                  <th
                    colSpan={4}
                    className="text-gray-600 rounded-t-none py-5 border-b-0 whitespace-normal"
                  >
                    <p className="text-sm font-bold text-gray-800">
                      PT ABLE EXCHANGE
                    </p>
                    <p className="font-light text-xs mt-2 capitalize">
                      CENTRAL PARK MALL LT LG-205C, Letjen S. Parman No.28,
                      Jakarta 11470
                    </p>
                    <div className="border-b border-dashed my-3"></div>
                  </th>
                </tr>
                <tr>
                  <th className="rounded-t-none text-left pb-2 uppercase">
                    Currency
                  </th>
                  <th className="text-right pb-2 uppercase">Buy</th>
                  <th className="text-right pb-2 uppercase">Sell</th>
                </tr>
              </thead>
              <tbody>
                <tr className="">
                  <td className="">
                    <div className="flex py-1">
                      <img
                        alt="Australian dollar"
                        loading="lazy"
                        width="50"
                        height="50"
                        decoding="async"
                        data-nimg="1"
                        className="rounded-full overflow-hidden object-cover w-5 h-5"
                        src="https://region-api.pages.dev/flags/svg/AU.svg"
                      />
                      <span className="ml-2">AUD</span>
                      <span className="ml-2">$</span>
                      <span className="hidden lg:flex lg:ml-2 font-light text-xs">
                        Australian dollar
                      </span>
                    </div>
                  </td>
                  <td className="text-secondary font-medium text-right">
                    10,220.00
                  </td>
                  <td className="text-accent font-medium text-right">
                    10,370.00
                  </td>
                </tr>
                <tr className="">
                  <td className="">
                    <div className="flex py-1">
                      <img
                        alt="British pound"
                        loading="lazy"
                        width="50"
                        height="50"
                        decoding="async"
                        data-nimg="1"
                        className="rounded-full overflow-hidden object-cover w-5 h-5"
                        src="https://region-api.pages.dev/flags/svg/GB.svg"
                      />
                      <span className="ml-2">GBP</span>
                      <span className="ml-2">£</span>
                      <span className="hidden lg:flex lg:ml-2 font-light text-xs">
                        British pound
                      </span>
                    </div>
                  </td>
                  <td className="text-secondary font-medium text-right">
                    19,740.00
                  </td>
                  <td className="text-accent font-medium text-right">
                    19,925.00
                  </td>
                </tr>
                <tr className="">
                  <td className="">
                    <div className="flex py-1">
                      <img
                        alt="Brunei dollar"
                        loading="lazy"
                        width="50"
                        height="50"
                        decoding="async"
                        data-nimg="1"
                        className="rounded-full overflow-hidden object-cover w-5 h-5"
                        src="https://region-api.pages.dev/flags/svg/BN.svg"
                      />
                      <span className="ml-2">BND</span>
                      <span className="ml-2">$</span>
                      <span className="hidden lg:flex lg:ml-2 font-light text-xs">
                        Brunei dollar
                      </span>
                    </div>
                  </td>
                  <td className="text-secondary font-medium text-right">
                    11,400.00
                  </td>
                  <td className="text-accent font-medium text-right">
                    11,700.00
                  </td>
                </tr>
                <tr className="">
                  <td className="">
                    <div className="flex py-1">
                      <img
                        alt="Canadian dollar"
                        loading="lazy"
                        width="50"
                        height="50"
                        decoding="async"
                        data-nimg="1"
                        className="rounded-full overflow-hidden object-cover w-5 h-5"
                        src="https://region-api.pages.dev/flags/svg/CA.svg"
                      />
                      <span className="ml-2">CAD</span>
                      <span className="ml-2">$</span>
                      <span className="hidden lg:flex lg:ml-2 font-light text-xs">
                        Canadian dollar
                      </span>
                    </div>
                  </td>
                  <td className="text-secondary font-medium text-right">
                    11,510.00
                  </td>
                  <td className="text-accent font-medium text-right">
                    11,670.00
                  </td>
                </tr>
                <tr className="">
                  <td className="">
                    <div className="flex py-1">
                      <img
                        alt="Chinese yuan"
                        loading="lazy"
                        width="50"
                        height="50"
                        decoding="async"
                        data-nimg="1"
                        className="rounded-full overflow-hidden object-cover w-5 h-5"
                        src="https://region-api.pages.dev/flags/svg/CN.svg"
                      />
                      <span className="ml-2">CNY</span>
                      <span className="ml-2">¥</span>
                      <span className="hidden lg:flex lg:ml-2 font-light text-xs">
                        Chinese yuan
                      </span>
                    </div>
                  </td>
                  <td className="text-secondary font-medium text-right">
                    2,155.00
                  </td>
                  <td className="text-accent font-medium text-right">
                    2,190.00
                  </td>
                </tr>
                <tr className="">
                  <td className="">
                    <div className="flex py-1">
                      <img
                        alt="Euro"
                        loading="lazy"
                        width="50"
                        height="50"
                        decoding="async"
                        data-nimg="1"
                        className="rounded-full overflow-hidden object-cover w-5 h-5"
                        src="https://region-api.pages.dev/flags/svg/EU.svg"
                      />
                      <span className="ml-2">EUR</span>
                      <span className="ml-2">€</span>
                      <span className="hidden lg:flex lg:ml-2 font-light text-xs">
                        Euro
                      </span>
                    </div>
                  </td>
                  <td className="text-secondary font-medium text-right">
                    16,955.00
                  </td>
                  <td className="text-accent font-medium text-right">
                    17,070.00
                  </td>
                </tr>
                <tr className="">
                  <td className="">
                    <div className="flex py-1">
                      <img
                        alt="Hong Kong dollar"
                        loading="lazy"
                        width="50"
                        height="50"
                        decoding="async"
                        data-nimg="1"
                        className="rounded-full overflow-hidden object-cover w-5 h-5"
                        src="https://region-api.pages.dev/flags/svg/HK.svg"
                      />
                      <span className="ml-2">HKD</span>
                      <span className="ml-2">$</span>
                      <span className="hidden lg:flex lg:ml-2 font-light text-xs">
                        Hong Kong dollar
                      </span>
                    </div>
                  </td>
                  <td className="text-secondary font-medium text-right">
                    1,980.00
                  </td>
                  <td className="text-accent font-medium text-right">
                    2,015.00
                  </td>
                </tr>
                <tr className="">
                  <td className="">
                    <div className="flex py-1">
                      <img
                        alt="Indian rupee"
                        loading="lazy"
                        width="50"
                        height="50"
                        decoding="async"
                        data-nimg="1"
                        className="rounded-full overflow-hidden object-cover w-5 h-5"
                        src="https://region-api.pages.dev/flags/svg/IN.svg"
                      />
                      <span className="ml-2">INR</span>
                      <span className="ml-2">₹</span>
                      <span className="hidden lg:flex lg:ml-2 font-light text-xs">
                        Indian rupee
                      </span>
                    </div>
                  </td>
                  <td className="text-secondary font-medium text-right">
                    155.00
                  </td>
                  <td className="text-accent font-medium text-right">215.00</td>
                </tr>
                <tr className="">
                  <td className="">
                    <div className="flex py-1">
                      <img
                        alt="Japanese yen"
                        loading="lazy"
                        width="50"
                        height="50"
                        decoding="async"
                        data-nimg="1"
                        className="rounded-full overflow-hidden object-cover w-5 h-5"
                        src="https://region-api.pages.dev/flags/svg/JP.svg"
                      />
                      <span className="ml-2">JPY</span>
                      <span className="ml-2">¥</span>
                      <span className="hidden lg:flex lg:ml-2 font-light text-xs">
                        Japanese yen
                      </span>
                    </div>
                  </td>
                  <td className="text-secondary font-medium text-right">
                    104.80
                  </td>
                  <td className="text-accent font-medium text-right">106.90</td>
                </tr>
                <tr className="">
                  <td className="">
                    <div className="flex py-1">
                      <img
                        alt="Malaysian ringgit"
                        loading="lazy"
                        width="50"
                        height="50"
                        decoding="async"
                        data-nimg="1"
                        className="rounded-full overflow-hidden object-cover w-5 h-5"
                        src="https://region-api.pages.dev/flags/svg/MY.svg"
                      />
                      <span className="ml-2">MYR</span>
                      <span className="ml-2">RM</span>
                      <span className="hidden lg:flex lg:ml-2 font-light text-xs">
                        Malaysian ringgit
                      </span>
                    </div>
                  </td>
                  <td className="text-secondary font-medium text-right">
                    3,325.00
                  </td>
                  <td className="text-accent font-medium text-right">
                    3,365.00
                  </td>
                </tr>
                <tr className="">
                  <td className="">
                    <div className="flex py-1">
                      <img
                        alt="New Taiwan dollar"
                        loading="lazy"
                        width="50"
                        height="50"
                        decoding="async"
                        data-nimg="1"
                        className="rounded-full overflow-hidden object-cover w-5 h-5"
                        src="https://region-api.pages.dev/flags/svg/TW.svg"
                      />
                      <span className="ml-2">TWD</span>
                      <span className="ml-2">$</span>
                      <span className="hidden lg:flex lg:ml-2 font-light text-xs">
                        New Taiwan dollar
                      </span>
                    </div>
                  </td>
                  <td className="text-secondary font-medium text-right">
                    487.00
                  </td>
                  <td className="text-accent font-medium text-right">501.00</td>
                </tr>
                <tr className="">
                  <td className="">
                    <div className="flex py-1">
                      <img
                        alt="New Zealand dollar"
                        loading="lazy"
                        width="50"
                        height="50"
                        decoding="async"
                        data-nimg="1"
                        className="rounded-full overflow-hidden object-cover w-5 h-5"
                        src="https://region-api.pages.dev/flags/svg/PN.svg"
                      />
                      <span className="ml-2">NZD</span>
                      <span className="ml-2">$</span>
                      <span className="hidden lg:flex lg:ml-2 font-light text-xs">
                        New Zealand dollar
                      </span>
                    </div>
                  </td>
                  <td className="text-secondary font-medium text-right">
                    9,460.00
                  </td>
                  <td className="text-accent font-medium text-right">
                    9,605.00
                  </td>
                </tr>
                <tr className="">
                  <td className="">
                    <div className="flex py-1">
                      <img
                        alt="Philippine peso"
                        loading="lazy"
                        width="50"
                        height="50"
                        decoding="async"
                        data-nimg="1"
                        className="rounded-full overflow-hidden object-cover w-5 h-5"
                        src="https://region-api.pages.dev/flags/svg/PH.svg"
                      />
                      <span className="ml-2">PHP</span>
                      <span className="ml-2">₱</span>
                      <span className="hidden lg:flex lg:ml-2 font-light text-xs">
                        Philippine peso
                      </span>
                    </div>
                  </td>
                  <td className="text-secondary font-medium text-right">
                    272.00
                  </td>
                  <td className="text-accent font-medium text-right">285.00</td>
                </tr>
                <tr className="">
                  <td className="">
                    <div className="flex py-1">
                      <img
                        alt="Saudi riyal"
                        loading="lazy"
                        width="50"
                        height="50"
                        decoding="async"
                        data-nimg="1"
                        className="rounded-full overflow-hidden object-cover w-5 h-5"
                        src="https://region-api.pages.dev/flags/svg/SA.svg"
                      />
                      <span className="ml-2">SAR</span>
                      <span className="ml-2">ر.س</span>
                      <span className="hidden lg:flex lg:ml-2 font-light text-xs">
                        Saudi riyal
                      </span>
                    </div>
                  </td>
                  <td className="text-secondary font-medium text-right">
                    4,100.00
                  </td>
                  <td className="text-accent font-medium text-right">
                    4,205.00
                  </td>
                </tr>
                <tr className="">
                  <td className="">
                    <div className="flex py-1">
                      <img
                        alt="Singapore dollar"
                        loading="lazy"
                        width="50"
                        height="50"
                        decoding="async"
                        data-nimg="1"
                        className="rounded-full overflow-hidden object-cover w-5 h-5"
                        src="https://region-api.pages.dev/flags/svg/SG.svg"
                      />
                      <span className="ml-2">SGD</span>
                      <span className="ml-2">$</span>
                      <span className="hidden lg:flex lg:ml-2 font-light text-xs">
                        Singapore dollar
                      </span>
                    </div>
                  </td>
                  <td className="text-secondary font-medium text-right">
                    11,625.00
                  </td>
                  <td className="text-accent font-medium text-right">
                    11,670.00
                  </td>
                </tr>
              </tbody>
            </table>
          </TabPanel>
          <TabPanel value="2" className="p-0">
            <table className="table w-full text-center text-sm">
              <thead>
                <tr>
                  <th
                    colSpan={4}
                    className="text-gray-600 py-5 rounded-t-none border-b-0 whitespace-normal"
                  >
                    <p className="text-sm font-bold text-gray-800">
                      PT ABLE EXCHANGE
                    </p>
                    <p className="font-light text-xs mt-2 capitalize">
                      Jalan The Golf Island Boulevard, Ruko The Beach Blok A
                      Nomor 19, Desa/Kelurahan Kamal Muara, Kec. Penjaringan,
                      Kota Adm. Jakarta Utara, Provinsi DKI Jakarta
                    </p>
                    <div className="border-b border-dashed my-3"></div>
                  </th>
                </tr>
                <tr>
                  <th className="rounded-t-none text-left pb-2 uppercase">
                    Currency
                  </th>
                  <th className="text-right pb-2 uppercase">Buy</th>
                  <th className="text-right pb-2 uppercase">Sell</th>
                </tr>
              </thead>
              <tbody>
                <tr className="">
                  <td className="">
                    <div className="flex py-1">
                      <img
                        alt="Australian dollar"
                        loading="lazy"
                        width="50"
                        height="50"
                        decoding="async"
                        data-nimg="1"
                        className="rounded-full overflow-hidden object-cover w-5 h-5"
                        src="https://region-api.pages.dev/flags/svg/AU.svg"
                      />
                      <span className="ml-2">AUD</span>
                      <span className="ml-2">$</span>
                      <span className="hidden lg:flex lg:ml-2 font-light text-xs">
                        Australian dollar
                      </span>
                    </div>
                  </td>
                  <td className="text-secondary font-medium text-right">
                    10,220.00
                  </td>
                  <td className="text-accent font-medium text-right">
                    10,370.00
                  </td>
                </tr>
                <tr className="">
                  <td className="">
                    <div className="flex py-1">
                      <img
                        alt="British pound"
                        loading="lazy"
                        width="50"
                        height="50"
                        decoding="async"
                        data-nimg="1"
                        className="rounded-full overflow-hidden object-cover w-5 h-5"
                        src="https://region-api.pages.dev/flags/svg/GB.svg"
                      />
                      <span className="ml-2">GBP</span>
                      <span className="ml-2">£</span>
                      <span className="hidden lg:flex lg:ml-2 font-light text-xs">
                        British pound
                      </span>
                    </div>
                  </td>
                  <td className="text-secondary font-medium text-right">
                    19,740.00
                  </td>
                  <td className="text-accent font-medium text-right">
                    19,925.00
                  </td>
                </tr>
                <tr className="">
                  <td className="">
                    <div className="flex py-1">
                      <img
                        alt="Brunei dollar"
                        loading="lazy"
                        width="50"
                        height="50"
                        decoding="async"
                        data-nimg="1"
                        className="rounded-full overflow-hidden object-cover w-5 h-5"
                        src="https://region-api.pages.dev/flags/svg/BN.svg"
                      />
                      <span className="ml-2">BND</span>
                      <span className="ml-2">$</span>
                      <span className="hidden lg:flex lg:ml-2 font-light text-xs">
                        Brunei dollar
                      </span>
                    </div>
                  </td>
                  <td className="text-secondary font-medium text-right">
                    11,400.00
                  </td>
                  <td className="text-accent font-medium text-right">
                    11,700.00
                  </td>
                </tr>
                <tr className="">
                  <td className="">
                    <div className="flex py-1">
                      <img
                        alt="Canadian dollar"
                        loading="lazy"
                        width="50"
                        height="50"
                        decoding="async"
                        data-nimg="1"
                        className="rounded-full overflow-hidden object-cover w-5 h-5"
                        src="https://region-api.pages.dev/flags/svg/CA.svg"
                      />
                      <span className="ml-2">CAD</span>
                      <span className="ml-2">$</span>
                      <span className="hidden lg:flex lg:ml-2 font-light text-xs">
                        Canadian dollar
                      </span>
                    </div>
                  </td>
                  <td className="text-secondary font-medium text-right">
                    11,510.00
                  </td>
                  <td className="text-accent font-medium text-right">
                    11,670.00
                  </td>
                </tr>
                <tr className="">
                  <td className="">
                    <div className="flex py-1">
                      <img
                        alt="Chinese yuan"
                        loading="lazy"
                        width="50"
                        height="50"
                        decoding="async"
                        data-nimg="1"
                        className="rounded-full overflow-hidden object-cover w-5 h-5"
                        src="https://region-api.pages.dev/flags/svg/CN.svg"
                      />
                      <span className="ml-2">CNY</span>
                      <span className="ml-2">¥</span>
                      <span className="hidden lg:flex lg:ml-2 font-light text-xs">
                        Chinese yuan
                      </span>
                    </div>
                  </td>
                  <td className="text-secondary font-medium text-right">
                    2,155.00
                  </td>
                  <td className="text-accent font-medium text-right">
                    2,190.00
                  </td>
                </tr>
                <tr className="">
                  <td className="">
                    <div className="flex py-1">
                      <img
                        alt="Euro"
                        loading="lazy"
                        width="50"
                        height="50"
                        decoding="async"
                        data-nimg="1"
                        className="rounded-full overflow-hidden object-cover w-5 h-5"
                        src="https://region-api.pages.dev/flags/svg/EU.svg"
                      />
                      <span className="ml-2">EUR</span>
                      <span className="ml-2">€</span>
                      <span className="hidden lg:flex lg:ml-2 font-light text-xs">
                        Euro
                      </span>
                    </div>
                  </td>
                  <td className="text-secondary font-medium text-right">
                    16,955.00
                  </td>
                  <td className="text-accent font-medium text-right">
                    17,070.00
                  </td>
                </tr>
                <tr className="">
                  <td className="">
                    <div className="flex py-1">
                      <img
                        alt="Hong Kong dollar"
                        loading="lazy"
                        width="50"
                        height="50"
                        decoding="async"
                        data-nimg="1"
                        className="rounded-full overflow-hidden object-cover w-5 h-5"
                        src="https://region-api.pages.dev/flags/svg/HK.svg"
                      />
                      <span className="ml-2">HKD</span>
                      <span className="ml-2">$</span>
                      <span className="hidden lg:flex lg:ml-2 font-light text-xs">
                        Hong Kong dollar
                      </span>
                    </div>
                  </td>
                  <td className="text-secondary font-medium text-right">
                    1,980.00
                  </td>
                  <td className="text-accent font-medium text-right">
                    2,015.00
                  </td>
                </tr>
                <tr className="">
                  <td className="">
                    <div className="flex py-1">
                      <img
                        alt="Indian rupee"
                        loading="lazy"
                        width="50"
                        height="50"
                        decoding="async"
                        data-nimg="1"
                        className="rounded-full overflow-hidden object-cover w-5 h-5"
                        src="https://region-api.pages.dev/flags/svg/IN.svg"
                      />
                      <span className="ml-2">INR</span>
                      <span className="ml-2">₹</span>
                      <span className="hidden lg:flex lg:ml-2 font-light text-xs">
                        Indian rupee
                      </span>
                    </div>
                  </td>
                  <td className="text-secondary font-medium text-right">
                    155.00
                  </td>
                  <td className="text-accent font-medium text-right">215.00</td>
                </tr>
                <tr className="">
                  <td className="">
                    <div className="flex py-1">
                      <img
                        alt="Japanese yen"
                        loading="lazy"
                        width="50"
                        height="50"
                        decoding="async"
                        data-nimg="1"
                        className="rounded-full overflow-hidden object-cover w-5 h-5"
                        src="https://region-api.pages.dev/flags/svg/JP.svg"
                      />
                      <span className="ml-2">JPY</span>
                      <span className="ml-2">¥</span>
                      <span className="hidden lg:flex lg:ml-2 font-light text-xs">
                        Japanese yen
                      </span>
                    </div>
                  </td>
                  <td className="text-secondary font-medium text-right">
                    104.80
                  </td>
                  <td className="text-accent font-medium text-right">106.90</td>
                </tr>
                <tr className="">
                  <td className="">
                    <div className="flex py-1">
                      <img
                        alt="Malaysian ringgit"
                        loading="lazy"
                        width="50"
                        height="50"
                        decoding="async"
                        data-nimg="1"
                        className="rounded-full overflow-hidden object-cover w-5 h-5"
                        src="https://region-api.pages.dev/flags/svg/MY.svg"
                      />
                      <span className="ml-2">MYR</span>
                      <span className="ml-2">RM</span>
                      <span className="hidden lg:flex lg:ml-2 font-light text-xs">
                        Malaysian ringgit
                      </span>
                    </div>
                  </td>
                  <td className="text-secondary font-medium text-right">
                    3,325.00
                  </td>
                  <td className="text-accent font-medium text-right">
                    3,365.00
                  </td>
                </tr>
                <tr className="">
                  <td className="">
                    <div className="flex py-1">
                      <img
                        alt="New Taiwan dollar"
                        loading="lazy"
                        width="50"
                        height="50"
                        decoding="async"
                        data-nimg="1"
                        className="rounded-full overflow-hidden object-cover w-5 h-5"
                        src="https://region-api.pages.dev/flags/svg/TW.svg"
                      />
                      <span className="ml-2">TWD</span>
                      <span className="ml-2">$</span>
                      <span className="hidden lg:flex lg:ml-2 font-light text-xs">
                        New Taiwan dollar
                      </span>
                    </div>
                  </td>
                  <td className="text-secondary font-medium text-right">
                    487.00
                  </td>
                  <td className="text-accent font-medium text-right">501.00</td>
                </tr>
                <tr className="">
                  <td className="">
                    <div className="flex py-1">
                      <img
                        alt="New Zealand dollar"
                        loading="lazy"
                        width="50"
                        height="50"
                        decoding="async"
                        data-nimg="1"
                        className="rounded-full overflow-hidden object-cover w-5 h-5"
                        src="https://region-api.pages.dev/flags/svg/PN.svg"
                      />
                      <span className="ml-2">NZD</span>
                      <span className="ml-2">$</span>
                      <span className="hidden lg:flex lg:ml-2 font-light text-xs">
                        New Zealand dollar
                      </span>
                    </div>
                  </td>
                  <td className="text-secondary font-medium text-right">
                    9,460.00
                  </td>
                  <td className="text-accent font-medium text-right">
                    9,605.00
                  </td>
                </tr>
                <tr className="">
                  <td className="">
                    <div className="flex py-1">
                      <img
                        alt="Philippine peso"
                        loading="lazy"
                        width="50"
                        height="50"
                        decoding="async"
                        data-nimg="1"
                        className="rounded-full overflow-hidden object-cover w-5 h-5"
                        src="https://region-api.pages.dev/flags/svg/PH.svg"
                      />
                      <span className="ml-2">PHP</span>
                      <span className="ml-2">₱</span>
                      <span className="hidden lg:flex lg:ml-2 font-light text-xs">
                        Philippine peso
                      </span>
                    </div>
                  </td>
                  <td className="text-secondary font-medium text-right">
                    272.00
                  </td>
                  <td className="text-accent font-medium text-right">285.00</td>
                </tr>
                <tr className="">
                  <td className="">
                    <div className="flex py-1">
                      <img
                        alt="Saudi riyal"
                        loading="lazy"
                        width="50"
                        height="50"
                        decoding="async"
                        data-nimg="1"
                        className="rounded-full overflow-hidden object-cover w-5 h-5"
                        src="https://region-api.pages.dev/flags/svg/SA.svg"
                      />
                      <span className="ml-2">SAR</span>
                      <span className="ml-2">ر.س</span>
                      <span className="hidden lg:flex lg:ml-2 font-light text-xs">
                        Saudi riyal
                      </span>
                    </div>
                  </td>
                  <td className="text-secondary font-medium text-right">
                    4,100.00
                  </td>
                  <td className="text-accent font-medium text-right">
                    4,205.00
                  </td>
                </tr>
                <tr className="">
                  <td className="">
                    <div className="flex py-1">
                      <img
                        alt="Singapore dollar"
                        loading="lazy"
                        width="50"
                        height="50"
                        decoding="async"
                        data-nimg="1"
                        className="rounded-full overflow-hidden object-cover w-5 h-5"
                        src="https://region-api.pages.dev/flags/svg/SG.svg"
                      />
                      <span className="ml-2">SGD</span>
                      <span className="ml-2">$</span>
                      <span className="hidden lg:flex lg:ml-2 font-light text-xs">
                        Singapore dollar
                      </span>
                    </div>
                  </td>
                  <td className="text-secondary font-medium text-right">
                    11,625.00
                  </td>
                  <td className="text-accent font-medium text-right">
                    11,670.00
                  </td>
                </tr>
                <tr className="">
                  <td className="">
                    <div className="flex py-1">
                      <img
                        alt="South Korean won"
                        loading="lazy"
                        width="50"
                        height="50"
                        decoding="async"
                        data-nimg="1"
                        className="rounded-full overflow-hidden object-cover w-5 h-5"
                        src="https://region-api.pages.dev/flags/svg/KR.svg"
                      />
                      <span className="ml-2">KRW</span>
                      <span className="ml-2">₩</span>
                      <span className="hidden lg:flex lg:ml-2 font-light text-xs">
                        South Korean won
                      </span>
                    </div>
                  </td>
                  <td className="text-secondary font-medium text-right">
                    11.43
                  </td>
                  <td className="text-accent font-medium text-right">12.03</td>
                </tr>
                <tr className="">
                  <td className="">
                    <div className="flex py-1">
                      <img
                        alt="Swiss franc"
                        loading="lazy"
                        width="50"
                        height="50"
                        decoding="async"
                        data-nimg="1"
                        className="rounded-full overflow-hidden object-cover w-5 h-5"
                        src="https://region-api.pages.dev/flags/svg/CH.svg"
                      />
                      <span className="ml-2">CHF</span>
                      <span className="ml-2">Fr.</span>
                      <span className="hidden lg:flex lg:ml-2 font-light text-xs">
                        Swiss franc
                      </span>
                    </div>
                  </td>
                  <td className="text-secondary font-medium text-right">
                    17,910.00
                  </td>
                  <td className="text-accent font-medium text-right">
                    18,100.00
                  </td>
                </tr>
                <tr className="">
                  <td className="">
                    <div className="flex py-1">
                      <img
                        alt="Thai baht"
                        loading="lazy"
                        width="50"
                        height="50"
                        decoding="async"
                        data-nimg="1"
                        className="rounded-full overflow-hidden object-cover w-5 h-5"
                        src="https://region-api.pages.dev/flags/svg/TH.svg"
                      />
                      <span className="ml-2">THB</span>
                      <span className="ml-2">฿</span>
                      <span className="hidden lg:flex lg:ml-2 font-light text-xs">
                        Thai baht
                      </span>
                    </div>
                  </td>
                  <td className="text-secondary font-medium text-right">
                    439.00
                  </td>
                  <td className="text-accent font-medium text-right">446.00</td>
                </tr>
                <tr className="">
                  <td className="">
                    <div className="flex py-1">
                      <img
                        alt="Turkish lira"
                        loading="lazy"
                        width="50"
                        height="50"
                        decoding="async"
                        data-nimg="1"
                        className="rounded-full overflow-hidden object-cover w-5 h-5"
                        src="https://region-api.pages.dev/flags/svg/TR.svg"
                      />
                      <span className="ml-2">TRY</span>
                      <span className="ml-2">₺</span>
                      <span className="hidden lg:flex lg:ml-2 font-light text-xs">
                        Turkish lira
                      </span>
                    </div>
                  </td>
                  <td className="text-secondary font-medium text-right">
                    520.00
                  </td>
                  <td className="text-accent font-medium text-right">550.00</td>
                </tr>
                <tr className="">
                  <td className="">
                    <div className="flex py-1">
                      <img
                        alt="United Arab Emirates dirham"
                        loading="lazy"
                        width="50"
                        height="50"
                        decoding="async"
                        data-nimg="1"
                        className="rounded-full overflow-hidden object-cover w-5 h-5"
                        src="https://region-api.pages.dev/flags/svg/AE.svg"
                      />
                      <span className="ml-2">AED</span>
                      <span className="ml-2">د.إ</span>
                      <span className="hidden lg:flex lg:ml-2 font-light text-xs">
                        United Arab Emirates dirham
                      </span>
                    </div>
                  </td>
                  <td className="text-secondary font-medium text-right">
                    4,190.00
                  </td>
                  <td className="text-accent font-medium text-right">
                    4,275.00
                  </td>
                </tr>
                <tr className="">
                  <td className="">
                    <div className="flex py-1">
                      <img
                        alt="United States dollar"
                        loading="lazy"
                        width="50"
                        height="50"
                        decoding="async"
                        data-nimg="1"
                        className="rounded-full overflow-hidden object-cover w-5 h-5"
                        src="https://region-api.pages.dev/flags/svg/US.svg"
                      />
                      <span className="ml-2">USD</span>
                      <span className="ml-2">$</span>
                      <span className="hidden lg:flex lg:ml-2 font-light text-xs">
                        United States dollar
                      </span>
                    </div>
                  </td>
                  <td className="text-secondary font-medium text-right">
                    15,550.00
                  </td>
                  <td className="text-accent font-medium text-right">
                    15,670.00
                  </td>
                </tr>
                <tr className="">
                  <td className="">
                    <div className="flex py-1">
                      <img
                        alt="Vietnamese đồng"
                        loading="lazy"
                        width="50"
                        height="50"
                        decoding="async"
                        data-nimg="1"
                        className="rounded-full overflow-hidden object-cover w-5 h-5"
                        src="https://region-api.pages.dev/flags/svg/VN.svg"
                      />
                      <span className="ml-2">VND</span>
                      <span className="ml-2">₫</span>
                      <span className="hidden lg:flex lg:ml-2 font-light text-xs">
                        Vietnamese đồng
                      </span>
                    </div>
                  </td>
                  <td className="text-secondary font-medium text-right">
                    0.61
                  </td>
                  <td className="text-accent font-medium text-right">0.68</td>
                </tr>
              </tbody>
            </table>
          </TabPanel>
        </TabContext>
      </Box>
    </div>
  );
}
