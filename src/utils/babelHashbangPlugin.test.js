import { transform } from '@babel/core';
import babelHashbangPlugin from './babelHashbangPlugin';

describe('babelHashbangPlugin', () => {
  test('script add hashbang node => /usr/bin/env node', () => {
    // Arrange
    const source = 'var a = 1;';
    const options = { plugins: [[babelHashbangPlugin, { hashbang: '/usr/bin/env node' }]] };

    // Acr
    const { code } = transform(source, options);

    // Assert
    expect(code).toBe('#!/usr/bin/env node\nvar a = 1;');
  });

  test('script add hashbang node => no option', () => {
    // Arrange
    const source = 'var a = 1;';
    const options = { plugins: [[babelHashbangPlugin]] };

    // Acr
    const { code } = transform(source, options);

    // Assert
    expect(code).toBe('#!/usr/bin/env node\nvar a = 1;');
  });
});
