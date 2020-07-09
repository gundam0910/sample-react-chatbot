import React from 'react'

const Review = (props) => {
  const { steps } = props;
  const { name, gender, age } = steps;
  return (
    <div>
      <h3>Summary</h3>
        <table>
          <tbody>
            <tr>
              <td>Name</td>
              <td>{name.value}</td>
            </tr>
            <tr>
              <td>Gender</td>
              <td>{gender.value}</td>
            </tr>
            <tr>
              <td>Age</td>
              <td>{age.value}</td>
            </tr>
          </tbody>
        </table>
    </div>
  )
}

export default Review
