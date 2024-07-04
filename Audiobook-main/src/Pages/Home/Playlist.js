import React, { useEffect } from 'react';
import './Home.css';
import horror1 from '../../Assets/playlist/horror1.webp';
import horror2 from '../../Assets/playlist/horror2.webp';
import horror3 from '../../Assets/playlist/horror3.webp';
import motive1 from '../../Assets/playlist/motive1.webp';
import motive2 from '../../Assets/playlist/motive2.webp';
import motive3 from '../../Assets/new/new7.webp';
import reli1 from '../../Assets/playlist/reli1.webp';
import reli2 from '../../Assets/playlist/reli2.webp';
import reli3 from '../../Assets/playlist/reli3.webp';
import rom1 from '../../Assets/playlist/rom1.webp';
import rom2 from '../../Assets/playlist/rom2.webp';
import rom3 from '../../Assets/new/new6.webp';
import trend1 from '../../Assets/playlist/trend1.webp';
import trend2 from '../../Assets/playlist/trend2.webp';
import trend3 from '../../Assets/playlist/trend3.webp';
import GLightbox from 'glightbox';
import Isotope from 'isotope-layout';
import imagesLoaded from 'imagesloaded';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useNavigate } from 'react-router-dom';

export default function Playlist() {
    const navigate = useNavigate();

    const handleDetailsClick = (imageSrc) => {
      const encodedSrc = encodeURIComponent(imageSrc);
      navigate(`/details?imageSrc=${encodedSrc}`);
    };
    useEffect(() => {
        const glightbox = GLightbox({
            selector: '.glightbox'
        });

        const isotopeContainers = document.querySelectorAll('.isotope-layout');

        isotopeContainers.forEach((isotopeItem) => {
            let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
            let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
            let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

            imagesLoaded(isotopeItem.querySelector('.isotope-container'), () => {
                const initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
                    itemSelector: '.isotope-item',
                    layoutMode: layout,
                    filter: filter,
                    sortBy: sort
                });

                isotopeItem.querySelectorAll('.isotope-filters li').forEach((filters) => {
                    filters.addEventListener('click', function () {
                        isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
                        this.classList.add('filter-active');
                        initIsotope.arrange({
                            filter: this.getAttribute('data-filter')
                        });
                        // Initialize AOS
                        aosInit();
                    }, false);
                });
            });
        });

        function aosInit() {
            AOS.init({
                duration: 200,
                easing: 'fade-up',
                once: true,
                mirror: false
            });
        }

        window.addEventListener('load', aosInit);

        return () => {
            glightbox.destroy();
            window.removeEventListener('load', aosInit);
        };
    }, []);
    return (
        <>
            <section id="product1" className="section-p1">
                <div className="container section-title" data-aos="fade-up">
                    <h1>Discover Your Playlist</h1>
                    <p>Learn more about our mission, values, and commitment to bringing the best in audio entertainment to our listeners.</p>
                </div>
                <div className="container" data-aos="fade-up" data-aos-delay="100">
                    <div className="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">
                        <ul className="portfolio-filters isotope-filters" data-aos="fade-up" data-aos-delay="100">
                            <li data-filter="*" className="filter-active">All</li>
                            <li data-filter=".filter-trend">Trending</li>
                            <li data-filter=".filter-romance">Romance</li>
                            <li data-filter=".filter-motivation">Motivation</li>
                            <li data-filter=".filter-religion">Religion</li>
                            <li data-filter=".filter-horror">Horror</li>
                        </ul>
                        <div className="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay="200">
                            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-trend">
                                <img src={trend1} className="img-fluid" alt="" />
                                <div className="portfolio-info">
                                    <div className="des">
                                        <span>Trending</span>
                                        <h5>Power of Your Subconscious Mind</h5>
                                        <div className="star">
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star-half"></i>
                                        </div>
                                        <h4>18K+ Listens</h4>
                                    </div>
                                    <a href={trend1} title="Power of Your Subconscious Mind" data-gallery="portfolio-gallery-app" className="glightbox preview-link">
                                        <i className="bi bi-zoom-in"></i>
                                    </a>
                                    <a onClick={() => handleDetailsClick(trend1)} title="More Details" className="details-link">
                                        <i className="bi bi-link-45deg"></i>
                                    </a>
                                    <a href="#" title="Add to Cart" className="cart-link">
                                        <i class="bi bi-play-circle-fill"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-trend">
                                <img src={trend2} className="img-fluid" alt="" />
                                <div className="portfolio-info">
                                    <div className="des">
                                        <span>Trending</span>
                                        <h5>Rich Dad Poor Dad</h5>
                                        <div className="star">
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                        </div>
                                        <h4>2Cr+ Listens</h4>
                                    </div>
                                    <a href={trend2} title="Rich Dad Poor Dad" data-gallery="portfolio-gallery-app" className="glightbox preview-link">
                                        <i className="bi bi-zoom-in"></i>
                                    </a>
                                    <a href="#"onClick={() => handleDetailsClick(trend2)} title="More Details" className="details-link">
                                        <i className="bi bi-link-45deg"></i>
                                    </a>
                                    <a href="#" title="Add to Cart" className="cart-link">
                                        <i class="bi bi-play-circle-fill"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-trend">
                                <img src={trend3} className="img-fluid" alt="" />
                                <div className="portfolio-info">
                                    <div className="des">
                                        <span>Trending</span>
                                        <h5>Dil Se Divorce</h5>
                                        <div className="star">
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                        </div>
                                        <h4>15L+ Listens</h4>
                                    </div>
                                    <a href={trend3} title="Dil Se Divorce" data-gallery="portfolio-gallery-app" className="glightbox preview-link">
                                        <i className="bi bi-zoom-in"></i>
                                    </a>
                                    <a href="#" onClick={() => handleDetailsClick(trend3)}title="More Details" className="details-link">
                                        <i className="bi bi-link-45deg"></i>
                                    </a>
                                    <a href="#" title="Add to Cart" className="cart-link">
                                        <i class="bi bi-play-circle-fill"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-horror">
                                <img src={horror1} className="img-fluid" alt="" />
                                <div className="portfolio-info">
                                    <div className="des">
                                        <span>Horror</span>
                                        <h5>Kalki Ka Shraap</h5>
                                        <div className="star">
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                        </div>
                                        <h4>25K+ Listens</h4>
                                    </div>
                                    <a href={horror1} title="Kalki Ka Shraap" data-gallery="portfolio-gallery-app" className="glightbox preview-link">
                                        <i className="bi bi-zoom-in"></i>
                                    </a>
                                    <a href="#" onClick={() => handleDetailsClick(horror1)} title="More Details" className="details-link">
                                        <i className="bi bi-link-45deg"></i>
                                    </a>
                                    <a href="#" title="Add to Cart" className="cart-link">
                                        <i class="bi bi-play-circle-fill"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-horror">
                                <img src={horror2} className="img-fluid" alt="" />
                                <div className="portfolio-info">
                                    <div className="des">
                                        <span>Horror</span>
                                        <h5>Shaitan Kshetra</h5>
                                        <div className="star">
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                        </div>
                                        <h4>5L+ Listens</h4>
                                    </div>
                                    <a href={horror2} title="Shaitan Kshetra" data-gallery="portfolio-gallery-app" className="glightbox preview-link">
                                        <i className="bi bi-zoom-in"></i>
                                    </a>
                                    <a href="#" onClick={() => handleDetailsClick(horror2)}title="More Details" className="details-link">
                                        <i className="bi bi-link-45deg"></i>
                                    </a>
                                    <a href="#" title="Add to Cart" className="cart-link">
                                        <i class="bi bi-play-circle-fill"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-horror">
                                <img src={horror3} className="img-fluid" alt="" />
                                <div className="portfolio-info">
                                    <div className="des">
                                        <span>Horror</span>
                                        <h5>Revolver Raja</h5>
                                        <div className="star">
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                        </div>
                                        <h4>2L+ Listens</h4>
                                    </div>
                                    <a href={horror3} title="Revolver Raja" data-gallery="portfolio-gallery-app" className="glightbox preview-link">
                                        <i className="bi bi-zoom-in"></i>
                                    </a>
                                    <a href="#" onClick={() => handleDetailsClick(horror3)}title="More Details" className="details-link">
                                        <i className="bi bi-link-45deg"></i>
                                    </a>
                                    <a href="#" title="Add to Cart" className="cart-link">
                                        <i class="bi bi-play-circle-fill"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-religion">
                                <img src={reli1} className="img-fluid" alt="" />
                                <div className="portfolio-info">
                                    <div className="des">
                                        <span>Religious</span>
                                        <h5>Hindutva</h5>
                                        <div className="star">
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                        </div>
                                        <h4>9L+ Listens</h4>
                                    </div>
                                    <a href={reli1} title="Hindutva" data-gallery="portfolio-gallery-app" className="glightbox preview-link">
                                        <i className="bi bi-zoom-in"></i>
                                    </a>
                                    <a href="#" onClick={() => handleDetailsClick(reli1)}title="More Details" className="details-link">
                                        <i className="bi bi-link-45deg"></i>
                                    </a>
                                    <a href="#" title="Add to Cart" className="cart-link">
                                        <i class="bi bi-play-circle-fill"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-religion">
                                <img src={reli2} className="img-fluid" alt="" />
                                <div className="portfolio-info">
                                    <div className="des">
                                        <span>Religious</span>
                                        <h5>Ramayana</h5>
                                        <div className="star">
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                        </div>
                                        <h4>2L+ Listens</h4>
                                    </div>
                                    <a href={reli2} title="Ramayana" data-gallery="portfolio-gallery-app" className="glightbox preview-link">
                                        <i className="bi bi-zoom-in"></i>
                                    </a>
                                    <a href="#" onClick={() => handleDetailsClick(reli2)} title="More Details" className="details-link">
                                        <i className="bi bi-link-45deg"></i>
                                    </a>
                                    <a href="#" title="Add to Cart" className="cart-link">
                                        <i class="bi bi-play-circle-fill"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-religion">
                                <img src={reli3} className="img-fluid" alt="" />
                                <div className="portfolio-info">
                                    <div className="des">
                                        <span>Religious</span>
                                        <h5>Shree Krishna</h5>
                                        <div className="star">
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                        </div>
                                        <h4>6L+ Listens</h4>
                                    </div>
                                    <a href={reli3} title="Revolver Raja" data-gallery="portfolio-gallery-app" className="glightbox preview-link">
                                        <i className="bi bi-zoom-in"></i>
                                    </a>
                                    <a href="#" onClick={() => handleDetailsClick(reli3)} title="More Details" className="details-link">
                                        <i className="bi bi-link-45deg"></i>
                                    </a>
                                    <a href="#" title="Add to Cart" className="cart-link">
                                        <i class="bi bi-play-circle-fill"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-romance">
                                <img src={rom1} className="img-fluid" alt="" />
                                <div className="portfolio-info">
                                    <div className="des">
                                        <span>Romance</span>
                                        <h5>Jobless Ghar Jamai</h5>
                                        <div className="star">
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                        </div>
                                        <h4>1L+ Listens</h4>
                                    </div>
                                    <a href={rom1} title="Jobless Ghar Jamai" data-gallery="portfolio-gallery-app" className="glightbox preview-link">
                                        <i className="bi bi-zoom-in"></i>
                                    </a>
                                    <a href="#" onClick={() => handleDetailsClick(rom1)} title="More Details" className="details-link">
                                        <i className="bi bi-link-45deg"></i>
                                    </a>
                                    <a href="#" title="Add to Cart" className="cart-link">
                                        <i class="bi bi-play-circle-fill"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-romance">
                                <img src={rom2} className="img-fluid" alt="" />
                                <div className="portfolio-info">
                                    <div className="des">
                                        <span>Romance</span>
                                        <h5>Billionaire's Choice</h5>
                                        <div className="star">
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                        </div>
                                        <h4>6L+ Listens</h4>
                                    </div>
                                    <a href={rom2} title="Billionaire's Choice" data-gallery="portfolio-gallery-app" className="glightbox preview-link">
                                        <i className="bi bi-zoom-in"></i>
                                    </a>
                                    <a href="#" onClick={() => handleDetailsClick(rom2)} title="More Details" className="details-link">
                                        <i className="bi bi-link-45deg"></i>
                                    </a>
                                    <a href="#" title="Add to Cart" className="cart-link">
                                        <i class="bi bi-play-circle-fill"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-romance">
                                <img src={rom3} className="img-fluid" alt="" />
                                <div className="portfolio-info">
                                    <div className="des">
                                        <span>Romance</span>
                                        <h5>Hidden CEO</h5>
                                        <div className="star">
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                        </div>
                                        <h4>60K+ Listens</h4>
                                    </div>
                                    <a href={rom3} title="Hidden CEO" data-gallery="portfolio-gallery-app" className="glightbox preview-link">
                                        <i className="bi bi-zoom-in"></i>
                                    </a>
                                    <a href="#" onClick={() => handleDetailsClick(rom3)}title="More Details" className="details-link">
                                        <i className="bi bi-link-45deg"></i>
                                    </a>
                                    <a href="#" title="Add to Cart" className="cart-link">
                                        <i class="bi bi-play-circle-fill"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-motivation">
                                <img src={motive1} className="img-fluid" alt="" />
                                <div className="portfolio-info">
                                    <div className="des">
                                        <span>Motivation</span>
                                        <h5>Vidur Niti</h5>
                                        <div className="star">
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                        </div>
                                        <h4>28K+ Listens</h4>
                                    </div>
                                    <a href={motive1} title="Vidur Niti" data-gallery="portfolio-gallery-app" className="glightbox preview-link">
                                        <i className="bi bi-zoom-in"></i>
                                    </a>
                                    <a href="#"onClick={() => handleDetailsClick(motive1)} title="More Details" className="details-link">
                                        <i className="bi bi-link-45deg"></i>
                                    </a>
                                    <a href="#" title="Add to Cart" className="cart-link">
                                        <i class="bi bi-play-circle-fill"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-motivation">
                                <img src={motive2} className="img-fluid" alt="" />
                                <div className="portfolio-info">
                                    <div className="des">
                                        <span>Motivation</span>
                                        <h5>Shrimad Bhagwad Geeta</h5>
                                        <div className="star">
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                        </div>
                                        <h4>8L+ Listens</h4>
                                    </div>
                                    <a href={motive2} title="Vidur Niti" data-gallery="portfolio-gallery-app" className="glightbox preview-link">
                                        <i className="bi bi-zoom-in"></i>
                                    </a>
                                    <a href="#" onClick={() => handleDetailsClick(motive2)} title="More Details" className="details-link">
                                        <i className="bi bi-link-45deg"></i>
                                    </a>
                                    <a href="#" title="Add to Cart" className="cart-link">
                                        <i class="bi bi-play-circle-fill"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-motivation">
                                <img src={motive3} className="img-fluid" alt="" />
                                <div className="portfolio-info">
                                    <div className="des">
                                        <span>Motivation</span>
                                        <h5>Psychology of Success</h5>
                                        <div className="star">
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                        </div>
                                        <h4>48K+ Listens</h4>
                                    </div>
                                    <a href={motive3} title="Psychology of Success" data-gallery="portfolio-gallery-app" className="glightbox preview-link">
                                        <i className="bi bi-zoom-in"></i>
                                    </a>
                                    <a href="#" onClick={() => handleDetailsClick(motive3)}title="More Details" className="details-link">
                                        <i className="bi bi-link-45deg"></i>
                                    </a>
                                    <a href="#" title="Add to Cart" className="cart-link">
                                        <i class="bi bi-play-circle-fill"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
