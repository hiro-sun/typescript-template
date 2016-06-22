/// <reference path="../typings/index.d.ts" />

import * as assert from 'power-assert';
import * as sinon from 'sinon';

import {List} from '../src/list';

describe('Assert sample', () => {
    context("list test 1", () => {
        it ('add cell', () => {
            var list = new List();
            list.add(10);
            assert(list.get(0) === 10);
        });

        it ('delete cell', () => {
            // Not implements yet.
        });
    });
});

