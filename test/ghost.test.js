/* eslint-disable no-unused-expressions */
import { describe, it, beforeEach, afterEach } from 'mocha';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import chai from 'chai';
import Ghost from '../src/ghost';

const expect = chai.expect;
chai.use(sinonChai);

let sandbox;
beforeEach(() => { sandbox = sinon.sandbox.create(); });
afterEach(() => sandbox.restore());

describe('ghost.js', () => {
  it('success', () => {
    return Promise.resolve();
  });
});
