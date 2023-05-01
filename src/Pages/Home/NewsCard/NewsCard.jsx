import React from 'react';
import { Card, Image } from 'react-bootstrap';
import moment from 'moment';
import { FaEye, FaRegBookmark, FaRegStar, FaShareAlt, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Rating from 'react-rating';

const NewsCard = ({ news }) => {
    const { _id, title, author, details, image_url, rating, total_view } = news;
    return (
        <Card className="text-center mb-4">
            <Card.Header className="d-flex align-items-center">
                <Image
                    style={{
                        height: "50px"
                    }}
                    src={author.img} roundedCircle />
                <div className="ps-2">
                    <h6>{author.name}</h6>
                    <h6>{moment(author.published_date).format('YYYY-MM-D')}</h6>
                </div>
                <div className="ms-auto">
                    <FaRegBookmark></FaRegBookmark>
                    <FaShareAlt></FaShareAlt>
                </div>

            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img src={image_url} alt="Card image" />
                <Card.Text>
                    {details.length < 250 ? <>{details}</> :
                        <>{details.slice(0, 250)}...<Link to={`/news/${_id}`}>Read More</Link></>}
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted d-flex">
                <div className="me-auto">
                    <Rating
                        placeholderRating={rating.number}
                        readonly
                        emptySymbol={<FaRegStar></FaRegStar>}
                        placeholderSymbol={<FaStar className="text-warning"></FaStar>}
                        fullSymbol={<FaStar></FaStar>}
                    />
                    <p>{rating.number}</p>
                </div>
                <div>
                    <FaEye></FaEye> {total_view}
                </div>

            </Card.Footer>
        </Card>
    );
};

export default NewsCard;