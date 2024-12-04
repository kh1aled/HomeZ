import React from "react";
import "./ResidenciesStyles.css";
import "swiper/css";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import layer from "../../assets/analog-landscape-city-with-buildings.jpg";
import { slideSettings } from "./common";
const Residencies = () => {
  return (
    <div className="residencies paddings position-relative innerWidth bg-white ">
      <div className="r-head flexColStart innerWidth paddings">
        <span className="orangeText">Best Choices</span>
        <span className="primaryText">Popular Residencies</span>
      </div>
      <Swiper
        {...slideSettings}
        // spaceBetween={50}
        // slidesPerView={1}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
        className="swiper-container"
        >
        
        <SliderButtons/>
        <SwiperSlide className="slide">
          <div class="flexColStart r-card" style={{ width: "18rem" }}>
            <img
              class="card-img-top rounded-4"
              src={layer}
              alt="Card image cap"
            />
            <span className="secondaryText r-price">
              <span style={{ color: "orange" }}>$</span>
              <span>1111</span>
            </span>
            <span className="primaryText title">real state</span>
            <span className="secondaryText desc">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores
              quasi dolor sed? Itaque voluptates deserunt a ducimus minus.
              Adipisci perferendis architecto tenetur numquam recusandae illo
              rem voluptates quidem consequatur laboriosam! Numquam facilis at
              fuga. Aliquid nemo delectus iure ut pariatur! Minus dolorum labore
              ipsum eum velit sunt accusantium id dolores, dolor, quidem iure,
              eveniet accusamus dignissimos sint inventore nihil vel. Tempora
              sint minima cum aliquid sunt atque ipsa dignissimos dolore,
              officiis repudiandae similique nesciunt vitae autem. Accusantium
              aspernatur commodi porro nisi. Quis numquam iusto ducimus quia
              fugit cupiditate dicta dolorum! Omnis aliquid atque odio
              perferendis iusto eum necessitatibus eaque. Cum, molestias.
              Repellendus, omnis unde culpa dolor nostrum iusto ipsa cum illo
              magni, voluptatum, doloremque laudantium amet ducimus quibusdam
              laboriosam enim!
            </span>

            {/* <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div> */}
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide">
          <div class="flexColStart r-card" style={{ width: "18rem" }}>
            <img
              class="card-img-top rounded-4"
              src={layer}
              alt="Card image cap"
            />
            <span className="secondaryText r-price">
              <span style={{ color: "orange" }}>$</span>
              <span>1111</span>
            </span>
            <span className="primaryText title">real state</span>
            <span className="secondaryText desc">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores
              quasi dolor sed? Itaque voluptates deserunt a ducimus minus.
              Adipisci perferendis architecto tenetur numquam recusandae illo
              rem voluptates quidem consequatur laboriosam! Numquam facilis at
              fuga. Aliquid nemo delectus iure ut pariatur! Minus dolorum labore
              ipsum eum velit sunt accusantium id dolores, dolor, quidem iure,
              eveniet accusamus dignissimos sint inventore nihil vel. Tempora
              sint minima cum aliquid sunt atque ipsa dignissimos dolore,
              officiis repudiandae similique nesciunt vitae autem. Accusantium
              aspernatur commodi porro nisi. Quis numquam iusto ducimus quia
              fugit cupiditate dicta dolorum! Omnis aliquid atque odio
              perferendis iusto eum necessitatibus eaque. Cum, molestias.
              Repellendus, omnis unde culpa dolor nostrum iusto ipsa cum illo
              magni, voluptatum, doloremque laudantium amet ducimus quibusdam
              laboriosam enim!
            </span>

            {/* <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div> */}
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide">
          <div class="flexColStart r-card" style={{ width: "18rem" }}>
            <img
              class="card-img-top rounded-4"
              src={layer}
              alt="Card image cap"
            />
            <span className="secondaryText r-price">
              <span style={{ color: "orange" }}>$</span>
              <span>1111</span>
            </span>
            <span className="primaryText title">real state</span>
            <span className="secondaryText desc">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores
              quasi dolor sed? Itaque voluptates deserunt a ducimus minus.
              Adipisci perferendis architecto tenetur numquam recusandae illo
              rem voluptates quidem consequatur laboriosam! Numquam facilis at
              fuga. Aliquid nemo delectus iure ut pariatur! Minus dolorum labore
              ipsum eum velit sunt accusantium id dolores, dolor, quidem iure,
              eveniet accusamus dignissimos sint inventore nihil vel. Tempora
              sint minima cum aliquid sunt atque ipsa dignissimos dolore,
              officiis repudiandae similique nesciunt vitae autem. Accusantium
              aspernatur commodi porro nisi. Quis numquam iusto ducimus quia
              fugit cupiditate dicta dolorum! Omnis aliquid atque odio
              perferendis iusto eum necessitatibus eaque. Cum, molestias.
              Repellendus, omnis unde culpa dolor nostrum iusto ipsa cum illo
              magni, voluptatum, doloremque laudantium amet ducimus quibusdam
              laboriosam enim!
            </span>

            {/* <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div> */}
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide">
          <div class="flexColStart r-card" style={{ width: "18rem" }}>
            <img
              class="card-img-top rounded-4"
              src={layer}
              alt="Card image cap"
            />
            <span className="secondaryText r-price">
              <span style={{ color: "orange" }}>$</span>
              <span>1111</span>
            </span>
            <span className="primaryText title">real state</span>
            <span className="secondaryText desc">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores
              quasi dolor sed? Itaque voluptates deserunt a ducimus minus.
              Adipisci perferendis architecto tenetur numquam recusandae illo
              rem voluptates quidem consequatur laboriosam! Numquam facilis at
              fuga. Aliquid nemo delectus iure ut pariatur! Minus dolorum labore
              ipsum eum velit sunt accusantium id dolores, dolor, quidem iure,
              eveniet accusamus dignissimos sint inventore nihil vel. Tempora
              sint minima cum aliquid sunt atque ipsa dignissimos dolore,
              officiis repudiandae similique nesciunt vitae autem. Accusantium
              aspernatur commodi porro nisi. Quis numquam iusto ducimus quia
              fugit cupiditate dicta dolorum! Omnis aliquid atque odio
              perferendis iusto eum necessitatibus eaque. Cum, molestias.
              Repellendus, omnis unde culpa dolor nostrum iusto ipsa cum illo
              magni, voluptatum, doloremque laudantium amet ducimus quibusdam
              laboriosam enim!
            </span>

            {/* <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div> */}
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide">
          <div class="flexColStart r-card" style={{ width: "18rem" }}>
            <img
              class="card-img-top rounded-4"
              src={layer}
              alt="Card image cap"
            />
            <span className="secondaryText r-price">
              <span style={{ color: "orange" }}>$</span>
              <span>1111</span>
            </span>
            <span className="primaryText title">real state</span>
            <span className="secondaryText desc">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores
              quasi dolor sed? Itaque voluptates deserunt a ducimus minus.
              Adipisci perferendis architecto tenetur numquam recusandae illo
              rem voluptates quidem consequatur laboriosam! Numquam facilis at
              fuga. Aliquid nemo delectus iure ut pariatur! Minus dolorum labore
              ipsum eum velit sunt accusantium id dolores, dolor, quidem iure,
              eveniet accusamus dignissimos sint inventore nihil vel. Tempora
              sint minima cum aliquid sunt atque ipsa dignissimos dolore,
              officiis repudiandae similique nesciunt vitae autem. Accusantium
              aspernatur commodi porro nisi. Quis numquam iusto ducimus quia
              fugit cupiditate dicta dolorum! Omnis aliquid atque odio
              perferendis iusto eum necessitatibus eaque. Cum, molestias.
              Repellendus, omnis unde culpa dolor nostrum iusto ipsa cum illo
              magni, voluptatum, doloremque laudantium amet ducimus quibusdam
              laboriosam enim!
            </span>

            {/* <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div> */}
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export const SliderButtons = () => {
  const swiper = useSwiper();
  return(
    <div className="r-button position-absolute g-1 flexCenter">
      <button className="btn bg-primary text-white prevbtn me-2" onClick={()=>swiper.slidePrev()}>&lt;</button>
      <button className="btn bg-primary text-white nextbtn" onClick={()=>swiper.slideNext()}>&gt;</button>
    </div>
  ) 
};

export default Residencies;
