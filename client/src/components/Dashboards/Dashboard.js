import React from 'react'
import './good.css'
function DashBoard() {
  return (
    <>
    <div class="cards-container">
  <div class="card admin-card">
    <div class="card-title">Admin</div>
    <div class="card-content">
      Admin Profile
    </div>
    <button class="card-button">Manage Profile</button>
  </div>

  <div class="card cart-card">
    <div class="card-title">Users</div>
    <div class="card-content">
      Manage all users
    </div>
    <button class="card-button">Manage User</button>
  </div>

  <div class="card add-card">
    <div class="card-title">Add Hotel</div>
    <div class="card-content">
      Add all the new hotels.
    </div>
    <button class="card-button">Add Hotel</button>
  </div>
</div>
</>
  )
}

export default DashBoard
