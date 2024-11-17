import React from 'react';

const NewsItem = (props) => {
    

    let { title, description, imageUrl, newsUrl, author, date, source ,mode} = props;
    return (
        <div className="d-flex flex-wrap justify-content-between">
            <div className="card my-3" style={{ width: "20rem", height: "30rem", position: "relative",
                    color: mode === 'dark' ? 'white' : 'black',
                    backgroundColor: mode === 'dark' ? 'grey' : 'white',
                    borderColor: mode === 'dark' ? 'white' : 'black'}}>
                <div>
                    <span className="badge text-bg-danger" style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        position: 'absolute',
                        right: '0'
                    }}>{source}</span>
                </div>
                <img
                    src={imageUrl}
                    className="card-img-top"
                    alt="news"
                    style={{ height: "12rem", width: "100%", objectFit: "cover" }}
                />
                <div className="card-body d-flex flex-column" style={{ height: "calc(100% - 12rem)"}}>
                    <h5 className="card-title" >{title.length > 50 ? title.slice(0, 50) + "..." : title}</h5>
                    <p className="card-text" >{description.length > 150 ? description.slice(0, 150) + "..." : description}</p>
                    <p className="card-text "><small>By {author} on {new Date(date).toUTCString()}</small></p>
                    <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-primary mt-auto" style={{ position: "absolute", bottom: "10px" }}>Read More</a>
                </div>
            </div>
        </div>
    );
}

export default NewsItem;
