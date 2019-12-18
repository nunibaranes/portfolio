
import React, { Component } from 'react';

import './Controllers.scss'

import Title from '../../common/title/Title';
import { IControllersProps, IController } from "./Controller.interface"

class Controllers extends Component {
    props: IControllersProps;

    static defaultProps = {
        additionalClass: '',
        titleAdditionsClass: '',
        disableNextGeneration: false,
    }

    /**
     * getClasses
     * return classes refer to arguments
     */
    getClasses = (elData: IController = null): string => {
        const {gameIsRunning, additionalClass, disableNextGeneration} = this.props;
        const disabledClass = gameIsRunning || disableNextGeneration ? 'disabled' : '';
        let elDataClasses = '';
        if (elData) {
            // TODO: improve the condition
            const shouldDisableNextGeneration = elData.controllNextGeneration && disableNextGeneration
            
            elDataClasses = elData.toggleDisabledClass && gameIsRunning
            ? `${elData.classes} ${disabledClass}` 
            : (shouldDisableNextGeneration) ? `${elData.classes} ${disabledClass}` : `${elData.classes}`;
        }

        return (elDataClasses !== '') ? `${elDataClasses}` : `controllers ${additionalClass}`;
    }

    render() {
        const {
            title,
            controllers,
            titleAdditionsClass,
        } = this.props;

        return (
            <section className={this.getClasses()}>
                <Title title={ title } additionalClass={titleAdditionsClass}></Title>
                <div className={`controllers-wrapper`}>
                    {
                        controllers.map((controller: any) => {
                            return (
                                <div
                                    key={controller.controllerName}
                                    className={this.getClasses(controller)}
                                    onClick={() => { this.props.onControllerClicked(controller) }}
                                >
                                    {controller.title}
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        );
    }
}

export default Controllers;