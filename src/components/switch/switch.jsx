import React from 'react';

class Switch extends React.Component {
    render() {
        const { ...props } = this.props;
        return (
            <div>
                <button aria-label='toggle' {...props} />
            </div>
        )
    }
}

export default Switch;