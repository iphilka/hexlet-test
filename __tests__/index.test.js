import { beforeEach, test, expect } from '@jest/globals';

import { execFileSync } from 'child_process';
import { fileURLToPath } from "node:url";
import path from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let rows1;
let rows2;

beforeEach(() => {
  const options = { encoding: 'utf8', cwd: path.join(__dirname, '..') };

  const result1 = execFileSync(
    'bin/weather.js',
    ['__fixtures__/weather1.csv'],
    options,
  );
  rows1 = result1.trim().split('\n')

  const result2 = execFileSync(
    'bin/weather.js',
    ['__fixtures__/weather2.csv'],
    options,
  );
  rows2 = result2.trim().split('\n')
});

test('step1', () => {
  expect(rows1[0]).toEqual('Count: 20');
  expect(rows2[0]).toEqual('Count: 9');
});

test('step2', () => {
  expect(rows1[1]).toEqual('Cities: Chicago, Denver, Los Angeles, Miami, Seattle');
  expect(rows2[1]).toEqual('Cities: Chicago, Denver, Miami, Seattle');
});

test('step3', () => {
  expect(rows1[2]).toEqual('Humidity: Min: 58, Max: 80');
  expect(rows2[2]).toEqual('Humidity: Min: 30, Max: 83');
});

test('step4', () => {
  expect(rows1[3]).toEqual('HottestDay: 2023-04-18 Los Angeles');
  expect(rows2[3]).toEqual('HottestDay: 2023-04-18 Miami');
});

test('step5', () => {
  expect(rows1[4]).toEqual('HottestCity: Miami');
  expect(rows2[4]).toEqual('HottestCity: Miami');
});
