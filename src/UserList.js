import React from 'react'

const UserList = ({userData}) => {
  return (
    <div class="card-container">
<span class="pro">PRO</span>
<img class="round" src="https://cdn2.vectorstock.com/i/1000x1000/55/86/anonymous-icon-incognito-sign-privacy-vector-34705586.jpg" alt="user" />
    <div> Name: {userData.name} <br/> UserName: {userData.username}
    </div>
   
	<h3>Email: {userData.email}</h3>
	<h6>Address: {userData.address.street}</h6>
	<p>{userData.address.suite}  {userData.address.city} {userData.address.zipcode} <br/> lat: {userData.address.geo.lat} <br/>lng: {userData.address.geo.lng}<br/>Phone: {userData.phone}<br/>Website: {userData.website}<br/>Company: {userData.company.name} {userData.company.catchPhrase} {userData.company.bs} </p>
	<div class="buttons">
		<button class="primary">
			Message
		</button>
		<button class="primary ghost">
			Following
		</button>
	</div>
	<div class="skills">
		<h6>Skills</h6>
		<ul>
			<li>UI / UX</li>
			<li>Front End Development</li>
			<li>HTML</li>
			<li>CSS</li>
			<li>JavaScript</li>
			<li>React</li>
			<li>Node</li>
		</ul>
	</div>
</div>

  )
}

export default UserList