/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import React from "react";
// import "./style.css"

// const Cart: NextPage = ({ CartItem, addToCart, decreaseQty }) => {
const Checkout: NextPage = () => {
  // prodcut qty total
  return (
    <>
      <div className="container mx-auto mt-10">
        <div className="py-4 container flex gap-3 items-center">
          <a href="index.html" className="text-primary text-base">
            <i className="fas fa-home"></i>
          </a>
          <span className="text-sm text-gray-400">
            <i className="fas fa-chevron-right"></i>
          </span>
          <p className="text-gray-600 font-medium uppercase">My Account</p>
        </div>
        {/* <!-- breadcrum end --> */}
        {/* <!-- checkout wrapper --> */}
        <div className="container lg:grid grid-cols-12 gap-6 items-start pb-16 pt-4">
          {/* <!-- checkout form --> */}
          <div className="lg:col-span-8 border border-gray-200 px-4 py-4 rounded">
            <form action="">
              <h3 className="text-lg font-medium capitalize mb-4">checkout</h3>

              <div className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-gray-600 mb-2 block">
                      First Name <span className="text-primary">*</span>
                    </label>
                    <input
                      type="text"
                      className="
                  shadow
                  appearance-none
                  border
                  rounded
                  w-full
                  py-2
                  px-3
                  text-gray-700
                  leading-tight
                  focus:outline-none focus:shadow-outline
                "
                      id="username"
                      placeholder="first name"
                    />
                  </div>
                  <div>
                    <label className="text-gray-600 mb-2 block">
                      Last Name <span className="text-primary">*</span>
                    </label>
                    <input
                      type="text"
                      className="
                  shadow
                  appearance-none
                  border
                  rounded
                  w-full
                  py-2
                  px-3
                  text-gray-700
                  leading-tight
                  focus:outline-none focus:shadow-outline
                "
                      id="username"
                      placeholder="last name"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-gray-600 mb-2 block">
                    County/Region <span className="text-primary">*</span>
                  </label>
                  <input
                    type="text"
                    className="
                shadow
                appearance-none
                border
                rounded
                w-full
                py-2
                px-3
                text-gray-700
                leading-tight
                focus:outline-none focus:shadow-outline
              "
                    id="username"
                    placeholder="Morocco"
                  />
                </div>
                <div>
                  <label className="text-gray-600 mb-2 block">
                    Street Address <span className="text-primary">*</span>
                  </label>
                  <input
                    type="text"
                    className="
                shadow
                appearance-none
                border
                rounded
                w-full
                py-2
                px-3
                text-gray-700
                leading-tight
                focus:outline-none focus:shadow-outline
              "
                    id="username"
                    placeholder="street"
                    v-model="address"
                  />
                </div>
                <div>
                  <label className="text-gray-600 mb-2 block">
                    Town/City <span className="text-primary">*</span>
                  </label>
                  <input
                    type="text"
                    className="
                shadow
                appearance-none
                border
                rounded
                w-full
                py-2
                px-3
                text-gray-700
                leading-tight
                focus:outline-none focus:shadow-outline
              "
                    id="username"
                    placeholder="safi"
                    v-model="city"
                  />
                </div>
                <div>
                  <label className="text-gray-600 mb-2 block">
                    Zip Code <span className="text-primary">*</span>
                  </label>
                  <input
                    type="text"
                    className="
                shadow
                appearance-none
                border
                rounded
                w-full
                py-2
                px-3
                text-gray-700
                leading-tight
                focus:outline-none focus:shadow-outline
              "
                    id="username"
                    placeholder="46000"
                    v-model="zipCode"
                  />
                </div>
                <div>
                  <label className="text-gray-600 mb-2 block">
                    Phone Number <span className="text-primary">*</span>
                  </label>
                  <input
                    type="text"
                    className="
                shadow
                appearance-none
                border
                rounded
                w-full
                py-2
                px-3
                text-gray-700
                leading-tight
                focus:outline-none focus:shadow-outline
              "
                    id="username"
                    placeholder="+212 .."
                    v-model="phone"
                  />
                </div>
                <a
                  href="#"
                  className="
              bg-gray-800
              border border-primary
              text-gray-100
              px-4
              py-3
              font-medium
              rounded-md
              uppercase
              hover:bg-amber-200 hover:text-gray-800
              transition
              text-sm
              w-full
              block
              text-center
            "
                >
                  Checkout
                </a>
              </div>
            </form>
          </div>
          {/* <!-- checkout form end --> */}

          {/* <!-- order summary --> */}
          <div
            className="
        lg:col-span-4
        border border-gray-200
        px-4
        py-4
        rounded
        mt-6
        lg:mt-0
      "
          >
            <h4 className="text-gray-800 text-lg mb-4 font-medium uppercase">
              ORDER SUMMARY
            </h4>
            <div className="space-y-2">
              <div className="flex justify-between">
                <div>
                  <h5 className="text-gray-800 font-medium">
                    List products 
                  </h5>
                </div>
                <p className="text-gray-600">x1</p>
                <p className="text-gray-800 font-medium">$price</p>
              </div>
            </div>
            <div className="flex justify-between border-b border-gray-200 mt-1">
              <h4 className="text-gray-800 font-medium my-3 uppercase">
                Subtotal
              </h4>
              <h4 className="text-gray-800 font-medium my-3 uppercase">$122</h4>
            </div>
            <div className="flex justify-between border-b border-gray-200">
              <h4 className="text-gray-800 font-medium my-3 uppercase">
                Shipping
              </h4>
              <h4 className="text-gray-800 font-medium my-3 uppercase">STANDARD</h4>
            </div>
            <div className="flex justify-between">
              <h4 className="text-gray-800 font-semibold my-3 uppercase">
                Total
              </h4>
              <h4 className="text-gray-800 font-semibold my-3 uppercase">
                $122
              </h4>
            </div>

            {/* <!-- agreeement  --> */}
            <div className="flex items-center mb-4 mt-2">
              <input
                type="checkbox"
                id="agreement"
                className="text-primary focus:ring-0 rounded-sm cursor-pointer w-3 h-3"
              />
              <label
                htmlFor="agreement"
                className="text-gray-600 ml-3 cursor-pointer text-sm"
              >
                Agree to our
                <a href="#" className="text-primary">
                  terms & conditions
                </a>
              </label>
            </div>

            {/* <!-- checkout --> */}
            <a
              href="#"
              className="
          bg-gray-800
          border border-primary
          text-gray-200
          px-4
          py-3
          font-medium
          rounded-md
          uppercase
          hover:bg-amber-200  hover:text-gray-800
          transition
          text-sm
          w-full
          block
          text-center
        "
            >
              Place order
            </a>
            {/* <!-- checkout end --> */}
          </div>
          {/* <!-- order summary end --> */}
        </div>
      </div>
    </>
  );
};

export default Checkout;
