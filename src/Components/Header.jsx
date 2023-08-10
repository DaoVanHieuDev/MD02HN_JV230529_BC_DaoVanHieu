import React from 'react'

function Header({total}) {
  return (
    <> 
    <div className='total'>
    <div className='totalMoney' id="totalMoney">
        <div className='totalMoney'> To Spend {total} usd You Have Money</div>
    </div>
 
</div>
</>
  )
}

export default Header