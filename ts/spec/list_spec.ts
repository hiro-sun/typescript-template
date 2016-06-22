/// <reference path="../typings/index.d.ts" />

import * as assert from 'power-assert';
import * as sinon from 'sinon';

import {List} from '../src/list';

describe('Assert sample', () => {
    context("list", () => {
        it ('add', () => {
            var list = new List();
            var list2 = new List();
            list.add(1);
            list2.add(2);
            assert(list === list);
        });
    });
});

