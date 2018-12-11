import {delay} from 'redux-saga';

describe(`Question List component`, () => {
    it(`should not regress`, done => {
        setTimeout(done, 200)
    });

    it(`should not regress with promise`, () => {
        return new Promise(resolve => setTimeout(resolve, 200));
    });

    it(`should not regress with async`, async () => {
        await delay(200);
    });
});
