import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

export default () => {
  return (
    <div className='max-w-7xl m-auto'>
      <Swiper
        spaceBetween={50}
        slidesPerView={2}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div >
            <img className='h-24' src="https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png" alt="" />
            <h1>Designer</h1>
            <q>lorem ipsum dolor sit amet</q>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img className='h-24' src="https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678130-profile-alt-4-512.png" alt="" />
            <h1>Designer</h1>
            <q>lorem ipsum dolor sit amet</q>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img className='h-24' src="https://cdn1.iconfinder.com/data/icons/user-avatar-20/64/54-woman-512.png" alt="" />
            <h1>Designer</h1>
            <q>lorem ipsum dolor sit amet</q>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img className='h-24' src="https://cdn1.iconfinder.com/data/icons/user-avatar-20/64/47-woman-512.png" alt="" />
            <h1>Designer</h1>
            <q>lorem ipsum dolor sit amet</q>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};