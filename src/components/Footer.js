import React from 'react'
import BottomNavigation from 'reactjs-bottom-navigation'
import 'reactjs-bottom-navigation/dist/index.css'

function Footer() {

  const bottomNavItems =[
    {title: 'Home',
     noActiveBg: false},
    {title: 'About'},
    {title: 'Projects'},
    {title: 'contact'}

  ]
  return (
    <footer className='site-footer'>
        <BottomNavigation
          items={bottomNavItems}
          selected= {0}
          onItemClick={(item) => console.log(item)}
         />
    </footer>
  )
}

export default Footer