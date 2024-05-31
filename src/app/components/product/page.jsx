"use client";
import React from "react";
import { FcLike } from "react-icons/fc";
import { toast } from "react-toastify";
import Pages from "../pagination/page";

const Product = () => {
  const Add = () => {
    toast.success("Thanks for Buying");
  };

  return (
    <div className="container  ">
      <div className="text-center">
        <h1 className="h1 text-warning">Fashion Section</h1>
        <div className="text-center m-5">
          <h1 className="btn btn-outline-danger w-50 text-black bg-amber-200">
            View All product
          </h1>
        </div>
      </div>

      <div className="row">
        <div class="product-card col-auto">
          <div class="badge">Hot</div>
          <div class="product-tumb">
            <img src="/img/clo5.jpg" alt="" className="mr-16" />
          </div>
          <div class="product-details">
            <span class="product-catagory">
              {" "}
              LILLUSORY 2 Piece Knit Sets For
            </span>
            <h4>
              <a href="">Women Trendy Sweatsuit</a>
            </h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero,
              possimus nostrum!
            </p>
            <div class="product-bottom-details">
              <div class="product-price">
                <small>$66.00</small>$30.99
              </div>
              <div class="product-links">
                <a href="">
                  <i class="fa fa-heart"></i>
                </a>
                <a href="">
                  <i class="fa fa-shopping-cart"></i>
                </a>
              </div>
            </div>
            <div className="flex">
              <button
                onClick={Add}
                className="btn btn-outline-warning text-black"
              >
                Add to Cart
              </button>

              <FcLike className="mr-5 text-5xl" />
            </div>
          </div>
        </div>

        <div class="product-card col-auto">
          <div class="badge">Hot</div>
          <div class="product-tumb">
            <img src="/img/man.jpg" alt="" className="mr-16" />
          </div>
          <div class="product-details">
            <span class="product-catagory">Billabong Man New Waves</span>
            <h4>
              <a href="">Stripe Pant</a>
            </h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero,
              possimus nostrum!
            </p>
            <div class="product-bottom-details">
              <div class="product-price">
                <small>$99.00</small>$80.99
              </div>
              <div class="product-links">
                <a href="">
                  <i class="fa fa-heart"></i>
                </a>
                <a href="">
                  <i class="fa fa-shopping-cart"></i>
                </a>
              </div>
            </div>
            <div className="flex">
              <button
                onClick={Add}
                className="btn btn-outline-warning text-black"
              >
                Add to Cart
              </button>

              <FcLike className="mr-5 text-5xl" />
            </div>
          </div>
        </div>

        <div class="product-card col-auto">
          <div class="badge">Hot</div>
          <div class="product-tumb">
            <img src="/img/clo3.jpg" alt="" className="mr-16" />
          </div>
          <div class="product-details">
            <span class="product-catagory">Dokotoo Women's 2024 Fashion</span>
            <h4>
              <a href="">Dokotoo Women's 2024 Fashion</a>
            </h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero,
              possimus nostrum!
            </p>
            <div class="product-bottom-details">
              <div class="product-price">
                <small>$100.00</small>$90.99
              </div>
              <div class="product-links">
                <a href="">
                  <i class="fa fa-heart"></i>
                </a>
                <a href="">
                  <i class="fa fa-shopping-cart"></i>
                </a>
              </div>
            </div>
            <div className="flex">
              <button
                onClick={Add}
                className="btn btn-outline-warning text-black"
              >
                Add to Cart
              </button>

              <FcLike className="mr-5 text-5xl" />
            </div>
          </div>
        </div>

        <div class="product-card col-auto">
          <div class="badge">Hot</div>
          <div class="product-tumb">
            <img src="/img/man2.jpg" className="mr-16" alt="" />
          </div>
          <div class="product-details">
            <span class="product-catagory">
              ROSELINLIN Man Short Sleeve Shirts Long Sleeve Floral{" "}
            </span>
            <h4>
              <a href="">Summer Tops Loose Fit for</a>
            </h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero,
              possimus nostrum!
            </p>
            <div class="product-bottom-details">
              <div class="product-price">
                <small>$96.00</small>$40.99
              </div>
              <div class="product-links">
                <a href="">
                  <i class="fa fa-heart"></i>
                </a>
                <a href="">
                  <i class="fa fa-shopping-cart"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="flex">
            <button
              onClick={Add}
              className="btn btn-outline-warning text-black"
            >
              Add to Cart
            </button>

            <FcLike className="mr-5 text-5xl" />
          </div>
        </div>
      </div>
      <Pages />
    </div>
  );
};

export default Product;
