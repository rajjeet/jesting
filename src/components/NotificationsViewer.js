import React from 'react';
import NotificationService from '../services/NotificationsService';

export default class NotificationViewer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: -1
        };
    }

    async componentDidMount() {
        let {count} = await NotificationService.getNotifications();
        this.setState({count});
    }

    render() {
        return (
            <div className="mt-3 mb-2">
                <div className="notifications">
                    {this.state.count === -1 ? 'Loading...'
                        : `${this.state.count} Notifications Awaiting!`}
                </div>
            </div>
        );
    }
}