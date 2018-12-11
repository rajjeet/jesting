import {questions} from './questions';

describe(`The questions reducer`, () => {
    it('simply works', () => {
        const state = [
            {question_id: "foo"},
            {question_id: "bar"},
        ];
        const newQuestion = {question_id: "baz"};

        const newState = questions(state, {type: `FETCHED_QUESTION`,
            question: newQuestion});

        expect(newState).toContain(newQuestion);
        expect(newState).toHaveLength(3);
        expect(state).not.toContain(newQuestion);
    })
});