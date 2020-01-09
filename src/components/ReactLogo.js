import React, { Component } from 'react';

class ReactLogo extends Component {
    render(){
        return(
            <div class="svg-container">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 640 640" width="425" height="425">

                    <path id="circle" fill="#000000" d="M378.76 320.52C378.76 351.53 353.36 376.7 322.06 376.7C290.77 376.7 265.36 351.53 265.36 320.52C265.36 289.51 290.77 264.33 322.06 264.33C353.36 264.33 378.76 289.51 378.76 320.52Z" />
                    <path id="orbit1" fill-opacity="0" stroke="#7174e0" stroke-width="19" stroke-opacity="1" d="M405.9 274.06C473.08 393.25 490.24 511.08 444.18 537.04C398.13 563 306.2 487.31 239.03 368.13C171.85 248.94 154.69 131.11 200.75 105.15C246.8 79.19 338.73 154.88 405.9 274.06Z" />
                    <path id="orbit2" fill-opacity="0" stroke="#7174e0" stroke-width="19" stroke-opacity="1" d="M402.81 368.13C334.06 486.41 241.14 560.88 195.44 534.32C149.73 507.75 168.44 390.16 237.19 271.87C305.94 153.59 398.86 79.12 444.56 105.68C490.27 132.25 471.56 249.84 402.81 368.13Z" />
                    <path id="orbit3" fill-opacity="0" stroke="#7174e0" stroke-width="19" stroke-opacity="1" d="M323.21 219.49C460.01 217.59 571.66 258.96 572.4 311.82C573.13 364.68 462.66 409.13 325.87 411.03C189.07 412.93 77.41 371.56 76.67 318.7C75.94 265.84 186.41 221.38 323.21 219.49Z" />

                </svg>
            </div>
        );
    }
}

export default ReactLogo;