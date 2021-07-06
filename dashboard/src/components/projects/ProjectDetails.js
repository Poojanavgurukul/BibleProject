import React from 'react'

function ProjectDetails(props) {
    console.log(props)
    const id = props.match.params.id;
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title -{id}</span>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque illo iusto est et, aliquam corrupti magnam distinctio voluptates incidunt mollitia facilis assumenda ipsum ipsa reprehenderit! Numquam dolor blanditiis eius beatae!</p>
                </div>
                <div  className="card-action gret lighten-4 grey-text">
                    <div>Poested By the Ninja</div>
                    <div>2nd September, 2am</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails
