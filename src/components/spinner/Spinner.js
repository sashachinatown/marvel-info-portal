const Spinner = () => {
    return(
        <svg 
            style = {
                {
                    margin: '0 auto',
                    background: 'none',
                    display: 'block'
                }
            }
            xmlns = "http://www.w3.org/2000/svg"
            xmlnsXlink = "http://www.w3.org/1999/xlink"
            version = "1.0"
            width = "64px"
            height = "64px"
            viewBox = "0 0 128 128"
            xmlSpace = "preserve" > 
            <rect x = "0"
                y = "0"
                width = "100%"
                height = "100%"
                fill = "#FFFFFF" 
            /> 
            <circle cx = "64.13"
                    cy = "64.13"
                    r = "27.63"
                    fill = "#000000"
            /> 
            <path d = "M64.13 18.5A45.63 45.63 0 1 1 18.5 64.13 45.63 45.63 0 0 1 64.13 18.5zm0 7.85a37.78 37.78 0 1 1-37.78 37.78 37.78 37.78 0 0 1 37.78-37.78z"
                fillRule = "evenodd"
                fill = "#000000" 
            /> 
            <g> <path d = "M95.25 17.4a56.26 56.26 0 0 0-76.8 13.23L12.1 26.2a64 64 0 0 1 87.6-15.17z"
                fill = "#000000"
                /> 
                <path d = "M95.25 17.4a56.26 56.26 0 0 0-76.8 13.23L12.1 26.2a64 64 0 0 1 87.6-15.17z"
                    fill = "#000000"
                    transform = "rotate(120 64 64)" 
                /> 
                <path d = "M95.25 17.4a56.26 56.26 0 0 0-76.8 13.23L12.1 26.2a64 64 0 0 1 87.6-15.17z"
                    fill = "#000000"
                    transform = "rotate(240 64 64)" 
                /> 
                <animateTransform attributeName = "transform"
                                type = "rotate"
                                from = "0 64 64"
                                to = "120 64 64"
                                dur = "1080ms"
                                repeatCount = "indefinite" 
                />
            </g>
        </svg >
    )
}

export default Spinner;