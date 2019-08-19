import React from 'react'
import PageTitle from './templates/PageTitle'

const About = () => {
    return (
        <div>
            <div className="container">
                <PageTitle title="About"/>
                <div className="row">
                    <div className="card">
                        <div className="card-body">
                            <p>Mus mauris vitae ultricies leo integer malesuada nunc vel risus. Amet nisl purus in
                                mollis nunc. Sit amet mattis vulputate enim nulla aliquet porttitor lacus. Proin nibh
                                nisl condimentum id venenatis a. Lorem sed risus ultricies tristique.</p>
                            <p>Eget gravida cum sociis natoque penatibus et magnis. Non pulvinar neque laoreet
                                suspendisse interdum consectetur. Eu volutpat odio facilisis mauris sit amet massa
                                vitae.</p>
                            <p>Mi proin sed libero enim. Quisque egestas diam in arcu cursus euismod quis viverra. Eget
                                aliquet nibh praesent tristique magna sit amet purus. Integer eget aliquet nibh praesent
                                tristique. Leo urna molestie at elementum.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;