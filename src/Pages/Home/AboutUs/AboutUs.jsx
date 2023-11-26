import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import img1 from '../../../assets/salider image/salidar-5.jpg'
import img2 from '../../../assets/salider image/salidar 1.jpg'
import img3 from '../../../assets/salider image/salider 2.jpg'
import img4 from '../../../assets/salider image/salidar 3.jpg'
import img5 from '../../../assets/salider image/salidar4.jpg'

const AboutUs = () => {
    return (
       <div className='mt-10 mb-24'>
        <h1 className='text-3xl font-extrabold text-center text-[#D99904]'>Student Hostel <br />
            on University Campus</h1>
     <div className='mt-10'>
     <Swiper 
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper "
      >
        <SwiperSlide>
          <img className='w-[312px] h-[400px]' src={img1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='w-[312px] h-[400px]' src={img2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img className='w-[312px] h-[400px]' src={img3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img className='w-[312px] h-[400px]' src={img4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img className='w-[312px] h-[400px]' src={img5} alt="" />
        </SwiperSlide>
        
      </Swiper>
     </div>
       </div>
    );
};

export default AboutUs;