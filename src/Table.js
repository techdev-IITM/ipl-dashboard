import React from 'react'
import Data from "./data.json"
import {GiCutDiamond} from "react-icons/gi"
import {FaCrown} from "react-icons/fa"
import {GiSwordwoman} from "react-icons/gi"
import {GiEagleHead} from "react-icons/gi"
import {GiNorthStarShuriken} from "react-icons/gi"

function Table() {

    const ranking = (id) => {
        if(id === 1){
            return <GiCutDiamond size={25} color="#23C4ED" />
        }if(id === 2){
            return  <FaCrown size={25} color="#F4BE2C"/>
        }if(id === 3){
            return <GiSwordwoman size={25} color="#BF3325"/>
        }if(id === 4){
            return <GiNorthStarShuriken size={25} color="#120E43"/>
        }if(id >=5){
            return <GiEagleHead size={25}/>
        }
    }


    return (
        <div className="container d-flex">
            <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Score</th>
                <th scope="col">W/L</th>
                <th scope="col">Rank</th>
              </tr>
            </thead>
            <tbody>
                {Data.map((data, key) => {
                   return  <tr>
                      <th scope="row">{data.id}</th>
                      <td>{data.name}</td>
                      <td>{data.score}</td>
                      <td>{data.score}/{data.T}</td>
                      <td>{ranking(data.id)}</td>
                    </tr>;
                })}
              
            </tbody>
          </table>

        </div>
    )
}

export default Table
