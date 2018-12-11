import NotificationViewer from './NotificationsViewer';
import {delay} from "redux-saga";
import React from 'react';
import renderer from 'react-test-renderer';


jest.mock('../services/NotificationsService');
const notificationService = require('../services/NotificationsService').default;

describe("The NotificationViewer Component", () => {
    beforeAll(() => {
        notificationService.__setCount(10);
    });
    it("should display the correct number of notification", async () => {
        const tree = renderer.create(<NotificationViewer/>);
        await delay();
        const instance = tree.root;
        const component = instance.findByProps({className: `notifications`});
        const text = component.children[0];
        expect(text).toEqual("10 Notifications Awaiting!");
    });
});