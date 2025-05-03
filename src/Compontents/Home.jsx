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

export default function CarouselLib() {
  const imgitems = [
    { id: 1, img: logo },
    { id: 6, img: lic },
    { id: 2, img: uni1 },
    { id: 3, img: Ai },
    { id: 4, img: room },
    { id: 5, img: doc },
    { id: 7, img: spo },
    { id: 7, img: com },
    { id: 10, img: degree },
  ];

  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper mt-3 rounded-xl w-full h-[80vh]"
    >
      {imgitems.map(item => (
        <SwiperSlide key={item.id}>
          <img src={item.img} alt={`slide-${item.id}`} className="w-full h-full m-6 rounded-2xl object-fill" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
