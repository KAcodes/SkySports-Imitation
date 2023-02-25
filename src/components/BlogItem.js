import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';




const BlogItem = (props) => {


    const mainItem = (<div className='card text-center my-2' >
                    <img className="card-img-top fluid" src={props.img} alt="Card image cap" />
                    <div className="card-body">
                        <h3  className="card-title">{props.header}</h3>
                        <p className="card-text">{props.content}</p>
                        <a href="https://www.linkedin.com/in/kayode-apena-bb7479173/" target='_blank' >Read More</a>
                    </div>
                </div>)

                const smallerItem = (<div className="card text-center my-1">
                <div className="card-horizontal">
                    <div className="img-square-wrapper">
                        <img style={{height: '100%'}} className="side-pic" src={props.img} alt="Card image cap"/>
                    </div>
                    <div className="card-body">
                        <h4  className="card-title">{props.header}</h4>
                        
                        <p className="card-text">{props.content}</p>
                        <a href="https://www.linkedin.com/in/kayode-apena-bb7479173/" target='_blank' >Read More</a>
                    </div>
                </div>
                <div className="card-footer">
                    <small className="text-muted">Last updated 3 mins ago</small>
                </div>
            </div>); 

    return props.main ? mainItem : smallerItem;

}

export default BlogItem