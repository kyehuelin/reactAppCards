import React, {Component} from 'react'

import classes from './Tile.css'

class Tile extends Component {
    render () {
        return (
            <svg className={ classes.Tile} version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 400 300" enableBackground="new 0 0 400 300">
                <polygon id="line2" fill="none" stroke="#9B1F57" strokeWidth="3"  strokeMiterlimit="10" points="
                    200.5,32.5 352.5,116.5 199.5,200.5 47.5,116.5 "/>
                <polygon id="line1" fill="none" stroke="#9B1F57" strokeWidth="3"  strokeMiterlimit="10" points="
                    352.5,181.5 199.5,265.5 47.5,181.5 200.5,97.5 "/>
                <polygon id="line3" fill="none" stroke="#9B1F57" strokeWidth="3"  strokeMiterlimit="10" points="
                    199.5,200.5 199.5,265.5 352.5,181.5 352.5,116.5 "/>
                <polygon id="line4" fill="none" stroke="#9B1F57" strokeWidth="3"  strokeMiterlimit="10" points="
                    47.5,116.5 199.5,200.5 199.5,265.5 47.5,181.5 "/>
                <polygon id="line5" fill="none" stroke="#9B1F57" strokeWidth="3"  strokeMiterlimit="10" points="
                    200.5,32.5 200.5,97.5 47.5,181.5 47.5,116.5 "/>
                <polygon id="line6" fill="none" stroke="#9B1F57" strokeWidth="3"  strokeMiterlimit="10" points="
                    352.5,116.5 352.5,181.5 200.5,97.5 200.5,32.5 "/>
                <polygon id="shape1" fill="#7A1844" points="47.5,116.5 47.5,181.5 199.5,265.5 199.5,200.5 "/>
                <polygon id="shape2" fill="#E32E80" points="199.5,200.5 199.5,265.5 352.5,181.5 352.5,116.5 "/>
                <polygon id="shape3" fill="#9B1F57" points="199.5,200.5 352.5,116.5 200.5,32.5 47.5,116.5 "/>
                <path className={ this.props.icon === 'skills' ? classes.skills : null} id="skills" fill="#FFFFFF" d="M249.907,98.192c-0.577-0.683-1.859-1.044-3.107-0.868l-10.905,1.589
                    c-2.952-2.695-6.697-5.044-11.06-6.925l3.159-6.441c0.361-0.737-0.181-1.52-1.3-1.896c-7.445-2.472-15.631-3.869-23.928-4.184
                    c-1.274-0.046-2.436,0.445-2.797,1.175l-3.159,6.441c-5.371,0.169-10.647,0.937-15.562,2.257l-7.747-4.852
                    c-0.887-0.56-2.298-0.668-3.4-0.276c-7.351,2.649-13.488,6.219-18.015,10.288c-0.714,0.637-0.594,1.489,0.293,2.042l7.747,4.852
                    c-2.427,2.871-3.951,5.988-4.493,9.19l-10.897,1.582c-1.248,0.184-2.117,0.852-2.092,1.62c0.129,4.967,2.083,9.927,5.87,14.487
                    c0.568,0.683,1.859,1.044,3.107,0.868l10.905-1.589c2.944,2.695,6.696,5.036,11.06,6.925l-3.159,6.441
                    c-0.362,0.737,0.181,1.52,1.3,1.896c7.437,2.472,15.631,3.869,23.928,4.184c1.274,0.046,2.436-0.445,2.797-1.175l3.15-6.441
                    c5.38-0.169,10.656-0.937,15.562-2.257l7.747,4.852c0.887,0.56,2.298,0.668,3.4,0.276c7.359-2.649,13.496-6.226,18.024-10.288
                    c0.714-0.637,0.585-1.489-0.293-2.042l-7.755-4.852c2.436-2.871,3.959-5.988,4.493-9.19l10.905-1.582
                    c1.248-0.184,2.117-0.86,2.092-1.62C255.648,107.712,253.694,102.752,249.907,98.192z M211.811,121.124
                    c-7.282,4.153-18.859,3.992-25.805-0.361c-6.946-4.353-6.679-11.27,0.603-15.424c7.282-4.153,18.85-3.992,25.805,0.353
                    C219.36,110.046,219.093,116.971,211.811,121.124z"/>
            </svg>

        )
    }
}

export default Tile