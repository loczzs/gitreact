import React, { Component } from "react";
import data from "./data.json";
import "./Movie.css";
console.log(data);

export default class Movie extends Component {
    render() {
      return (
        <div className="movie-wrapper">
          <div className="container-fluid">
            <div className="row">
              {data.map((movie) => {
                return (
                  <div key={movie.maPhim} className="col-sm-3">
                    <div style={{width : "100%"}} className="card text-center">
                      <img
                    //   width={"100%"}
                        src={movie.hinhAnh}
                        alt={movie.tenPhim}
                        height="300px"
                      />
                      <div className="card-body">
                        <h3 className="card-title">{movie.tenPhim}</h3>
                        <p className="card-text">{movie.ngayKhoiChieu}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      );
    }
  }