import React from 'react'
import './Membership.css'
export default function Membership() {
    return (
        <>
            <div className='container' id='membership'>
            <h1>Memberships</h1>
                <table class="table table-bordered" id="table-text">
                    <thead>
                        <tr>
                            <th scope="col">S.NO</th>
                            <th scope="col">Duration</th>
                            <th scope="col">Price</th>
                            <th scope="col">Offer</th>
                            <th scope="col">Choose</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>1 month</td>
                            <td>2200</td>
                            <td>NA</td>
                            <td><a href="/" id='linkGet'>GET</a></td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>3 month</td>
                            <td>6600</td>
                            <td>10% off</td>
                            <td><a href="/" id='linkGet'>GET</a></td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>6 month</td>
                            <td>13200</td>
                            <td>15% off</td>
                            <td><a href="/" id='linkGet'>GET</a></td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>9 month</td>
                            <td>19800</td>
                            <td>20% off</td>
                            <td><a href="/" id='linkGet'>GET</a></td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>12 month</td>
                            <td>26400</td>
                            <td>30% off</td>
                            <td><a href="/" id='linkGet'>GET</a></td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>
        </>
    )
}
