import {questions} from './questions';

describe(`Questions reducer`, () => {
    it('Creates a new state by combining an existing state with a new question', () => {
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