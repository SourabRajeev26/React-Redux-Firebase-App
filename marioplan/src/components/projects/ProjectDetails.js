import React from 'react'

export default function ProjectDetails(props) {
    const id = props.match.params.id
    return (
        <div>
             <div class="card white">
                <div class="card-content black-text">
                    <span class="card-title">Project Title - {id}</span>
                        <p>React is an open-source JavaScript library for building user interfaces or UI components. 
                        It is maintained by Facebook and a community of individual developers and companies.</p>
                        <h6 className="red-text">Posted by Sourab</h6>
                </div>
                <div class="card-action">
                    <a>23rd August 2020</a>
                </div>
            </div>
        </div>
    )
}
