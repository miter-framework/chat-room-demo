/// <reference types="mocha" />

import { expect, use } from 'chai';
import * as sinon from 'sinon';
import * as sinonChai from 'sinon-chai';
use(sinonChai);

describe('chat-room-demo', () => {
    it('should have a placeholder test', () => {
        expect(true).to.be.true;
    });
});
