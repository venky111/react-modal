import React from 'react';
import Switch from '../switch/switch'


const ToggleContext = React.createContext();

class Toggle extends React.Component {
    state = {
        on: false,
    }

    static Button() {
        return <ToggleContext.Consumer>
            { ({ on, toggle }) => {
                return <Switch on={on} onClick={toggle}>Modal Opener</Switch>
            }}
        </ToggleContext.Consumer>
    }

    static On({ children }) {
        return (
            <ToggleContext.Consumer>
                {({ on }) => {
                    return on ? children : null;
                }}
            </ToggleContext.Consumer>
        )
    }
    static Off({ children }){
        return (
            <ToggleContext.Consumer>
                {({ on }) => {
                    return on ? null : children;
                }}
            </ToggleContext.Consumer>
        )
    }

    toggle = () => {
        const { onToggle } = this.props;
        this.setState(({ on }) => ({ on: !on }), () => {
            if (typeof onToggle === 'function') {
                onToggle(this.state.on);
            }
        });
    };

    render() {
        return <ToggleContext.Provider value={{ on: this.state.on, toggle: this.toggle}}>
            {this.props.children}
        </ToggleContext.Provider>
    }
}

export default Toggle;