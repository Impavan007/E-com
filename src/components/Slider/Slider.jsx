import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material';
import './Slider.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const sliderItems = [
  {
    id: 1,
    img: "/Assets/img1.png",
    title: "SUMMER SALE",
    desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
    bg: "f5fafd",
  },
  {
    id: 2,
    img: "/Assets/img2.png",
    title: "AUTUMN COLLECTION",
    desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
    bg: "fcf1ed",
  },
  {
    id: 3,
    img: '/Assets/img3.png',
    title: "LOUNGEWEAR LOVE",
    desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
    bg: "fbf0f4",
  },
];

export default function Slider() {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else if (direction === "right") {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <div className="Container">
      <div className="Arrow ArrowLeft" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </div>
      <div className="Wrapper" style={{ transform: `translateX(${slideIndex * -100}vw)` }}>
        {sliderItems.map((item) => (
          <div className="Slide" style={{ backgroundColor: `#${item.bg}` }} key={item.id}>
            <div className="ImgContainer">
              <img src={item.img} alt={item.title} className="Img" />
            </div>
            <div className="InfoContainer">
              <h1 className="Title">{item.title}</h1>
              <p className="Desc">{item.desc}</p>
              <Link to='/ProductList'><button className="Btn">Shop Now</button></Link>
            </div>
          </div>
        ))}
      </div>
      <div className="Arrow ArrowRight" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </div>
    </div>
  );
}
