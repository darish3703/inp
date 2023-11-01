import React, { Component } from 'react'

export default class ClassComponent extends Component {
  render() {
    return (
        <div>
        <h1>This is a react class component</h1>
        <p>I used the extention to create the rcc snippet </p>
        <table>
            <tr>
                <th>sr no.</th>
                <th>name</th>
            </tr>
            <tr>
                <td>1</td>
                <td>Royden</td>
            </tr>            
        </table>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWcnam9rJ3IDVJ7Iqdkr_txrJZ44SoEKCbwg&usqp=CAU' alt='stock image'></img>
    </div>
    )
  }
}
