import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import logo from '../assets/logo.png';
import uni1 from '../assets/uni-1.png';
import Ai from '../assets/AI.png';
import room from '../assets/room.png';
import doc from '../assets/doc.png';
import spo from '../assets/spo.png';
import com from '../assets/com.png';
import lic from '../assets/lic.png';
import degree from '../assets/degree.png';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Section from './Section'; // ✅ Import Section component
import Footer from './Footer';

export default function CarouselLib() {
  const imgitems = [
    { id: 1, img: logo },
    { id: 2, img: lic },
    { id: 3, img: uni1 },
    { id: 4, img: Ai },
    { id: 5, img: room },
    { id: 6, img: doc },
    { id: 7, img: spo },
    { id: 8, img: com },
    { id: 9, img: degree },
  ];

  return (
    <>
    <section className="w-full bg-white py-8">
      <div className="max-w-7xl mx-auto">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper mt-3 rounded-xl w-full h-[80vh]"
        >
          {imgitems.map(item => (
            <SwiperSlide key={item.id}>
              <img
                src={item.img}
                loading="lazy"
                alt={`slide-${item.id}`}
                className="w-full h-full rounded-2xl object-fill"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Render Section below the carousel */}
        <Section />
      </div>
    </section>
    <Footer/>
    </>
  );
  
}
