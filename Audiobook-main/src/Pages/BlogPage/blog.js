import React, { useState } from 'react';
import HomeNavbar from '../../Components/Navbar';
import ScrollTopPage from '../../Components/ScrollTopPage';
import './blog.css';
import blog1 from '../../Assets/blogs/blog1.png';
import blog2 from '../../Assets/blogs/blog2.png';
import blog3 from '../../Assets/blogs/blog3.jpeg';
import blog4 from '../../Assets/blogs/blog4.jpeg';
import blog5 from '../../Assets/blogs/blog5.jpeg';
import blog6 from '../../Assets/blogs/blog6.jpeg';
import blog7 from '../../Assets/blogs/blog7.jpeg';
import blog8 from '../../Assets/blogs/blog8.jpeg';

const allBlogs = [
    {
        img: blog1,
        title: 'Yeh Hai Sherlock Holmes Ki Real Story',
        description: 'Sherlock Holmes actual mein ek fictional, ya ne ki kalpanik character hai, lekin inki kahaani inspired hai.............',
        author: 'sukritihora',
        date: '9 months ago',
    },
    {
        img: blog2,
        title: 'Toh Yeh Thi Heer Aur Ranjha Ki Asal Kahaani',
        description: 'Waise toh ‘Heer-Ranjha’ ki kahaani ko introduction ki zaroorat nahi hai. Shayad, duniya mein pyaar karne wala...........',
        author: 'sukritihora',
        date: '9 months ago',
    },
    {
        img: blog3,
        title: 'Story Of These 5 Indian Bahubalis Will Make You Listen To ‘Shootout- The Bihar Chapter’',
        description: 'As unfortunate as it might sound, Indian politics and ‘Gunda Raaj’ go hand in hand. Even in...............',
        author: 'sukritihora',
        date: '9 months ago',
    },
    {
        img: blog4,
        title: '5 Reasons Why We Are Stuck Being Middle Class',
        description: 'The middle class is a very relevant part of any society, but it can also be a..............',
        author: 'sukritihora',
        date: '9 months ago',
    },
    {
        img: blog5,
        title: '20 Best Thriller Stories In Hindi To Listen!',
        description: 'Who doesn’t like ‘thrill’ in their life. Almost everyone wants to do something thrilling in their life............',
        author: 'sukritihora',
        date: '9 months ago',
    },
    {
        img: blog6,
        title: '25 Best Social Issues Stories in Hindi',
        description: 'Social issues stories are a source of divergent viewpoints on what constitutes ethically right or improper personal..........',
        author: 'By crasto',
        date: '3 years ago',
    },
    {
        img: blog7,
        title: 'The Best Meditation Story in Hindi',
        description: 'Meditation, an effective form to attain solace in times of distress. But what exactly is meditation? Meditation...........',
        author: 'By crasto',
        date: '3 years ago',
    },
    {
        img: blog8,
        title: 'Best 2 Crime Audiobooks In Hindi That Will Chill Your Spine!',
        description: 'Crime Audiobooks give an insight about the criminals that have made their names but in the world.........',
        author: 'By crasto',
        date: '3 years ago',
    },
];

const itemsPerPage = 5;

export default function Blog() {
    const [currentPage, setCurrentPage] = useState(1);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const paginatedBlogs = allBlogs.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    return (
        <>
            <HomeNavbar />
            <section id="page-header" className="blog-header">
                <h2>#readmore</h2>
                <p>Create a Podcast in any Indian Language</p>
            </section>

            <section id="blog">
                {paginatedBlogs.map((blog, index) => (
                    <div className="blog-box" data-aos="fade-up" data-aos-delay={100 + index * 50} key={index}>
                        <div className="blog-img">
                            <img src={blog.img} alt="" />
                        </div>
                        <div className="blog-details">
                            <h2>{blog.title}</h2>
                            <p>{blog.description}</p>
                            <p className='mb-1'>By <strong>{blog.author}</strong>, {blog.date}</p>
                            <a href="#">Continue Reading</a>
                        </div>
                        <h1>12/05</h1>
                    </div>
                ))}
            </section>

            <section id="pagination" className="section-p1">
                <a href="#" onClick={() => handlePageChange(1)} className={currentPage === 1 ? 'active' : ''}>1</a>
                <a href="#" onClick={() => handlePageChange(2)} className={currentPage === 2 ? 'active' : ''}>2</a>
                <a href="#" onClick={() => handlePageChange(currentPage + 1)}><i className="fa-solid fa-arrow-right"></i></a>
            </section>
            <ScrollTopPage />
        </>
    );
}
