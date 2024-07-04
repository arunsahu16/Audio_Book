import React, { Suspense, lazy } from 'react'
import feat1 from '../../Assets/features/feat1.svg';
import feat2 from '../../Assets/features/feat2.svg';
import feat3 from '../../Assets/features/feat3.svg';
import feat4 from '../../Assets/features/feat4.svg';
import feat5 from '../../Assets/features/feat5.svg';
import feat6 from '../../Assets/features/feat6.svg';
import new1 from '../../Assets/new/new1.webp';
import new2 from '../../Assets/new/new2.webp';
import new3 from '../../Assets/new/new3.webp';
import new4 from '../../Assets/new/new4.webp';
import new5 from '../../Assets/new/new5.webp';
import new6 from '../../Assets/new/new6.webp';
import new7 from '../../Assets/new/new7.webp';
import './Home.css';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import SwiperCore from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/bundle';
import { Link } from 'react-router-dom';
import ScrollTopPage from '../../Components/ScrollTopPage';
import HomeNavbar from '../../Components/Navbar';
import GradientCircularProgress from '../../Components/Loader/Loader';
import Playlist from './Playlist';

export default function Home() {
    const LazyBackgroundImage = lazy(() => import('./LazyBackgroundImg'));
    const LazyImage = lazy(() => import('../../Components/LazyImage'));
    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    SwiperCore.use([Navigation, Pagination, Autoplay]);

    const products = [
        {
            title: 'The Kerala Girl',
            imgSrc: new1,
        },
        {
            title: 'BARBARIKA',
            imgSrc: new2,
        },
        {
            title: 'Khoon ka Nasha',
            imgSrc: new3,
        },
        {
            title: 'Secret Billionaire',
            imgSrc: new4,
        },
        {
            title: 'Shrimad Bhadwad Geeta',
            imgSrc: new5,
        },
        {
            title: 'Hidden CEO',
            imgSrc: new6,
        },
        {
            title: 'Psychology of Money',
            imgSrc: new7,
        },
    ];

    return (
        <>
            <HomeNavbar />
            <Suspense fallback={<GradientCircularProgress />}>
                <LazyBackgroundImage />
            </Suspense>
            <main id="main">
                <section id="services" className="services">
                    <div className="container section-title" data-aos="fade-up">
                        <h1>Discover Diverse Audio</h1>
                        <p>Explore a wide array of audio content tailored to suit your interests and needs</p>
                    </div>
                    <div className="container" data-aos="fade-up">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 icon-box" data-aos="zoom-in" data-aos-delay="100">
                                <div className="icon">
                                    <Suspense fallback={<GradientCircularProgress />}>
                                        <LazyImage src={feat1} alt="Gallery Image 1" />
                                    </Suspense>
                                </div>
                                <h4 className="title"><a href="">Educational Courses</a></h4>
                                <p className="description">Expand your knowledge with our extensive library of audio courses covering various topics</p>
                            </div>
                            <div className="col-lg-4 col-md-6 icon-box" data-aos="zoom-in" data-aos-delay="200">
                                <div className="icon">
                                    <Suspense fallback={<GradientCircularProgress />}>
                                        <LazyImage src={feat2} alt="Gallery Image 1" />
                                    </Suspense>
                                </div>
                                <h4 className="title"><a href="">Stock Market Insights</a></h4>
                                <p className="description">Stay updated with the latest trends and strategies in the stock market through expert audio content</p>
                            </div>
                            <div className="col-lg-4 col-md-6 icon-box" data-aos="zoom-in" data-aos-delay="300">
                                <div className="icon">
                                    <Suspense fallback={<GradientCircularProgress />}>
                                        <LazyImage src={feat3} alt="Gallery Image 1" />
                                    </Suspense>
                                </div>
                                <h4 className="title"><a href="">Storytel</a></h4>
                                <p className="description">Immerse yourself in a world of fiction with our captivating audiobooks and stories</p>
                            </div>
                            <div className="col-lg-4 col-md-6 icon-box" data-aos="zoom-in" data-aos-delay="100">
                                <div className="icon">
                                    <Suspense fallback={<GradientCircularProgress />}>
                                        <LazyImage src={feat4} alt="Gallery Image 1" />
                                    </Suspense>
                                </div>
                                <h4 className="title"><a href="">Motivational Talks</a></h4>
                                <p className="description">Get inspired with powerful motivational speeches and life-changing content</p>
                            </div>
                            <div className="col-lg-4 col-md-6 icon-box" data-aos="zoom-in" data-aos-delay="200">
                                <div className="icon">
                                    <Suspense fallback={<GradientCircularProgress />}>
                                        <LazyImage src={feat5} alt="Gallery Image 1" />
                                    </Suspense>
                                </div>
                                <h4 className="title"><a href="">Love Stories</a></h4>
                                <p className="description">Enjoy romantic tales that celebrate love, relationships, and emotional connections</p>
                            </div>
                            <div className="col-lg-4 col-md-6 icon-box" data-aos="zoom-in" data-aos-delay="300">
                                <div className="icon">
                                    <Suspense fallback={<GradientCircularProgress />}>
                                        <LazyImage src={feat6} alt="Gallery Image 1" />
                                    </Suspense>
                                </div>
                                <h4 className="title"><a href="">Horror Stories</a></h4>
                                <p className="description">Experience spine-chilling horror stories that will keep you on the edge of your seat</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="services-2" className="services-2 section dark-background">
                    <div className="container section-title" data-aos="fade-up">
                        <h2>New Arrivals</h2>
                        <p>Fresh Picks for Your Listening Pleasure. Tune in to our newest releases!</p>
                    </div>

                    <div className="services-carousel-wrap">
                        <div className="container">
                            <Swiper
                                loop={true}
                                speed={600}
                                autoplay={{
                                    delay: 5000,
                                }}
                                slidesPerView="auto"
                                pagination={{
                                    el: '.swiper-pagination',
                                    type: 'bullets',
                                    clickable: true,
                                }}
                                navigation={{
                                    nextEl: '.js-custom-next',
                                    prevEl: '.js-custom-prev',
                                }}
                                breakpoints={{
                                    320: {
                                        slidesPerView: 1,
                                        spaceBetween: 40,
                                    },
                                    1200: {
                                        slidesPerView: 3,
                                        spaceBetween: 40,
                                    },
                                }}
                            >
                                {products.map((product, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="service-item">
                                            <div className="service-item-contents">
                                                <a href="#">
                                                    <h2 className="service-item-title">{product.title}</h2>
                                                </a>
                                            </div>
                                            <img src={product.imgSrc} alt="Product" className="img-fluid" />
                                        </div>
                                    </SwiperSlide>
                                ))}
                                <div className="swiper-pagination"></div>
                            </Swiper>
                            <button className="navigation-prev js-custom-prev">
                                <i className="bi bi-arrow-left-short"></i>
                            </button>
                            <button className="navigation-next js-custom-next">
                                <i className="bi bi-arrow-right-short"></i>
                            </button>
                        </div>
                    </div>
                </section>
                <Playlist />

                <section id="about" className="about">
                    <div className="container section-title" data-aos="fade-up">
                        <h1>About Us</h1>
                        <p>Learn more about our mission, values, and commitment to bringing the best in audio entertainment to our listeners.</p>
                    </div>
                    <div className="container" data-aos="fade-up" data-aos-delay="100">
                        <div className="row align-items-xl-center gy-5">
                            <div className="col-xl-5 content">
                                <h1>Transforming Audio Entertainment</h1>
                                <p>At Kuku FM, we are dedicated to enriching your auditory experience by providing high-quality, diverse audio content. Our platform is designed to educate, entertain, and inspire you, making every moment worth listening to.</p>
                                <Link aria-current="page" className="read-more" to="/" onClick={handleScrollToTop}>
                                    <span>Read More</span><i className="bi bi-arrow-right"></i>
                                </Link>
                            </div>

                            <div className="col-xl-7">
                                <div className="row gy-4 icon-boxes">
                                    <div className="col-md-6" data-aos="fade-up" data-aos-delay="300">
                                        <div className="icon-box">
                                            <i className="bi bi-heart"></i>
                                            <h3>Stay Inspired</h3>
                                            <p>Get motivated and stay positive with uplifting and inspiring audio stories and talks.</p>
                                        </div>
                                    </div>

                                    <div className="col-md-6" data-aos="fade-up" data-aos-delay="400">
                                        <div className="icon-box">
                                            <i className="bi bi-journal-richtext"></i>
                                            <h3>Convenient Learning</h3>
                                            <p>Access a variety of content anytime, anywhere, making it easy to learn and stay entertained.</p>
                                        </div>
                                    </div>

                                    <div className="col-md-6" data-aos="fade-up" data-aos-delay="600">
                                        <div className="icon-box">
                                            <i className="bi bi-globe"></i>
                                            <h3>Global Content</h3>
                                            <p>Explore diverse content from around the world, broadening your horizons and cultural understanding.</p>
                                        </div>
                                    </div>

                                    <div className="col-md-6" data-aos="fade-up" data-aos-delay="700">
                                        <div className="icon-box">
                                            <i className="bi bi-headphones"></i>
                                            <h3>High-Quality Audio</h3>
                                            <p>Enjoy a seamless listening experience with our high-quality audio content.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <ScrollTopPage />
        </>
    )
}
