import React, { Component } from 'react';
import Header from './header';
import Content from './content'

export default class index extends Component {
    render() {
        const { resume } = this.props
        return (
            <div>
                <Content 
                    personalInfo={resume.personalInfo}
                    experience={resume.experience}
                    education={resume.education}
                />
            </div>
        )
    }
}
