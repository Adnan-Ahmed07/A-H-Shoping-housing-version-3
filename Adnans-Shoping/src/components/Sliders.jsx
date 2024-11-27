import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const Sliders = () => {
  return (
    <Splide
      aria-label="My Favorite Images"
      options={{
        type: 'loop',
        autoplay: true,
        interval: 2000,
        pauseOnHover: false,
        pauseOnFocus: false,
      }}
    >
       <SplideSlide>
        <img src="/images/adns.jpg" alt="Slide 1" />
      </SplideSlide>
      <SplideSlide>
        <img src='https://th.bing.com/th/id/R.bbad446f66af6403bf23a98a8634459b?rik=WEPtEkLBmyrsiA&pid=ImgRaw&r=0' alt="Slide 2" />
      </SplideSlide>
      <SplideSlide>
        <img src='https://wpbingosite.com/wordpress/kooto/wp-content/uploads/2023/01/slider-16.jpg' alt="Slide 3" />
      </SplideSlide>
      <SplideSlide>
        <img src='https://wpbingosite.com/wordpress/kooto/wp-content/uploads/2023/01/slider-8.jpg' alt="Slide 4" />
      </SplideSlide>
      <SplideSlide>
        <img src='https://wpbingosite.com/wordpress/kooto/wp-content/uploads/2023/01/slider-7.jpg' alt="Slide 5" />
      </SplideSlide>
    </Splide>
  );
};

export default Sliders;
