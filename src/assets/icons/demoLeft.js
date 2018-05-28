import React from 'react'

const demoLeft = ( props ) => {
    const size = {
        height: props.height ? `${props.height}px` : 'initial',
        width:props.width ? `${props.width}px` : 'initial'
    }
    return (
        <svg style={size} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 40 24" >
<path fill="#D3207F" d="M37.9,0.2h-36C0.8,0.2,0,0.9,0,1.9v20.4C0,23.2,0.8,24,1.9,24h36c1,0,1.9-0.8,1.9-1.7V1.9
	C39.8,0.9,38.9,0.2,37.9,0.2z"/>
<g>
	<path fill="#FFFFFF" d="M12.3,11v2c0,0.3-0.3,0.6-0.6,0.6H7.6v2.2c0,0.4-0.5,0.7-0.8,0.3L3,12.3c-0.2-0.2-0.2-0.5,0-0.7l3.7-3.7
		c0.3-0.3,0.8-0.1,0.8,0.3v2.2h4.1C12.1,10.4,12.3,10.7,12.3,11z"/>
</g>
<rect x="19.2" y="7.6" fill="none" width="24" height="17.1"/>
<g>
	<polygon id="shape1" fill="#FFFFFF" points="16.8,8.7 16.8,14.5 25.8,21 25.8,15.3 	"/>
	<polygon id="shape2" fill="#FFFFFF" points="26.7,15.2 26.7,20.9 35.7,14.4 35.7,8.6 	"/>
	<polygon id="shape3" fill="#FFFFFF" points="26.2,14.6 35.1,8.1 26.2,3.2 17.2,8.1 	"/>
</g>
        </svg>
    )
}
export default demoLeft
