import { transform } from '@babel/core';
import babelBannerPlugin from './babelBannerPlugin';

describe('babelBannerPlugin', () => {
  test('script add comment to header => hello', () => {
    // Arrange
    const source = 'var a = 1;';
    const options = { plugins: [[babelBannerPlugin, { banner: 'hello' }]] };

    // Act
    const { code } = transform(source, options);

    // Assert
    expect(code).toBe('/*hello*/\nvar a = 1;');
  });

  test('script add comment to header => number 1', () => {
    // Arrange
    const source = 'var a = 1;';
    const options = { plugins: [[babelBannerPlugin, { banner: 1 }]] };

    // Act
    const { code } = transform(source, options);

    // Assert
    expect(code).toBe('/**/\nvar a = 1;');
  });
});
