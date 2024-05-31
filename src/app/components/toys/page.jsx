import React from "react";
import { FcLike } from "react-icons/fc";
import Pages from "../pagination/page";

const Toyes = () => {
  return (
    <div>
      <div className="container text-center">
        <h1> Toyes Baby</h1>
      </div>
      <div className="text-center mt-5 mb-5">
        <h1 className="btn btn-outline-danger w-50 text-black bg-amber-200">
          View All product
        </h1>
      </div>

      <div className="shell">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="wsk-cp-product">
                <div className="wsk-cp-img">
                  <img
                    src="/img/toy1.jpg"
                    alt="Product"
                    className="img-responsive"
                  />
                </div>
                <div className="wsk-cp-text">
                  <div className="category">
                    <span>Detailes</span>
                  </div>
                  <div className="title-product">
                    <h3>200+ bought in past month</h3>
                  </div>
                  <div className="description-prod">
                    <p>
                      Meland Kids Camping Set with Tent - Toddler Toys for Boys
                      with Campfire, Camping Toys for Kids Indoor Outdoor
                      Pretend Play,
                    </p>
                  </div>
                  <span className="price">50$</span>
                  <div className="card-footer">
                    <div className="flex">
                      <FcLike className="mr-5 text-5xl" />
                      <button className="btn btn-outline-danger ml-5 text-black">
                        Add{" "}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="wsk-cp-product">
                <div className="wsk-cp-img">
                  <img
                    src="/img/toy2.jpg"
                    alt="Product"
                    className="img-responsive"
                  />
                </div>
                <div className="wsk-cp-text">
                  <div className="category">
                    <span>Detailes</span>
                  </div>
                  <div className="title-product">
                    <h3>200+ bought in past month</h3>
                  </div>
                  <div className="description-prod">
                    <p>
                      Meland Kids Camping Set with Tent - Toddler Toys for Boys
                      with Campfire, Camping Toys for Kids Indoor Outdoor
                      Pretend Play,
                    </p>
                  </div>
                  <span className="price">50$</span>
                  <div className="card-footer">
                    <div className="flex">
                      <FcLike className="mr-5 text-5xl" />
                      <button className="btn btn-outline-danger ml-5 text-black">
                        Add{" "}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="wsk-cp-product">
                <div className="wsk-cp-img">
                  <img
                    src="/img/toy3.jpg"
                    alt="Product"
                    className="img-responsive"
                  />
                </div>
                <div className="wsk-cp-text">
                  <div className="category">
                    <span>Detailes</span>
                  </div>
                  <div className="title-product">
                    <h3>200+ bought in past month</h3>
                  </div>
                  <div className="description-prod">
                    <p>
                      Meland Kids Camping Set with Tent - Toddler Toys for Boys
                      with Campfire, Camping Toys for Kids Indoor Outdoor
                      Pretend Play,
                    </p>
                  </div>
                  <span className="price">50$</span>
                  <div className="card-footer">
                    <div className="flex">
                      <FcLike className="mr-5 text-5xl" />
                      <button className="btn btn-outline-danger ml-5 text-black">
                        Add{" "}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="wsk-cp-product">
                <div className="wsk-cp-img">
                  <img
                    src="/img/toy4.jpg"
                    alt="Product"
                    className="img-responsive"
                  />
                </div>
                <div className="wsk-cp-text">
                  <div className="category">
                    <span>Detailes</span>
                  </div>
                  <div className="title-product">
                    <h3>200+ bought in past month</h3>
                  </div>
                  <div className="description-prod">
                    <p>
                      Meland Kids Camping Set with Tent - Toddler Toys for Boys
                      with Campfire, Camping Toys for Kids Indoor Outdoor
                      Pretend Play,
                    </p>
                  </div>
                  <span className="price">50$</span>
                  <div className="card-footer">
                    <div className="flex">
                      <FcLike className="mr-5 text-5xl" />
                      <button className="btn btn-outline-danger ml-5 text-black">
                        Add{" "}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Pages />
    </div>
  );
};

export default Toyes;
