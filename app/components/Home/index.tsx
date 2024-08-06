"use client"

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
import './style.scss';
interface Task {
    id: number
    done: boolean
    title: string
    description: string
}
export const Home = () => {
    const ArrowRight02Icon = (props: React.SVGProps<SVGSVGElement>) => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" color={"#fff"} fill={"none"} {...props}>
            <path d="M20.0001 11.9998L4.00012 11.9998" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M15.0003 17C15.0003 17 20.0002 13.3176 20.0002 12C20.0002 10.6824 15.0002 7 15.0002 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
    const ArrowLeft02Icon = (props: React.SVGProps<SVGSVGElement>) => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" color={"#fff"} fill={"none"} {...props}>
            <path d="M3.99982 11.9998L19.9998 11.9998" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M8.99963 17C8.99963 17 3.99968 13.3176 3.99966 12C3.99965 10.6824 8.99966 7 8.99966 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
    const [arr, setArr] = useState<Task[]>([
        {
            id: 1,
            done: false,
            title: "How do I place an order? ",
            description: "You can easily place an order through our website by adding items to your cart and following the checkout process."
        },
        {
            id: 2,
            done: false,
            title: "Do you offer customization options for furniture?",
            description: "You can easily place an order through our website by adding items to your cart and following the checkout process."
        },
        {
            id: 3,
            done: false,
            title: "What is your return policy?",
            description: "You can easily place an order through our website by adding items to your cart and following the checkout process."
        },
        {
            id: 4,
            done: false,
            title: "How do I place an order? ",
            description: "You can easily place an order through our website by adding items to your cart and following the checkout process."
        },
        {
            id: 5,
            done: false,
            title: "Do you offer customization options for furniture?",
            description: "You can easily place an order through our website by adding items to your cart and following the checkout process."
        },
        {
            id: 6,
            done: false,
            title: "What is your return policy?",
            description: "You can easily place an order through our website by adding items to your cart and following the checkout process."
        },
        {
            id: 7,
            done: false,
            title: "How do I place an order? ",
            description: "You can easily place an order through our website by adding items to your cart and following the checkout process."
        },
        {
            id: 8,
            done: false,
            title: "Do you offer customization options for furniture?",
            description: "You can easily place an order through our website by adding items to your cart and following the checkout process."
        },
        {
            id: 9,
            done: false,
            title: "What is your return policy?",
            description: "You can easily place an order through our website by adding items to your cart and following the checkout process."
        },
    ])
    const plus = (id: number) => {
        const x = arr.map(elm => ({ ...elm, done: false }))
        const t = x.find(elm => elm.id == id)
        if (t) {
            t.done = !t.done
        }
        setArr([...x])
    }
    const min = () => {
        const x = arr.map(elm => ({ ...elm, done: false }))
        setArr([...x])
    }
    return (
        <>
            <section className="home-section-1">
                <img src='/Interier/18.jpg' />
                <div>
                    <div>
                        <h1>
                            Best decision for your comfort and restfull evenings
                        </h1>
                        <p>
                            <span>Read more</span>
                            <ArrowRight02Icon />
                        </p>
                    </div>
                    <div >
                        <div>
                            <span>900+</span>
                            <span>Sold Products</span>
                        </div>
                        <div>
                            <span>20K+</span>
                            <span>Happy Cutomers</span>
                        </div>
                    </div>
                </div>
            </section>
            <section className="home-section-2">
                <div className="section-2-1">
                    <div>
                        <h2>ABOUT US</h2>
                        <div>
                            <p>Welcome to NextGen – Where Style Meets Comfort</p>
                            <p>At NextGen, we believe that your home should be a reflection of your unique taste and personality. That’s why we are committed to providing high-quality, stylish, and functional furniture that transforms every room in your home into a space you love.</p>
                        </div>
                        <div>
                            <p>Our Story</p>
                            <p>Founded on the principles of innovation and excellence, NextGen has been a trusted name in home furnishings for over a decade. Our journey began with a simple idea: to bring contemporary, sustainable, and affordable furniture to households everywhere. Today, we are proud to offer an extensive range of products that cater to diverse styles and preferences.</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src="/Interier/9.jpg" alt="" />
                        </div>
                    </div>
                </div>
                <div className="section-2-2">
                    <div>
                        <h2>WHY COOSING US</h2>
                    </div>
                    <div>
                        <div>
                            <p>Superior Craftsmanship</p>
                            <p>At NextGen, we prioritize quality above all else. Our furniture is crafted from premium materials, ensuring durability and long-lasting beauty. Each piece undergoes rigorous quality checks to meet our high standards, so you can trust that your investment will stand the test of time.</p>
                            <p>
                                <span>Read more</span>
                                <ArrowRight02Icon />
                            </p>
                        </div>
                        <div>
                            <p>Customized Solutions</p>
                            <p>We believe that every customer deserves personalized attention. Our team of design experts is ready to assist you with tailored recommendations and design consultations, helping you find the perfect pieces that fit your unique style and needs. Your satisfaction is our top priority.</p>
                            <p>
                                <span>Read more</span>
                                <ArrowRight02Icon />
                            </p>
                        </div>
                        <div>
                            <p>Exceptional Value</p>
                            <p>Luxury doesn’t have to come with a hefty price tag. NextGen offers a stunning range of furniture at competitive prices, making it accessible for everyone to create their dream space. Enjoy the perfect blend of elegance and affordability without compromising on style or comfort.</p>
                            <p>
                                <span>Read more</span>
                                <ArrowRight02Icon />
                            </p>
                        </div>
                    </div>
                </div>
                <div className="section-2-3">
                    <div>
                        <h2>OUR PROJECTS</h2>
                        <div>
                            <ArrowLeft02Icon />
                            <ArrowRight02Icon />

                        </div>
                    </div>
                    <div>
                        <div><img src="/Interier/13.jpg" alt="" /></div>
                        <div><img src="/Interier/15.jpg" alt="" /></div>
                        <div><img src="/Interier/19.jpg" alt="" /></div>
                    </div>
                </div>
                <div className="section-2-4">
                    <div>
                        <h2>OUR CUSTOMERS REVIEWS</h2>
                        <div>
                            <ArrowLeft02Icon />
                            <ArrowRight02Icon />

                        </div>
                    </div>
                    <div>

                        <div>
                            <div>
                                <img src="/Interier/Rectangle3.png" />
                            </div>
                            <div>
                                <div>
                                    <img src="/Interier/Ellipse1.png" alt="" />
                                    <div>
                                        <span>Nico Williams JR</span>
                                        <span>
                                            <Image width={20} height={20}  src="/Interier/star.png" alt="" />
                                            <Image width={20} height={20}  src="/Interier/star.png" alt="" />
                                            <Image width={20} height={20}  src="/Interier/star.png" alt="" />
                                            <Image width={20} height={20}  src="/Interier/star.png" alt="" />
                                            <Image width={20} height={20}  src="/Interier/star.png" alt="" />
                                        </span>
                                    </div>
                                    <p>
                                        Amazing work team! , I’m very happy to collab with you guys.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <img src="/Interier/Rectangle2.png" />
                            </div>
                            <div>
                                <div>
                                    <img src="/Interier/Ellipse2.png" alt="" />
                                    <div>
                                        <span>Nico Williams JR</span>
                                        <span>
                                            <Image width={20} height={20}  src="/Interier/star.png" alt="" />
                                            <Image width={20} height={20}  src="/Interier/star.png" alt="" />
                                            <Image width={20} height={20}  src="/Interier/star.png" alt="" />
                                            <Image width={20} height={20}  src="/Interier/star.png" alt="" />
                                            <Image width={20} height={20}  src="/Interier/star.png" alt="" />
                                        </span>
                                    </div>
                                    <p>
                                        Amazing work team! , I’m very happy to collab with you guys.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <img src="/Interier/Rectangle1.png" />
                            </div>
                            <div>
                                <div>
                                    <img src="/Interier/Ellipse3.png" alt="" />
                                    <div>
                                        <span>Nico Williams JR</span>
                                        <span>
                                            <Image width={20} height={20} src="/Interier/star.png" alt="" />
                                            <Image width={20} height={20} src="/Interier/star.png" alt="" />
                                            <Image width={20} height={20} src="/Interier/star.png" alt="" />
                                            <Image width={20} height={20} src="/Interier/star.png" alt="" />
                                            <Image width={20} height={20} src="/Interier/star.png" alt="" />
                                        </span>
                                    </div>
                                    <p>
                                        Amazing work team! , I’m very happy to collab with you guys.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section-2-5">
                    <div>
                        <h2>DISCOVER  FAQ’S FROM OUR SUPPORT</h2>
                    </div>
                    <div>
                        <div>
                            <img src="/Interier/22.png" />
                        </div>
                        <div>
                            {
                                arr.map((elm: Task) => {
                                    return (
                                        <div key={elm.id}>
                                            <div>
                                                <span>{elm.title}</span>

                                                <span>
                                                    {
                                                        elm.done ?
                                                            <Image alt='...' width={11} height={11} onClick={min} src="/Interier/-.png" />
                                                            :
                                                            <Image alt='...' width={11} height={11} onClick={() => plus(elm.id)} src="/Interier/+.png" />
                                                    }
                                                </span>
                                            </div>
                                            {
                                                elm.done ?
                                                    <p>{elm.description}</p>
                                                    : <></>
                                            }
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </section>
            <footer className="home-footer">
                <section className="footer-section-1">
                    <div>
                        <span>Contact With NextGen</span>
                        <h2>&quot;Don’t hesitate to reach out with any questions—we’re here to help!&quot;</h2>
                        <p>We have a passion to deliver furniture for all. Bringing you quality furniture at the best value, so you’ll always be able to find something you adore at the right price.</p>
                    </div>
                    <div>
                        <div>
                            <input type="text" placeholder='Full name' />
                            <input type="text" placeholder='Email Address' />
                        </div>
                        <textarea name="" id="" placeholder='Question'></textarea>
                        <div>
                        <button>Send</button>
                        </div>
                    </div>
                </section>
                <section className="footer-section-2">
                    <nav className='menu'>
                        <ul>
                            <li>
                                <Link href={'/'}>Home</Link>
                            </li>
                            <li>
                                <Link href={'/'}>About us</Link>
                            </li>
                            <li>
                                <Link href={'/'}>Projects</Link>
                            </li>
                            <li>
                                <Link href={'/'}>Reviews</Link>
                            </li>
                        </ul>
                        <div>
                            <Image width={24} height={24} src="/Interier/instagram-white.svg.png" alt="" />
                            <Image width={24} height={24} src="/Interier/Facebook.png" alt="" />
                            <Image width={24} height={24} src="/Interier/Linkedin.png" alt="" />
                            <Image width={24} height={24} src="/Interier/Twitter.png" alt="" />
                        </div>
                    </nav>
                </section>
            </footer>
        </>
    )
}
